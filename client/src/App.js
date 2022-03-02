import Pageloader from "./components/Pageloader";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import Feed from "./pages/Feed";
import ChatWrapper from "./components/chat/ChatWrapper";

function App() {
  return (
    <div>
      <Pageloader />
      <div className="app-overlay is-sidebar-v1"></div>
      <Sidebar />
      <div className="view-wrapper is-sidebar-v1 is-fold">
				<Feed />
			</div>
      <ChatWrapper />
    </div>
  );
}

export default App;
