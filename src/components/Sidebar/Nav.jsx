import Clock from "../../assets/icons/Clock.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import Analytics from "../../assets/icons/Analytics.svg";
import Box from "../../assets/icons/Box.svg";
import Cogwheel from "../../assets/icons/Cogwheel.svg";
import Dashboard from "../../assets/icons/Dashboard.svg";
import Navlink from "./Navlink";
import "./Nav.scss";

function Nav(props) {
    return (
        <ul className="nav">
            <Navlink
                isMobile={true}
                closeMobile={props.closeMobile}
                to="/home"
                src={Dashboard}
                text="Home"
            />
            <Navlink
                isMobile={true}
                closeMobile={props.closeMobile}
                to="/time-management"
                src={Clock}
                text="Time Management"
            />
            <Navlink
                isMobile={true}
                closeMobile={props.closeMobile}
                to="/inbox"
                src={Box}
                text="Inbox"
            />
            <Navlink
                isMobile={true}
                closeMobile={props.closeMobile}
                to="/calendar"
                src={Calendar}
                text="Calendar"
            />
            <Navlink
                isMobile={true}
                closeMobile={props.closeMobile}
                to="/analytics"
                src={Analytics}
                text="Analytics"
            />
            <Navlink
                isMobile={true}
                closeMobile={props.closeMobile}
                to="/settings"
                src={Cogwheel}
                text="Settings"
            />
        </ul>
    );
}

export default Nav;
