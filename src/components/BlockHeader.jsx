import "./BlockHeader.scss";
import down from "../assets/icons/Down.svg";

function BlockHeader(props) {
    return (
        <div className="block-header">
            <div className="block-header__info">
                <h2 className="block-header__title">{props.title}</h2>
                <h3 className="block-header__subtitle">{props.subtitle}</h3>
            </div>

            {props.timeline ? (
                <div className="block-header__timeline">
                    Timeline:
                    <div className="block-header__options">
                        7 days
                        <img
                            className="block-header__arrow-down"
                            src={down}
                            alt="arrow down"
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default BlockHeader;
