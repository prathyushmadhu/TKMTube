from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql://avnadmin:AVNS_6R4qVtdTKPKzZlsmoqP@mysql-23942956-neerajmanivarnan-001.a.aivencloud.com:20164/tkmtube"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



# Define Blog model
