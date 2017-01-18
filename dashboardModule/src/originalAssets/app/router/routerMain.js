import Mn from "backbone.marionette";
import Controller from "./routerController";

const Router = Mn.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        '': 'showMain',
        'page:num': 'showMain',
        'log/:id/:section/': 'showLog',
        'log/:id/:section/:num': 'showLog',
    }
});
export default Router;
