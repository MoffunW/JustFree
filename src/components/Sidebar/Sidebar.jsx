import "./Sidebar.scss";
import logo from "../../assets/icons/logo.png";
import Nav from "./Nav";

function Sidebar() {
    return (
        <div className="sidebar">
            <a className="sidebar__logo" href="/">
                <img src={logo} alt="@justFree logo" />
            </a>
            <Nav />
        </div>
    );
}

export default Sidebar;
