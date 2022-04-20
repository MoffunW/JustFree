import "./Project.scss";
import time from "../assets/icons/ClockGrey.svg";
import messages from "../assets/icons/Messages.svg";

function Project(props) {
    return (
        <div className="project">
            <div className="project__main-info">
                <div className="project__image"></div>
                <div className="project__description">
                    <div className="project__title">Project Title</div>
                    <div className="project__type">Webdisign UI/UX</div>
                </div>
            </div>
            <div className="project__secondary-info">
                <div className="project__updated">
                    Last updated Today at 4:24 AM
                </div>
                <div className="project__metrics">
                    <div className="project__spend-time">
                        <img src={time} alt="time spend" />
                        <div className="project__time">26:30</div>
                    </div>
                    <div className="project__comments">
                        <img src={messages} alt="time spend" />
                        <div className="project__comments-number">624</div>
                    </div>
                </div>

                <div className="project__bar">
                    <div
                        style={{
                            width: props.done + "%",
                            backgroundColor: props.color,
                        }}
                        className="project__done"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Project;
