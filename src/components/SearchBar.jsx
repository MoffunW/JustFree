import "./SearchBar.scss";
import searchIcon from "../assets/icons/Search.svg";

function SearchBar() {
    return (
        <div className="search-bar">
            <button className="search-bar__button">
                <img
                    src={searchIcon}
                    className="search-bar__icon"
                    alt="Search!"
                ></img>
            </button>
            <input
                placeholder="Search"
                type="text"
                className="search-bar__input"
            />
        </div>
    );
}

export default SearchBar;
