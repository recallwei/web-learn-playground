import { createApp, render } from "vue"
import { createPinia } from "pinia"
import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from "qiankun"
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper"
import App from "./App.vue"
import router from "./router"

import "./assets/main.scss"

const app = createApp(App)

registerMicroApps(
  [
    {
      name: "reactApp",
      entry: "//localhost:3000",
      container: "#container",
      activeRule: "/app-react"
    },
    {
      name: "vueApp",
      entry: "//localhost:8080",
      container: "#container",
      activeRule: "/app-vue"
    }
  ],
  {
    beforeLoad: (app) => {
      console.log("before load", app.name)
      return Promise.resolve()
    },
    afterMount: (app) => {
      console.log("after mount", app.name)
      return Promise.resolve()
    }
  }
)

addGlobalUncaughtErrorHandler((event) => {
  console.error(event)
})

start()

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      render(props.container)
      props.onGlobalStateChange((res) => {
        store.count = res.count
      })
    },
    bootstrap() {},
    unmount() {}
  })
}

const render = (container) => {
  const appDom = container ? container : "#app"
  createApp(app).use(createPinia()).use(router).mount(appDom)
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render("#app")
