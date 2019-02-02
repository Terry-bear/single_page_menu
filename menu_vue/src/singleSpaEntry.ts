// seprate single Spa entry file.
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#appMenu',
        render: (h: any) => h(App)
}
})

export const bootstrap = [
    vueLifecycles.bootstrap
]

export function mount(props: any) {
    createDomElement()
    return vueLifecycles.mount(props)
}

export const unmount = [
    vueLifecycles.unmount
]

function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('appMenu')

    if (!el) {
        el = document.createElement('div')
        el.id = 'appMenu'
        document.body.appendChild(el)
    }
    return el
}
