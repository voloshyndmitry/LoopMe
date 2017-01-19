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
            colors: ['#784ba2', '#845cab', '#926fb4', '#9e81bd', '#ac92c7',
                '#bba5d0', '#c8b6d9', '#d6c9e3', '#e3dbed', '#f1edf6'],

            title: {
                text: `<span>${_this.title}</span><br><span style="color: grey">${_this.model.distribution}% Data Points</span>`,
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
export default AbstractComponent;