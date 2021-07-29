import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  // base: "/data/DBCGalaxyRace/dist",
  server: {
    port: 3002, // 服务器端口号
    open: false, // 是否自动打开浏览器
    proxy:{
      //这里是通过请求/api 来转发到 https://api.pingping6.com/
      //假如你要请求https://api.*.com/a/a
      //那么axios的url，可以配置为 /api/a/a
      '/api': {     //这里最好有一个 /
        target: 'https://identifier.congtu.cloud/',  // 后台接口域名
        // ws: true,        //如果要代理 websockets，配置这个参数
        secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
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
  ],
  resolve:{
    alias:{
      '@ts': path.resolve(__dirname, "src")
    }
  }
});
