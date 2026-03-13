from fastapi import APIRouter, HTTPException
from database import employee_collection
from models import Employee

router = APIRouter()


@router.get("/employees")
def get_employees():
    employees = list(employee_collection.find({}, {"_id": 0}))  # _id hide kar rahe
    return employees


@router.post("/employees")
def add_employee(emp: Employee):
    existing = employee_collection.find_one({"employee_id": emp.employee_id})
    if existing:
        raise HTTPException(status_code=400, detail="Employee already exists")
    
    employee_collection.insert_one(emp.dict())
    return {"message": "Employee added"}


@router.delete("/employees/{employee_id}")
def delete_employee(employee_id: str):
    result = employee_collection.delete_one({"employee_id": employee_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    return {"message": "Employee deleted"}
