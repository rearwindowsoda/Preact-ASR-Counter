import { count } from "@/Signals/PointSignal";



export default function changePoints(operator: string, value: number): void {
	switch (operator) {
	case "+":
		count.value+= value;
		break;
	case "-":
		count.value-= value;
		break;
	}
	localStorage.setItem("points-store", count.value.toString());
	return void 0;
}		
			
