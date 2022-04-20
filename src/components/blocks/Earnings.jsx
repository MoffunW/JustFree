import "./Earnings.scss";
import BlockHeader from "../BlockHeader";
import ChartHeader from "../ChartHeader";
import ClientHours from "../charts/ClientHours";
import ProfileCard from "../ProfileCard";
import Overdue from "../charts/Overdue";

function Earnings(props) {
    return (
        <div className="earnings">
            <BlockHeader
                title="Crunch some Numbers"
                subtitle="See how your projects are progressing via the new statistics engine."
                timeline={true}
            />
            <div className="earnings__grid">
                <div className="earnings__client-hours earnings__card">
                    <ChartHeader
                        title="Client Hours"
                        subtitle="Working hours"
                    />
                    <ClientHours />
                </div>
                <div className="earnings__profile earnings__card">
                    <ProfileCard />
                </div>
                <div className="earnings__overdue earnings__card">
                    <ChartHeader
                        title="Total Overdue"
                        subtitle="I need Dollars"
                    />
                    <div className="earnings__total">$14,220</div>
                    <Overdue />
                    <div className="earnings__export">Export PDF</div>
                </div>
            </div>
        </div>
    );
}

export default Earnings;
