import Backbone from "backbone";
import Mn from "backbone.marionette";
import _ from "lodash";
import MainViewComponent from "./components/mainView/mainComponent";
import Notification from "./services/notification/notification";
import Logger from "levellogger";
//router:
import Router from "./router/routerMain";

const TestApp = Mn.Application.extend({
    initialize(options) {
        this.region = options.region;
        this.logger = Logger;

        if (!options.devMode) {
            TestApp.logger.system = e => false;
        }
        const notification = new Notification();

        TestApp.perPage = !!options.perPage ? options.perPage : '10';
        this.logger.system('App Initialize');
    },

    onStart() {
        const mainViewComponent = new MainViewComponent({
            model: new Backbone.Model()
        });
        const main = this.getRegion();
        mainViewComponent.showIn(main);
        const router = new Router();

        Backbone.history.start();
    }
});


window.TestApp = TestApp;
window.TestApp.logger = Logger;

export default TestApp;