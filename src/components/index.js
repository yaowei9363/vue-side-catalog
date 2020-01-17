
import SideCatalog from './side-catalog/main.vue';


SideCatalog.install = (Vue) => { 
  Vue.component('OrgChart', SideCatalog);
};

export default SideCatalog;
// const components = [
//   SideCatalog
// ];

// function install(Vue) {
//   components.forEach(comp => {    
//     Vue.component(comp.name, comp);
//   });
// }

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {  
//   install(window.Vue);
// }

// export default {
//   SideCatalog
// };
