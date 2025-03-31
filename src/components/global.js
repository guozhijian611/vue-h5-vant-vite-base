import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    const components = import.meta.glob('./*.vue')
    Object.entries(components).forEach(([path, component]) => {
      const name = path.split('/').pop().replace('.vue', '')
      app.component(name, defineAsyncComponent(component))
    })
  }
}