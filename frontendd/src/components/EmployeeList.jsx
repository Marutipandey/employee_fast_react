import { useEffect, useState } from "react";
import API from "../api/api";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {

    const res = await API.get("/employees");

    console.log(res.data);   

    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (

    <div>

      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (

        <table border="1">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>

            {employees.map((emp) => (
              <tr key={emp.employee_id}>
                <td>{emp.employee_id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
              </tr>
            ))}

          </tbody>

        </table>

      )}

    </div>

  );
}

export default EmployeeList;
