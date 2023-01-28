import { count } from "../../Signals/PointSignal";

import "./Points.css";

export default function PointCountStatus () {
	return(
		<>
			<div class="mb-3" style="max-width: 20rem;" >
				<div>Your points:</div>
				<div id="point-status">
					<p class="text-center points-status-main">{count}</p>
				</div>
			</div>
			<div><h5>Points multiplied:</h5>
				<p class={"secondary-counter"}>{count.value * 30}</p></div>
		</>
	);
}