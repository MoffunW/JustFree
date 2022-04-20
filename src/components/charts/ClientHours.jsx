import React, { Component } from "react";
import Chart from "react-apexcharts";

class ClientHours extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270,
                    },
                },

                chartOptions: {
                    labels: ["Apple", "Mango", "Orange", "Watermelon"],
                },

                dataLabels: {
                    enabled: false,
                },
                colors: ["#ff80ab", "#ff4081", "#f50057"],
                fill: {
                    type: "solid",
                    colors: ["#ff80ab", "#ff4081", "#f50057"],
                },
                legend: {
                    formatter: function (val, opts) {
                        let wordsArray = [
                            "Nike",
                            "Google",
                            "Amazon",
                            "Apple",
                            "Puma",
                            "Cool complany",
                            "Spotify",
                        ];
                        let randomNum = Math.floor(
                            Math.random() * wordsArray.length
                        );

                        return (
                            wordsArray[randomNum] +
                            "      - " +
                            opts.w.globals.series[opts.seriesIndex] +
                            " hours"
                        );
                    },
                    horizontalAlign: "center",
                    show: true,
                    position: "bottom",
                    fontSize: "14px",
                    fontFamily: "Avenir Next LT Pro, sans-serif",
                    fontWeight: 400,
                    width: "100%",
                    offsetX: 50,
                },
            },
            series: [38, 22, 11],
        };
    }

    render() {
        return (
            <div className="chart-styles earnings__chart-wrapper">
                <Chart
                    className="earnings__chart"
                    options={this.state.options}
                    series={this.state.series}
                    height="300px"
                    width="100%"
                    type="donut"
                />
                <div className="earnings__total-hours">
                    <div className="earnings__hours">72</div>
                    <div className="earnings__subtitle">Working Hours</div>
                </div>
            </div>
        );
    }
}

export default ClientHours;
