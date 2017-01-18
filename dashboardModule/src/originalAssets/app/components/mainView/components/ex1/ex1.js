import _ from "lodash";
import Mn from "backbone.marionette";
import AbstractComponent from "../../../../abstractComponent/abstractComponent";
// template
import main_tpl from './ex1_tpl.html';


const Ex1View = Mn.View.extend({
    template: _.template(main_tpl),
    initialize(options){
        TestApp.logger.system('Ex1View initialize');
    },
    onRender(){
        TestApp.logger.system('Ex1View Render');
    }
});


const Ex1Component = AbstractComponent.extend({
    viewClass: Ex1View,
    initialize(options){
        TestApp.logger.system('Ex1Component initialize');
    },
});


export default Ex1Component;