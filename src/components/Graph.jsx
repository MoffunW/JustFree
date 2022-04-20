import "./Graph.scss";
import Converstations from "./charts/Converstations";
import WorkingHours from "./charts/WorkingHours/WorkingHours";
import Person from "./Person";

function Graph(props) {
    return (
        <div className="graph">
            <div className="graph__hours graph__item">
                <div className="graph__info">
                    <div className="graph__title">96</div>
                    <div className="graph__subtitle">Working Hours</div>
                </div>
                <div className="graph__chart">
                    <WorkingHours />
                </div>
            </div>
            <div className="graph__converstations graph__item">
                <div className="graph__info">
                    <div className="graph__title">1,204</div>
                    <div className="graph__subtitle">Converstations</div>
                </div>
                <div className="graph__chart">
                    <Converstations />
                </div>
            </div>
            <div className="graph__people graph__item">
                <div className="graph__info">
                    <div className="graph__title">7</div>
                    <div className="graph__subtitle">People</div>
                </div>
                <div className="graph__avatars">
                    <Person src="https://via.placeholder.com/30" />
                    <Person src="https://via.placeholder.com/30" />
                    <Person src="https://via.placeholder.com/30" />
                    <Person src="https://via.placeholder.com/30" />
                    <Person src="https://via.placeholder.com/30" />
                    <Person src="https://via.placeholder.com/30" />
                    <Person src="https://via.placeholder.com/30" />
                </div>
            </div>
        </div>
    );
}

export default Graph;
