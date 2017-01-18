import _ from "lodash";
import Mn from "backbone.marionette";
import AbstractComponent from "../../../../abstractComponent/abstractComponent";
// template
import main_tpl from './ex3_tpl.html';


const Ex3View = Mn.View.extend({
    template: _.template(main_tpl),
    initialize(options){
        TestApp.logger.system('Ex3View initialize');
    },
    onRender(){
        TestApp.logger.system('Ex3View Render');
    }
});


const Ex3Component = AbstractComponent.extend({
    viewClass: Ex3View,
    initialize(options){
        TestApp.logger.system('Ex3Component initialize');
    },
});


export default Ex3Component;