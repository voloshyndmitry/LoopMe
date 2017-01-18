import _ from "lodash";
import Backbone from "backbone";
import Mn from "backbone.marionette";
import radio from "../../radio/radio";
import AbstractComponent from "../../abstractComponent/abstractComponent";
// template
import main_tpl from "./mainView_tpl.html";
// components
import Ex1Component from "./components/ex1/ex1";
import Ex2Component from "./components/ex2/ex2";
import Ex3Component from "./components/ex3/ex3";
import Ex4Component from "./components/ex4/ex4";
import Ex5Component from "./components/ex5/ex5";
import Ex6Component from "./components/ex6/ex6";

const MainView = Mn.View.extend({
    template: _.template(main_tpl),
    ui: {
        navTo: '.btn-toolbar button',
    },
    events: {
        'click @ui.navTo': '_toEx',
    },
    initialize(options){
        TestApp.logger.system('MainView initialize');
    },
    onRender(){
        TestApp.logger.system('MainView Render');
        this.addRegion('mainViewContainer', '.example-zone');
    },
    _toEx(event){
        this.trigger('show:example', event.target.dataset.name);
    }
});


const MainComponent = AbstractComponent.extend({
    viewClass: MainView,
    channelName: radio.channelName.mainRadio,
    viewEvents: {
        'show:example': '_showExample',
    },
    initialize(options){
        TestApp.logger.system('MainComponent initialize');
        this.on('show', () => {
            this.listenTo(this.model, 'change', () => this._showDir(this.model.get('view')));
        });
    },
    _showDir(viewName){
        const mainRegion = this.view.getRegion('mainViewContainer');
        switch (viewName) {
            case 'ex1':
                this.ex1 = new Ex1Component({
                    model: new Backbone.Model(),
                });
                this.ex1.showIn(mainRegion);
                break;
            case 'ex2':
                this.ex2 = new Ex2Component({
                    model: new Backbone.Model(),
                });
                this.ex2.showIn(mainRegion);
                break;
            case 'ex3':
                this.ex3 = new Ex3Component({
                    model: new Backbone.Model(),
                });
                this.ex3.showIn(mainRegion);
                break;
            case 'ex4':
                this.ex4 = new Ex4Component({
                    model: new Backbone.Model(),
                });
                this.ex4.showIn(mainRegion);
                break;
            case 'ex5':
                this.ex5 = new Ex5Component({
                    model: new Backbone.Model(),
                });
                this.ex5.showIn(mainRegion);
                break;
            case 'ex6':
                this.ex6 = new Ex6Component({
                    model: new Backbone.Model(),
                });
                this.ex6.showIn(mainRegion);
                break;
            default:
                throw new Error(`MainView component can not show this View: ${viewName}`);
                break;
        }
    },
    _showExample(num){
        this.model.set({
            view: num
        });
    },
});


export default MainComponent;