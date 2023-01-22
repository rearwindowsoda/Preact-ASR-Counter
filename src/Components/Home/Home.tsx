import Points from "../Points/Points";
import PointCountStatus from "../Points/PointsCountStatus";
export default function Home(){
	return (
		<>
			<div id="primary_wrapper">
				<div id={"secondary_wrapper"}>
					<h1>ASR Points</h1>
					<PointCountStatus />
					<Points />
				</div>
			</div>
		</>
	);
}