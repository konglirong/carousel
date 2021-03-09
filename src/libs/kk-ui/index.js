import Carousel from './carousel';
import CarItem from './carousel/item'

let kkUI = {};
kkUI.install = function(Vue) {
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarItem.name, CarItem);
}

export default kkUI;