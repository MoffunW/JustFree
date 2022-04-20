import BlockHeader from "../BlockHeader";
import WavyLines from "../charts/WavyLines";
import "./Wavy.scss";
import ChartHeader from "../ChartHeader";

function Wavy(props) {
    return (
        <div className="wavy">
            <BlockHeader
                title="Wavy some Numbers"
                subtitle="See how your projects are progressing via the new statistics engine."
            />
            <ChartHeader
                title="Wavy Lines"
                subtitle="Working Hours"
                options={true}
            />
            <WavyLines options={true} />
        </div>
    );
}

export default Wavy;
