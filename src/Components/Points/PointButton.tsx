import changePoints from "@/Components/Points/utils/points-functions";
import "./Points.css";

			
interface PointsButtonProps {
	operator: string;
	value: number;
	}
export default function PointButton (props: PointsButtonProps) {
	const {operator, value } = props;
	return (
		<button onClick={() => changePoints(operator, value )} class="btn btn-success">+{value}pkt</button>
	);

}