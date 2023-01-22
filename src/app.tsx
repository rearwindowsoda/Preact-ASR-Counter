import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import  NotFound  from "@/Components/NotFound/NotFound";
import "./app.css";

export function App() {
	return (
		<>
			<NavBar/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
	
