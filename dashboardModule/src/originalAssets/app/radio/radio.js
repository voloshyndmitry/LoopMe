import Backbone from "backbone";

export default {
    channelName: {
        routerRadio: 'routerRadio',
        mainRadio: 'mainRadio',
        reportRadio: 'reportRadio',
        notificationRadio: 'notificationRadio',
        spinnerRadio: 'spinnerRadio'
    },
    routerRadio: Backbone.Radio.channel('routerRadio'),
    mainRadio: Backbone.Radio.channel('mainRadio'),
    reportRadio: Backbone.Radio.channel('reportRadio'),
    notificationRadio: Backbone.Radio.channel('notificationRadio'),
    spinnerRadio: Backbone.Radio.channel('spinnerRadio')
};