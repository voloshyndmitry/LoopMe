import deviceOs from './json/deviceOsVersion.json';
import gender from './json/gender.json';
import AbstrctComponent from './abstractModule/abstractModule';

console.log(deviceOs);
console.log(gender);

class DevaseModule extends AbstrctComponent{};

const devaseModule = new DevaseModule(
    {
        title: 'Device Os Version',
        text: 'Device Os Version',
        model: deviceOs
    }
);

devaseModule.showIn('body');



