require('./bootstrap');

// Import modules...
import Vue from 'vue'
import vuetify from './vuetify' // path to vuetify export

import { createInertiaApp, Link } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
InertiaProgress.init({ color: '#449E48' });

Vue.component('inertia-link', Link)
Vue.component('router-link', {
    functional: true,
    render(h, context) {
      const data = { ...context.data }
      delete data.nativeOn
      const props = data.props || {}
      props.href = props.to /// v-btn passes `to` prop but inertia-link requires `href`, so we just copy it
      return h('inertia-link', data, context.children)
    },
  })

const requireComponent = require.context('./', true, /\.vue$/i)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = _.upperFirst(
        _.camelCase(
        // Gets the file name regardless of folder depth
        fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )

    // Register component globally
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    )
})

import Layout from './Layouts/layout'

createInertiaApp({
    resolve: name => {
      const page = require(`./Pages/${name}`).default
      page.layout = page.layout || Layout
      return page
    },
    setup({ App, props }) {
      new Vue({
        vuetify,
        render: h => h(App, props),
      }).$mount("#app")
    },
  })


