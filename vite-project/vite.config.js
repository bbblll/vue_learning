import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
      "components":path.resolve(__dirname,"src/components"),
      "views":path.resolve(__dirname,"src/views"),
      "api":path.resolve(__dirname,"src/api"),
      "router":path.resolve(__dirname,"src/router"),

    }
  },
  plugins: [vue(),WindiCSS()],
  server: {
    proxy: {
      "/api": {
        target: "http://ceshi13.dishait.cn/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})
