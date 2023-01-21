import NavBar from "./Components/NavBar/NavBar";
import Points from "./Components/Points/Points";

import "./app.css";
import PointCountStatus from "./Components/Points/PointsCountStatus";

export function App() {
	return (
		<>
			<NavBar />
			<div id="primary_wrapper">
				<div id={"secondary_wrapper"}>
					<h1>ASR Points</h1>
					<PointCountStatus />
					<Points />
				</div>
				<div id={"secondary_wrapper"}>
					<h1>ASR Points</h1>
					<PointCountStatus />
					<Points />
				</div>
			</div>
		</>
	);
}
	
