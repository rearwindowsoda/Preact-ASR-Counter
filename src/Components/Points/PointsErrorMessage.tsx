export default function PointsErrorMessage(props: {message: string}) {
	return (
		<div id="points-error-message" class={"text-danger"}>{props.message}</div>
	);
}