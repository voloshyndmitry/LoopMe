import _ from "lodash";
import Mn from "backbone.marionette";
import AbstractComponent from "../../../../abstractComponent/abstractComponent";
// template
import main_tpl from './ex5_tpl.html';


const Ex5View = Mn.View.extend({
    template: _.template(main_tpl),
    initialize(options){
        TestApp.logger.system('Ex5View initialize');
    },
    onRender(){
        TestApp.logger.system('Ex5View Render');
    }
});


const Ex5Component = AbstractComponent.extend({
    viewClass: Ex5View,
    initialize(options){
        TestApp.logger.system('Ex5Component initialize');
    },
});


export default Ex5Component;