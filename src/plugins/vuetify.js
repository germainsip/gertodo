import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: '#ECBC1C',
    success: '#3cd1c2',
    info: '#0C5B5A',
    error: '#D52339'

    
  }
})
