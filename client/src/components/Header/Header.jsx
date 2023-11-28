import React from "react";
import Logo from "../../assets/logo-01.png";

import "./header.css";

const Header = () => {
	return (
		<div className="header hstack justify-content-between ">
			<div className="logo-container">
				<img src={Logo} alt="infox Logo" />
				<p className="logo-text">infox</p>
			</div>
			<div className="d-flex flex-column"> 
				<p className="header-text h4 text-white">Employee Management</p>
				<div className="hstack gap-2 justify-content-end">
					<a  className="text-decoration-none fst-none text-white" href="/">Home</a>
					<a  className="text-decoration-none fst-none text-white" href="/add">Add Employee</a>
					<a  className="text-decoration-none fst-none text-white" href="/list">List Employee</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
