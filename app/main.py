from fastapi import FastAPI
# from databases import SessionLocal

# from blog.main import  app as blog_app
from app.auth.main import  app as auth_app


app = FastAPI()

app.mount("/auth", auth_app)
# app.mount("/blog",blog_app)




