import {useState} from "react"
import API from "../api/api"

function AddEmployee(){

const [form,setForm]=useState({
employee_id:"",
name:"",
email:"",
department:""
})

const submit=async(e)=>{

e.preventDefault()

await API.post("/employees",form)

alert("Employee Added")

}

return(

<form onSubmit={submit}>

<input placeholder="Employee ID"
onChange={(e)=>setForm({...form,employee_id:e.target.value})}
/>

<input placeholder="Full Name"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input placeholder="Department"
onChange={(e)=>setForm({...form,department:e.target.value})}
/>

<button type="submit">Add Employee</button>

</form>

)

}

export default AddEmployee
