import Wavy from "../blocks/Wavy";
import Crunch from "../blocks/Crunch";
import Projects from "../blocks/Projects";
import Earnings from "../blocks/Earnings";

function Analytics() {
    return (
        <div className="analytics">
            <Wavy />
            <Crunch options={true} />
            <Projects />
            <Earnings />
        </div>
    );
}

export default Analytics;
