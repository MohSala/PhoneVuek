require('./bootstrap');
window.Vue = require('vue');
import Heading from './components/Heading'
import Home from './components/Home'


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    components: {Heading, Home}
});
