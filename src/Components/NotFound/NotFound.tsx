import { useParams } from "react-router-dom";

export default function NotFound() {
	const params = useParams();
	
	return(
		<div class="alert alert-dismissible alert-warning">
			<h4 class="alert-heading">404</h4>
			<p class="mb-0">Page not found. {(Object.values(params)).toString()} is not a valid path</p>
		</div>
	);
}