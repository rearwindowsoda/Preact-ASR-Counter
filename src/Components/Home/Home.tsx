import Points from "@/Components/Points/Points";
import PointCountStatus from "@/Components/Points/PointsCountStatus";
export default function Home(){
	return (
		<>
			<div id="primary_wrapper">
					<h2>ASR Points</h2>
					<PointCountStatus />
					<Points />
			</div>
		</>
	);
}