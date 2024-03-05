# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.ext.declarative import declarative_base
# from .config import DB_URL

# SQLALCHEMY_DATABASE_URL = DB_URL

# engine = create_engine(SQLALCHEMY_DATABASE_URL)

# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()




from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .config import DB_URL

SQLALCHEMY_DATABASE_URL = DB_URL

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)