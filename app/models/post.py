
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Post(Base):
    __tablename__ = 'posts'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), index=True)
    media_type = Column(String(20))
    media_url = Column(String(255))
    created_at = Column(DateTime)
