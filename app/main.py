from fastapi import FastAPI
# from databases import SessionLocal

from blog.main import  app as blog_app

app = FastAPI()

app.mount("/blog",blog_app)




