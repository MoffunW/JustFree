import "./Crunch.scss";
import BlockHeader from "../BlockHeader";
import ChartHeader from "../ChartHeader";
import DailyProgress from "../charts/DailyProgress";
import Graph from "../Graph";

function Crunch(props) {
    return (
        <div className="crunch">
            <BlockHeader
                title="Crunch some Numbers"
                subtitle="See how your projects are progressing via the new statistics engine."
                timeline={true}
            />
            <div className="crunch__grid">
                <Graph />
                <div className="crunch__daily">
                    <ChartHeader
                        title="Daily Progress"
                        subtitle="Working Hours"
                        options={true}
                    />
                    <DailyProgress />
                </div>
            </div>
        </div>
    );
}

export default Crunch;
