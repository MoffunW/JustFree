import Nav from "./Nav";
import "./Burger.scss";

function Burger(props) {
    return (
        <div className="burger">
            <Nav isMobile={true} closeMobile={props.closeMobile} />
        </div>
    );
}

export default Burger;
