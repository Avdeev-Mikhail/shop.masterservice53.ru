import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#007D8C',
                secondary: '#fce000',
                yellow: '#fc0'
            }
        }
    }
});
