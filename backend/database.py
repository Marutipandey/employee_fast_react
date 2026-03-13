import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()  # .env load karne ke liye

MONGODB_URI = os.getenv("MONGODB_URI")  # Atlas URI use karo

client = MongoClient(MONGODB_URI)       # Atlas se connect
db = client["hrms_db"]                  # Database select karo

employee_collection = db["employees"]
attendance_collection = db["attendance"]
