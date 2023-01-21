import { count } from "../../Signals/PointSignal";

import "./Points.css";

export default function PointCountStatus () {
	return(
		<>
			<div><h2 class={"main-counter"}>{count}</h2></div>
			<div><h5>Points multiplied:</h5>
				<p class={"secondary-counter"}>{count.value * 30}</p></div>
		</>
	);
}