import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./ChartStyles.scss";

class WavyLines extends Component {
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
                    categories: [
                        "2018-02-19T00:00:00.000Z",
                        "2018-03-19T01:30:00.000Z",
                        "2018-04-19T02:30:00.000Z",
                        "2018-05-19T03:30:00.000Z",
                        "2018-06-19T04:30:00.000Z",
                        "2018-07-19T05:30:00.000Z",
                        "2018-08-19T06:30:00.000Z",
                    ],
                    labels: {
                        format: "dd.MM",
                    },
                },

                tooltip: {
                    x: {
                        format: "dd.MM.yyyy",
                    },
                },

                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: false,
                },
                fill: {
                    colors: ["#9c27b099", "#f5005799"],
                    type: "solid",
                },
                grid: {
                    borderColor: "#e7ebf0",
                    row: {},
                },
                colors: ["#9c27b080", "#f5005780"],
                legend: {
                    show: false,
                },
                datetimeUTC: false,
            },
            series: [
                {
                    name: "Something number one",
                    data: [40, 50, 28, 51, 40, 52, 41],
                },
                {
                    name: "Something number two",
                    data: [52, 36, 51, 28, 50, 40, 51],
                },
            ],
        };
    }

    render() {
        return (
            <>
                <div className="chart-styles">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        width="100%"
                        height="420px"
                    />
                </div>
            </>
        );
    }
}

export default WavyLines;
