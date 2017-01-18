import _ from "lodash";
import Mn from "backbone.marionette";
import $ from "jquery";
import moment from 'moment';

import AbstractComponent from "../../../../abstractComponent/abstractComponent";
// template
import main_tpl from "./ex4_tpl.html";


const Ex4View = Mn.View.extend({
    template: _.template(main_tpl),
    initialize(options){
        TestApp.logger.system('Ex4View initialize');
    },
    onRender(){
        TestApp.logger.system('Ex4View Render');
    }
});


const Ex4Component = AbstractComponent.extend({
    viewClass: Ex4View,
    initialize(options){
        TestApp.logger.system('Ex4Component initialize');
        this.on('show', this.createJqPlugin);
    },
    createJqPlugin(){
        $.fn.dataInterval = function () {
            const _this = this;
            this.each(() => {
                const intervals = $(this).data('interval').split(',');
                const length = _this.length-1;
                const dif = moment(intervals[length]).dayOfYear()-moment(intervals[0]).dayOfYear();
                const firstMonth = moment(intervals[0]).month();
                const lastMonth = moment(intervals[length]).month();
                const firstDay = moment(intervals[0]).day();
                const lastDay = moment(intervals[length]).day();
                console.warn(`${firstMonth} ${firstDay}-${lastDay}, ${dif}`);
                $(this).text(
                    `${firstMonth} ${firstDay}-${lastDay}, ${dif} days`
                )
            });
        };

        $('time').dataInterval();
    }
});


export default Ex4Component;