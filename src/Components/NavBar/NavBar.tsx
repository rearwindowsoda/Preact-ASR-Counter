import UserAvatar from "@/Components/NavBar/UserAvatar/UserAvatar";

			
export default function NavBar() {
	return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">ASR Points</a>
			<div id="navbarColor01">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<a class="nav-link active" href="/">Home
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="/user">User panel
						</a>
					</li>
					{/* TODO: Change that later. Just for testing */}
					{true && <UserAvatar />}
				</ul>
			</div></div><div></div></nav>
	);
}