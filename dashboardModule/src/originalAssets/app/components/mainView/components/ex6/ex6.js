import _ from "lodash";
import Mn from "backbone.marionette";
import AbstractComponent from "../../../../abstractComponent/abstractComponent";
// template
import main_tpl from './ex6_tpl.html';


const Ex6View = Mn.View.extend({
    template: _.template(main_tpl),
    initialize(options){
        TestApp.logger.system('Ex6View initialize');
    },
    onRender(){
        TestApp.logger.system('Ex6View Render');
    }
});


const Ex6Component = AbstractComponent.extend({
    viewClass: Ex6View,
    initialize(options){
        TestApp.logger.system('Ex6Component initialize');
    },
});


export default Ex6Component;