import Highcharts from "highcharts";

class AbstractComponent {
    constructor(config) {
        config = config || {};
        this.title = config.title || 'example Title';
        this.text = config.text || 'example text';
        this.model = config.model || {};
    }

    showIn(selector) {
        this.container = document.querySelector(selector);
        this._checkError();
        this._showHighchars();
    }

    _checkError() {
        const data = this.model;

        if (typeof data != 'object' || !!data.join) {
            throw new Error('this data is not a object.');
        }
        if(!data.distribution){
            throw new Error('Data does not include distribution.');
        }
        if(!data.chart){
            throw new Error('Data does not include chart.');
        }
        if(!data.chart.join) {
            throw new Error('Data.chart is not a array.');
        }
        if (this._isShown) {
            throw new Error('This component is already shown in a region.');
        }
    }

    _showHighchars() {
        this._isShow = true;
        const _this = this;
        this.chart = Highcharts.chart(_this.container, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
            },
            colors: ['#784ba2', '#845cab', '#926fb4', '#9e81bd', '#ac92c7',
                '#bba5d0', '#c8b6d9', '#d6c9e3', '#e3dbed', '#f1edf6'],

            yAxis: {
                min: 0,
                max: null
            },
            title: {
                text: `<span>${_this.title}</span><br><span style="color: grey">${_this.model.distribution}% Data Points</span>`,
                align: 'center',
                verticalAlign: 'middle',
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
                    center: ['50%', '50%'],
                    showInLegend: true

                }
            },
            legend: {
                y: 230,
                align: 'center',
                verticalAlign: 'center',
                layout: 'vertical',
                symbolRadius: 0,
                labelFormat: `{name} - {y}%`,
                padding: 10
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

    update(data){
        const _this = this;
        this.chart.update({
            series: [{
                type: 'pie',
                name: _this.text,
                innerSize: '60%',
                data: data.chart,
                marker: {
                    enabled: false
                },
            }]
        });
    }
}

export default AbstractComponent;