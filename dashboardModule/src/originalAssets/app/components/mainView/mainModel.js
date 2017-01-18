import Backbone from "backbone";

const MainViewModel = Backbone.Model.extend({
    initialize(options){
        TestApp.logger.system('MainViewModel initialize')
    },
    defaults: {
        "view": "ex1",
    }
});

export default MainViewModel;