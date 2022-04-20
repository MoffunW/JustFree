import "./ChartHeader.scss";
import down from "../assets/icons/Down.svg";

function ChartHeader(props) {
    return (
        <div className="chart-header">
            <div className="chart-header__info">
                <div className="chart-header__title">{props.title}</div>
                <div className="chart-header__subtitle">{props.subtitle}</div>
            </div>
            {props.options ? (
                <div className="chart-header__filter">
                    THIS WEEK
                    <img
                        src={down}
                        className="chart-header__arrow-down"
                        alt="arrow down"
                    ></img>
                </div>
            ) : null}
        </div>
    );
}

export default ChartHeader;
