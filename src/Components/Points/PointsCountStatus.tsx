import { count } from "../../Signals/PointSignal";

import "./Points.css";

export default function PointCountStatus () {
	return(
		<>
			<div class="mb-3" >
				<div class="text-success"><h2>Your points:</h2></div>
				<div id="point-status">
					<p class="text-center points-status-main">{count}</p>
				</div>
			</div>
			<div><h3>Points multiplied:</h3>
				<h4 class={"secondary-counter"}>{count.value * 30}</h4></div>
		</>
	);
}