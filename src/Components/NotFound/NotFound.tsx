export default function NotFound() {
	const params = window.location.pathname;
	console.log(params);
	
	return(
		<div class="alert alert-dismissible alert-warning">
			<h4 class="alert-heading">404</h4>
			<p class="mb-0">Page not found. {params} is not a valid path</p>
		</div>
	);
}