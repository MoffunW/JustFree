import StackBar from "./StackBar";

function WorkingHours(props) {
    return (
        <div className="working-hours">
            <StackBar
                colors={["#1e88e5", "#61abed", "#a5cff5"]}
                data1={[26, 0]}
                data2={[25, 0]}
                data3={[10, 0]}
            />
            <StackBar
                colors={["#1de9b6", "#60f0cc", "#a5f6e2"]}
                data1={[30, 0]}
                data2={[55, 0]}
                data3={[25, 0]}
            />
            <StackBar
                colors={["#7e57c2", "#a489d4", "#cbbce7"]}
                data1={[60, 0]}
                data2={[25, 0]}
                data3={[10, 0]}
            />
        </div>
    );
}

export default WorkingHours;
