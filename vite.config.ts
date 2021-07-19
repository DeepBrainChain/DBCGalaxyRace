import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/data/DBCGalaxyRace/dist",
  server: {
    port: 3002, // 服务器端口号
    open: false, // 是否自动打开浏览器
  },
  plugins: [vue(), legacy({
    targets: ['ie >= 10'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  })]
});
