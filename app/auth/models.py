# from pydantic import BaseModel

# class UserBase(BaseModel):
#     username: str
#     password: str
#     email: str
#     user_type: str

# class UserCreate(UserBase):
#     pass

# class User(UserBase):
#     pass

#     class Config:
#         orm_mode = True



































# from sqlalchemy import Column, Integer, String, DateTime, Enum
# from sqlalchemy.orm import relationship
# from database import Base


# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String(50), unique=True, index=True)
#     password = Column(String(50))
#     email = Column(String(20), unique=True, index=True)
#     user_type = Column(Enum('student', 'organization', name='user_types'))

#     def __repr__(self):
#         return f"User(id={self.id}, username='{self.username}', email='{self.email}', user_type = '{self.user_type}')"


from sqlalchemy import Column, Integer, String, DateTime, Enum
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username = Column(String(50), unique=True, index=True)
    password = Column(String(50))
    email = Column(String(20), unique=True, index=True)
    user_type = Column(Enum('student', 'organization', name='user_types'))

    def __repr__(self):
        return f"User(id={self.id}, username='{self.username}', email='{self.email}', user_type = '{self.user_type}')"