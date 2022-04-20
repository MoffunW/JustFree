import React, { Component } from "react";
import Chart from "react-apexcharts";

class Converstations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "spark1",
                    group: "sparks",
                    sparkline: {
                        enabled: true,
                    },
                },

                tooltip: {
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: function formatter(val) {
                                return "";
                            },
                        },
                    },
                },

                stroke: {
                    curve: "smooth",
                    width: 3,
                },
                markers: {
                    size: 0,
                },
                grid: {
                    padding: {
                        top: 20,
                        bottom: 10,
                        left: 20,
                    },
                },
                colors: ["#ec407a"],
            },
            series: [
                {
                    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
                },
            ],
        };
    }

    render() {
        return (
            <div className="converstations">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="100%"
                    height="80px"
                />
            </div>
        );
    }
}

export default Converstations;
