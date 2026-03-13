import AddEmployee from "../components/AddEmployee"
import EmployeeList from "../components/EmployeeList"

function Employees(){

return(

<div>

<div className="card">

<h2>Add Employee</h2>

<AddEmployee/>

</div>

<div className="card">

<h2>Employee List</h2>

<EmployeeList/>

</div>

</div>

)

}

export default Employees
