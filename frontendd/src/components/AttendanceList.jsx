import { useEffect, useState } from "react";
import API from "../api/api";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {

    await API.delete(`/employees/${id}`);

    alert("Employee Deleted");

    loadEmployees();   // list refresh

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
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {employees.map((emp) => (

              <tr key={emp.employee_id}>

                <td>{emp.employee_id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>

                <td>

                  <button
                    onClick={() => deleteEmployee(emp.employee_id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );
}

export default EmployeeList;
