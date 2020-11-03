import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import './StatisticsGraphic.scss'

class StatisticsGraphic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [{
        name: 'InflNúmerosation',
        data: props.totalsArray
      }],
      options: {
        chart: {
          height: 300,
          width: 400,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758']
          }
        },
        fill: {
          colors: ['#EF7E93', '#ae4b61']
        },
        xaxis: {
          categories: ['Imágenes', 'Canciones', 'Lugares', 'Contactos', 'Eventos', 'Partidas'],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val
            }
          }

        },
      },


    }
  }



  render() {
    return (
      <div className='StatisticsGraphic'>
        <div className='chart'>
          <ReactApexChart options={this.state.options} series={this.state.series} type='bar' />
        </div>
      </div>
    )
  }
}

export default StatisticsGraphic