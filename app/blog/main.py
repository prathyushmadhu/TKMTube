from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from models import Blog
from database import SessionLocal
from typing import List


app = FastAPI()

# Dependency for database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/blogs", response_model=List[Blog])
def get_all_blogs(db: Session = Depends(get_db)):
    blogs = db.query(Blog).all()
    return blogs

@app.post("/blogs", response_model=Blog)
def create_blog(blog: Blog, db: Session = Depends(get_db)):
    db.add(blog)
    db.commit()
    db.refresh(blog)  # Refresh object to get newly assigned ID
    return blog


@app.get("/blogs/{blog_id}", response_model=Blog)
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()
    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
    return blog


@app.put("/blogs/{blog_id}", response_model=Blog)
def update_blog(blog_id: int, updated_blog: Blog, db: Session = Depends(get_db)):
    existing_blog = db.query(Blog).filter(Blog.id == blog_id).first()
    if not existing_blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")

    existing_blog.username = updated_blog.username
    existing_blog.title = updated_blog.title
    existing_blog.time = updated_blog.time  # Update time if needed (modify based on your logic)

    db.commit()
    return existing_blog


@app.delete("/blogs/{blog_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    db.query(Blog).filter(Blog.id == blog_id).delete()
    db.commit()
    return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000)
