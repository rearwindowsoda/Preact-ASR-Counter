import { useRef, useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";

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
			setErrorMessage("Only numbers are allowed in this input.");
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
			<label class="form-label mt-4">Subtract points:</label>
			<div class="form-group">
				<div class="input-group mb-3">
					<span class="input-group-text">ASR</span>
					<input type="number" class="form-control" min={0}  onfocusout={trackInputError} onfocusin={errorReset} ref={inputRef}/>
					<span class="input-group-text">points</span>
				</div>
				{errorMessage ?? <div class="invalid-feedback">{errorMessage}</div>}
				<div class="points__button-group"><button onClick={props.clickFunction} class="btn btn-secondary btn-sm">Subtract</button><button onClick={inputReset} class="btn btn-secondary btn-sm">Reset Input</button></div>
			</div>
		</div>
	);
	
}
