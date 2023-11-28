import Header from "./components/Header/Header";
import AddEmployee from "./components/AddEmployeeSection/AddEmployee";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome/Welcome";
function App() {
	const params = useState(window.location.pathname);
	return (
		<div className="App w-100 vh-100">
			<Header />
			
				{/* //implement routing for add and list */}
                {params[0] === "/" && <Welcome/>}
				{params[0] === "/add" && <AddEmployee />}
				{params[0] === "/list" && <EmployeeList />}
			
		</div>
	);
}

export default App;
