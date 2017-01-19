import Highcharts from "highcharts";

class AbstractComponent {
    constructor(config) {
        config = config || {};
        this.title = config.title || 'example Title';
        this.text = config.text || 'example text';
        this.model = config.model;
    }

    showIn(selector) {
        const container = document.querySelector(selector);
        this._checkData();
        this._showHighchars(container);
    }
    _checkData(){

    }
    _showHighchars(container) {
        const _this = this;
        Highcharts.chart(container, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            colorAxis: {
                colorAxis: {
                    minColor: '#FFFFFF',
                    maxColor: Highcharts.getOptions().colors[0]
                },
            },
            title: {
                text: `<span>${_this.title}</span><br><span>${_this.model.distribution}% Data Points</span>`,
                align: 'center',
                verticalAlign: 'middle',
                // y: 40
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    showInLegend: true

                }
            },
            legend: {
                align: 'center',
                layout: 'vertical',
                symbolRadius: 0,
                labelFormat: `{name} - {y}%`
            },

            series: [{
                type: 'pie',
                name: _this.text,
                innerSize: '60%',
                data: _this.model.chart,
                marker: {
                    enabled: false
                },
            }]
        });
    }

    destroy() {

    }
}
// Highcharts.chart(document.body, {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: 0,
//         plotShadow: false
//     },
//     title: {
//         text: 'Browser<br>shares<br>2015',
//         align: 'center',
//         verticalAlign: 'middle',
//         y: 40
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     plotOptions: {
//         pie: {
//             dataLabels: {
//                 enabled: true,
//                 distance: -50,
//                 style: {
//                     fontWeight: 'bold',
//                     color: 'white'
//                 }
//             },
//             startAngle: -90,
//             endAngle: 90,
//             center: ['50%', '75%']
//         }
//     },
//     series: [{
//         type: 'pie',
//         name: 'Browser share',
//         innerSize: '50%',
//         data: [
//             ['Firefox', 10.38],
//             ['IE', 56.33],
//             ['Chrome', 24.03],
//             ['Safari', 4.77],
//             ['Opera', 0.91],
//             {
//                 name: 'Proprietary or Undetectable',
//                 y: 0.2,
//                 dataLabels: {
//                     enabled: false
//                 }
//             }
//         ]
//     }]
// });
export default AbstractComponent;