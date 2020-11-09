//import logo from "./ui/logo-coral.svg";
import "./css/uifont.css";
import "./css/App.css";
import "./css/props.css";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
