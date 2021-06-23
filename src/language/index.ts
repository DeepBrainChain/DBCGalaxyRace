//语言
import { createI18n } from 'vue-i18n'		//引入vue-i18n组件
import ZH from './zh'
import EN from './en'

//注册i8n实例并引入语言文件
const i18n = createI18n({
    silentTranslationWarn: true,
    locale: localStorage.getItem('lan') || 'zh',	//默认显示的语言 
    messages: {
        'zh': ZH,
        'en': EN
    }
})


export default i18n; //将i18n暴露出去，在main.js中引入挂载