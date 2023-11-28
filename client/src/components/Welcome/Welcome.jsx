import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Welcome() {
	return (
		<div className="w-100 h-100 d-flex flex-column align-content-center justify-content-center align-items-center">
			<h1 className="text-center m-5">Welcome</h1>

			<div className="useful-links d-flex flex-column gap-2">
				<a href="/add" className="btn btn-primary hstack gap-2">
					<span className="">Add Employee</span>
					<FaArrowRight />
				</a>
				<a href="/list" className="btn btn-primary hstack gap-2">
					<span className="">List Employee</span>
					<FaArrowRight />
				</a>
			</div>
		</div>
	);
}

export default Welcome;
