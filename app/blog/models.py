# # from database import Base
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy import create_engine, Column, Integer, String, DateTime,Boolean
# from sqlalchemy.orm import relationship
# from pydantic import BaseModel
# from .database import Base




# # class Blog(BaseModel):
# #     # __tablename__ = "blog"

# #     id = Column(Integer, primary_key=True, autoincrement=True)
# #     username = Column(String, nullable=False)
# #     title = Column(String, nullable=False)
# #     time = Column(String, nullable=False)

# #     def __repr__(self):
# #         return f"Blog(id={self.id}, username='{self.username}', title='{self.title}', time='{self.time}')"





# class Blog(BaseModel):
#     blog_number: int
#     username: str
#     title: str
#     message : str
#     time: str

#     # You can add additional validators or configuration here if needed


# class Student(BaseModel):
#     name : str
#     marks : int

#     class Config:
#         orm_mode = True


from pydantic import BaseModel

class Blog(BaseModel):
    blog_number: int
    username: str
    title: str
    message: str
    time: str

class BlogCreate(Blog):
    pass

class BlogP(Blog):
    class config:
        orm_mode = True

# class Student(BaseModel):
#     name: str
#     marks: int

