import Pageloader from "./components/Pageloader";
import Sidebar from "./components/Sidebar";
import ChatWrapper from "./components/ChatWrapper";

function App() {
  return (
    <div>
      <Pageloader />
      <div className="app-overlay is-sidebar-v1"></div>
      <Sidebar />
      <div className="view-wrapper is-sidebar-v1 is-fold">Home</div>
      <ChatWrapper />
    </div>
  );
}

export default App;
