import Points from "@/Components/Points/Points";
import PointCountStatus from "@/Components/Points/PointsCountStatus";
export default function Home(){
	return (
		<>
			<div class="container-md">
				<h1>ASR Points</h1>
				<PointCountStatus />
				<Points />
			</div>
		</>
	);
}