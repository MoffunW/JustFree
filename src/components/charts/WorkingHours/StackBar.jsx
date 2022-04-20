import React, { Component } from "react";
import Chart from "react-apexcharts";

class StackBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    zoom: false,
                    stacked: true,
                    stackType: "100%",
                    toolbar: {
                        show: false,
                    },
                },

                grid: {
                    show: false,
                },

                xaxis: {
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },

                plotOptions: {
                    bar: {
                        columnWidth: "60px",
                    },
                },

                tooltip: {
                    marker: {
                        fillColors: true,
                    },
                },

                yaxis: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    type: "solid",
                    colors: this.props.colors,
                },
                legend: {
                    formatter: function (val, opts) {
                        return (
                            val +
                            "      " +
                            opts.w.globals.series[opts.seriesIndex]
                        );
                    },
                    show: false,
                    offsetX: 0,
                    markers: {
                        fillColors: true,
                    },
                },
            },
            series: [
                {
                    name: "project 1",
                    data: this.props.data1,
                },
                {
                    name: "project 2",
                    data: this.props.data2,
                },
                {
                    name: "project 3",
                    data: this.props.data3,
                },
            ],
        };
    }

    render() {
        return (
            <div className="chart-styles earnings__chart graph__bar">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    width="120px"
                    height="100%"
                    type="bar"
                />
            </div>
        );
    }
}

export default StackBar;
