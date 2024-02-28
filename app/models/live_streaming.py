from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class LiveStreaming(Base):
    __tablename__ = 'live_streamings'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), index=True)
    stream_url = Column(String(255))
    is_live = Column(Boolean, default=False)
    started_at = Column(DateTime)
    ended_at = Column(DateTime)