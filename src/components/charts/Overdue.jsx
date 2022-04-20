import React, { Component } from "react";
import Chart from "react-apexcharts";

class Overdue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ["#7e57c2"],
                stroke: {
                    show: true,
                    width: 2,
                },
                markers: {
                    size: 5,
                    colors: "#7e57c2",
                    shape: "circle",
                },
                grid: {
                    borderColor: "#e7ebf0",
                    row: {},
                },
                xaxis: {
                    categories: ["S", "M", "T", "W", "T", "F", "S", "S"],
                },
            },
            series: [
                {
                    name: "Dollars $",
                    data: [10, 21, 19, 24, 23, 16, 21, 9],
                },
            ],
        };
    }

    render() {
        return (
            <div className="overdue">
                <Chart
                    id="overdue"
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height="220px"
                />
            </div>
        );
    }
}

export default Overdue;
