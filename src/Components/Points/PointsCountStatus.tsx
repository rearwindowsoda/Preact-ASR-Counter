import { count } from "../../Signals/PointSignal";

import "./Points.css";

export default function PointCountStatus () {
	return(
		<>
			<div class="card text-white bg-success mb-3" style="max-width: 20rem;">
				<div class="card-header">Your points:</div>
				<div class="card-body">
					<p class="card-text text-center">{count}</p>
				</div>
			</div>
			<div><h5>Points multiplied:</h5>
				<p class={"secondary-counter"}>{count.value * 30}</p></div>
		</>
	);
}