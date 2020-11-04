import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import './StatisticsGraphic.scss'

class StatisticsGameGraphic extends Component {
    constructor(props) {
        super(props)

        this.state = {

            series: [{
                data: props.gamesArray
            }],
            options: {
                chart: {
                    id: 'area-datetime',
                    type: 'area',
                    height: 350,
                    zoom: {
                        autoScaleYaxis: false
                    }
                },
                annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: '#999',
                    }],
                    xaxis: [{
                        x: new Date('14 Oct 2020').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                    }]
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('01 Oct 2020').getTime(),
                    tickAmount: 6,
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100]
                    }
                },
            },


            selection: 'one_year',
        }
    }

    render() {
        return (
            <div className='StatisticsGraphic'>
                <div id='chart'>
                    <div className='chartLine'>
                        <ReactApexChart options={this.state.options} series={this.state.series} type='area' height={350} width={500} />
                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsGameGraphic