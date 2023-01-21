import { useEffect, useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import { count } from "../../Signals/PointSignal";
import PointButton from "./PointButton";
import "./Points.css";
import PointsAlert from "./PointsAlert";
import RemovePoints from "./RemovePoints";

function Points() {
	const [pointsToRemove, setPointsToRemove] = useState<number>(0);
	const [pointsError, setPointsError] = useState<string | null>(null);

	const resetPointsError = ()=> {setPointsError(null);};

	const handlePointsToRemoveChange = (event: JSXInternal.TargetedEvent) => {
		if(isNaN(Number((event.currentTarget as HTMLInputElement).value))){
			setPointsToRemove(0);
			return;
		}
		setPointsToRemove(Number((event.currentTarget as HTMLInputElement).value));
	};
	
	const removePointsOnClick = (event: JSXInternal.TargetedEvent) => {
		event.preventDefault();
		count.value-= pointsToRemove;
		if(count.value < 0){
			localStorage.setItem("points-store", "0");
			setPointsError("Cannot go below zero 😭. Counter reset.");
			return;
		}
		localStorage.setItem("points-store", count.value.toString()); 	
	};
	
	useEffect(() => {
		const pointsFromLocalStorage = localStorage.getItem("points-store");
		if (pointsFromLocalStorage === null) {
			localStorage.setItem("points-store", "0");
			count.value = 0;
		} else {
			count.value = Number(pointsFromLocalStorage);
		}
	}, [count.value]);
	

	return (
		<>
			{pointsError && <PointsAlert message={pointsError} handleStateChangeFunction={resetPointsError} /> }
			<div id="points__container">

				<div class="points__button-group">
					<PointButton operator="+" value={1}></PointButton>
					<PointButton operator="+" value={2}></PointButton>
					<PointButton operator="+" value={3}></PointButton>
				</div>
				<div class="points__button-group">
					<PointButton operator="+" value={4}></PointButton>
					<PointButton operator="+" value={5}></PointButton>
					<PointButton operator="+" value={6}></PointButton>
				</div>
				<div class="points__button-group">
					<PointButton operator="+" value={7}></PointButton>
					<PointButton operator="+" value={8}></PointButton>
					<PointButton operator="+" value={9}></PointButton>
				</div>
			</div>

			<RemovePoints changeFunction={handlePointsToRemoveChange} clickFunction={removePointsOnClick} />
		</>
	);
}

export default Points;

