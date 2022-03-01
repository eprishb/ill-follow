import Pageloader from "../../components/Pageloader"
import Sidebar from "../../components/Sidebar"

function Home() {
	return (
		<div>
			Home
			<Pageloader />
			<div className="app-overlay is-sidebar-v1"></div>
			<Sidebar />
		</div>
	)
}

export default Home