import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content";

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Header />
            <Content />
        </div>
    );
}

export default App;
