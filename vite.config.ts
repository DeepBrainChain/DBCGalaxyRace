import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/data/DBCGalaxyRace/dist",
  server: {
    port: 3002, // 服务器端口号
    open: false, // 是否自动打开浏览器
  },
  plugins: [
    vue(), 
    legacy({
      targets: ['ie >= 10'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ]
});
