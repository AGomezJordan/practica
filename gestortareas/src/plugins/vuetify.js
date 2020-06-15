import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify,{
    theme:{
        primary: '#ffffff'
    },
});

export default new Vuetify({
    lang: {
      locales: { es },
      current: 'es',
    },
    icons: {
        iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
});
