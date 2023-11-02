from datetime import date
import os, base64
import json, hashlib, binascii
from __init__ import db
from sqlalchemy.exc import IntegrityError

class Graph(db.Meetings):
    __tablename__ = 'Meetings'
    id = db.Column(db.Integer, primary_key=True)
    _name = db.Column(db.String(100), unique=False, nullable=False, primary_key=True)
    _desc = db.Column(db.String(100), unique=False, nullable=False, primary_key=True)

    def __init__(self, name, desc):
        self._name = name
        self._desc = desc

        
def create(self):
    try: 
        db.session.add(self)  # add prepares to persist person object to Users table
        db.session.commit()  # SqlAlchemy "unit of work pattern" requires a manual commit
        return self
    except IntegrityError:
        db.session.remove()
        return None
    
def read(self):
    return { 
        "id": self.id,
        "username": self._name,
        "score": self._desc
    }
    
def delete(self):
    db.session.delete(self)
    db.session.commit()
    return None

db.create_all()