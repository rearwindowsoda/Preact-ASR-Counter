import Points from "@/Components/Points/Points";
import PointCountStatus from "@/Components/Points/PointsCountStatus";
import UserColumn from "@/Components/UserColumn/UserColumn";
export default function Home(){
	return (
		<>
			<div id="primary_wrapper">
				<div class="secondary-wrapper">
					<h2>ASR Points</h2>
					<PointCountStatus />
					<Points />
				</div>
				<UserColumn />
			</div>
		</>
	);
}