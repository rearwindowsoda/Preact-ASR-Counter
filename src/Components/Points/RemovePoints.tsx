import { useRef, useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import PointsErrorMessage from "./PointsErrorMessage";

interface RemovePointsProps {
	changeFunction: (event: JSXInternal.TargetedEvent) => void
	clickFunction: (event: JSXInternal.TargetedEvent) => void;
}
export default function RemovePoints (props: RemovePointsProps) {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	
	function trackInputError(event: JSXInternal.TargetedEvent) {
		props.changeFunction(event);
		const currentInput = inputRef.current;
		console.log(currentInput?.value);
		
		if(isNaN(parseInt((currentInput as unknown as HTMLInputElement)?.value))){
			setErrorMessage("Only numbers can be subtracted 🖩");
			currentInput?.classList.add("is-invalid");
		}
	}

	
	
	function inputReset() {
		if(inputRef.current){
			inputRef.current.value = "";
		}
	}
	function errorReset() {
		setErrorMessage(null);
		inputRef.current?.classList.remove("is-invalid");
	}

		
	return (
		<div class="form-group">
			{errorMessage && <PointsErrorMessage message={errorMessage as unknown as string} />}
			<label class="form-label mt-4">Subtract points:</label>
			<div class="form-group">
				<div class="input-group mb-3">
					<span class="input-group-text">ASR</span>
					<input type="number" class="form-control" min={0}  onfocusout={trackInputError} onfocusin={errorReset} ref={inputRef}/>
					<span class="input-group-text">points</span>
				</div>
				<div class="points__button-group">
					<button onClick={props.clickFunction} class="btn btn-outline-secondary">Subtract</button>
					<button onClick={inputReset} class="btn btn-outline-secondary">Reset Input</button>
				</div>
			</div>
			
		</div>
	);
	
}
