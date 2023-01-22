import {BrowserRouter, Route, Routes } from "react-router-dom";


import "./app.css";
import NavBar from "@/Components/NavBar/NavBar";
import Home from "@/Components/Home/Home";
import TestComponent from "./Components/Test/Test";

export function App() {
	return (
		<>
			<NavBar/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<TestComponent />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
	
