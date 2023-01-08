import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    host: true,
    port: 5173, // 应用端口号
    strictPort: true, // 端口被占用时，终止应用服务
    open: false, // 是否自动打开浏览器，如果是字符串，则会被当作 URL 的路径名
    proxy: {
      "/api-prefix": {
        target: "http://127.0.0.1:4523/m1/2163505-0-default",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-prefix/, "")
      }
    }
  }
})
