import Mn from "backbone.marionette";
import radio from "../radio/radio";
const mainRadio = radio.mainRadio;


const Controller = Mn.Object.extend({
    channelName: radio.channelName.routerRadio,
    radioRequests: {
        'update:id': '_toId',
        'update:section': '_toSection',
        'update:page': '_toPage',
        'history:back': '_toBack'
    },
    _toId(urlData, id){
        Backbone.history.navigate('log/' + urlData.id + '/' + urlData.section + '/' + id);
    },
    _toSection(urlData, section){
        Backbone.history.navigate('log/' + urlData.id + '/' + section + '/');
    },
    _toPage(num){
        Backbone.history.navigate(`page${num}`);
        this._saveState(num);
    },
    _toBack(){
        if (!!localStorage.pageState) {
            let num = localStorage.pageState;
            Backbone.history.navigate(`page${num}`);
            this.showMain(num)
        }
        else {
            Backbone.history.navigate('/');
            this.showMain()
        }
    },
    _saveState(num){
        localStorage.pageState = num;
    },
    showLog(id, section, num) {
        TestApp.logger.system('Route:showLog');
        document.title = `Report by id: ${id}`;
        mainRadio.request('show:logsList', {id: id, section: section, num: !num ? false : num});
    },
    showMain(num){

        num = num || 1;
        TestApp.logger.system('Route:showMain');
        document.title = `Test app`;
        this._saveState(num);
        mainRadio.request('show:reportList', num);
    }
});
export default Controller;