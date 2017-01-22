import deviceOs from './json/deviceOsVersion.json';
import gender from './json/gender.json';
import AbstrctComponent from './abstractModule/abstractModule';

class DevaseModule extends AbstrctComponent{};
class GenderModule extends AbstrctComponent{};

const devaseModule = new DevaseModule(
    {
        title: 'Device Os Version',
        text: 'Device Os Version',
        model: deviceOs
    }
);

devaseModule.showIn('.deviceOs');


const genderModule = new GenderModule(
    {
        title: 'Device Os Version',
        text: 'Device Os Version',
        model: gender
    }
);
genderModule.showIn('.gender');
