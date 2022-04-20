import "./Header.scss";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Burger from "./Sidebar/Burger";

function Header() {
    const [open, setOpen] = useState(false);

    const burgerIcon = (
        <FcMenu
            onClick={() => setOpen(!open)}
            className="burger__open burger__icon"
            color="#000"
            size="40px"
            stroke="#fff"
        />
    );

    const closeIcon = (
        <GrClose
            onClick={() => setOpen(!open)}
            className="burger__close burger__icon"
            color="#fafafa"
            size="40px"
            stroke="#fff"
        />
    );

    const closeMobileMenu = () => {
        setOpen(false);
    };

    return (
        <div className="header">
            <div className="header__burger">
                {open ? closeIcon : burgerIcon}
            </div>
            {open && <Burger isMobile={true} closeMobile={closeMobileMenu} />}
            <SearchBar />
            <Profile />
        </div>
    );
}

export default Header;
