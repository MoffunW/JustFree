import React, { Component } from "react";
import Chart from "react-apexcharts";

class DailyProgress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        format: "dd.MM",
                    },
                },
                yaxis: [{}, { opposite: true }],

                tooltip: {
                    x: {
                        format: "dd.MM.yyyy",
                    },
                },

                legend: {
                    show: false,
                },
                stroke: {
                    width: [0, 2],
                },
                fill: {
                    type: "solid",
                    colors: ["#7e57c2", "#ffc400"],
                },
                grid: {
                    borderColor: "#e7ebf0",
                    row: {},
                },
                colors: ["#7e57c2", "#ffc400"],
                dataLabels: {
                    enabled: false,
                },
                markers: {
                    size: [0, 7],
                },
                labels: [
                    "01 Jan 2001",
                    "02 Jan 2001",
                    "03 Jan 2001",
                    "04 Jan 2001",
                    "05 Jan 2001",
                    "06 Jan 2001",
                    "07 Jan 2001",
                ],
            },
            series: [
                {
                    name: "Website Blog",
                    type: "column",
                    data: [440, 505, 414, 671, 227, 413, 201],
                },
                {
                    name: "Social Media",
                    type: "line",
                    data: [440, 505, 414, 671, 227, 413, 201],
                },
            ],
        };
    }

    render() {
        return (
            <div className="chart-styles">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="90%"
                    height="350px"
                />
            </div>
        );
    }
}

export default DailyProgress;
