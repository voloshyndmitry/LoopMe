import _ from "lodash";
import Mn from "backbone.marionette";
import AbstractComponent from "../../../../abstractComponent/abstractComponent";
// template
import main_tpl from './ex2_tpl.html';


const Ex2View = Mn.View.extend({
    template: _.template(main_tpl),
    initialize(options){
        TestApp.logger.system('Ex2View initialize');
    },
    onRender(){
        TestApp.logger.system('Ex2View Render');
    }
});


const Ex2Component = AbstractComponent.extend({
    viewClass: Ex2View,
    initialize(options){
        TestApp.logger.system('Ex2Component initialize');
    },
});


export default Ex2Component;