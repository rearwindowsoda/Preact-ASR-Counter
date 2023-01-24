
export default function PointsAlert (props: {message: string, handleStateChangeFunction: () => void}) {
	setTimeout(() => props.handleStateChangeFunction(), 2000);
	return(<div class="alert alert-dismissible alert-danger alert-subtraction">
		<strong>{props.message}</strong>
	</div>);
}