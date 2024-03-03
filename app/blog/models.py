from database import Base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, Integer, String, DateTime


Base = declarative_base()

# Define Blog model
class Blog(Base):
    __tablename__ = "blog"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False)
    title = Column(String, nullable=False)
    time = Column(String, nullable=False)

    def __repr__(self):
        return f"Blog(id={self.id}, username='{self.username}', title='{self.title}', time='{self.time}')"
