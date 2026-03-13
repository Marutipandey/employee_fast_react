from fastapi import APIRouter, HTTPException
from database import attendance_collection
from models import Attendance

router = APIRouter()


@router.post("/attendance")
def mark_attendance(att: Attendance):
    attendance_collection.insert_one(att.dict())
    return {"message": "Attendance saved"}


@router.get("/attendance/{employee_id}")
def get_attendance(employee_id: str):
    records = list(attendance_collection.find({"employee_id": employee_id}, {"_id": 0}))
    if not records:
        raise HTTPException(status_code=404, detail="No attendance records found")
    return records
