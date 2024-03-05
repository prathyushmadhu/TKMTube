# from fastapi import FastAPI, Depends, HTTPException
# from sqlalchemy.orm import Session
# from .database import SessionLocal, engine, Base
# from . import models

# Base.metadata.create_all(bind=engine)

# app = FastAPI()

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# @app.post("/users/", response_model = models.User)
# def create_user(user: models.UserCreate, db: Session = Depends(get_db)):
#     db_user = models.User(**user.dict())
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user






from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from .models import User
from pydantic import BaseModel

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()

class UserBase(BaseModel):
    username: str
    password: str
    email: str
    user_type: str

class UserCreate(UserBase):
    pass

class userp(UserBase):
    class Config:
        orm_mode = True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model = userp)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}", response_model = userp)
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

