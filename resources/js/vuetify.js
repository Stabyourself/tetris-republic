import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
       dark: true,
       themes: {
          dark: {
             primary: "#00BEBE"
          }
       }
    }
 }


export default new Vuetify(opts)
