import "./App.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"

function App(){

return(

<BrowserRouter>

<nav>

<Link to="/">Employees</Link>
<Link to="/attendance">Attendance</Link>

</nav>

<div className="container">

<Routes>

<Route path="/" element={<Employees/>}/>
<Route path="/attendance" element={<Attendance/>}/>

</Routes>

</div>

</BrowserRouter>

)

}

export default App
