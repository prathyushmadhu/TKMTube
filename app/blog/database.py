from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database connection details
SQLALCHEMY_DATABASE_URL = "mysql://avnadmin:AVNS_6R4qVtdTKPKzZlsmoqP@mysql-23942956-neerajmanivarnan-001.a.aivencloud.com:20164/tkmtube"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

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
