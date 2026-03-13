import AttendanceForm from "../components/AttendanceForm"
import AttendanceList from "../components/AttendanceList"

function Attendance(){

return(

<div>

<div className="card">

<h2>Mark Attendance</h2>

<AttendanceForm/>

</div>

<div className="card">

<h2>Attendance Records</h2>

<AttendanceList/>

</div>

</div>

)

}

export default Attendance
