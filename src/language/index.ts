//语言
import { createI18n } from 'vue-i18n'		//引入vue-i18n组件
import ZH from './zh'
import EN from './en'
import KO from './ko'
// 识别浏览器默认语言
const browserlanguage = (navigator.language || navigator.browserLanguage)
let language = browserlanguage.slice(0, 2)
if (language == 'zh' || language == 'en' || language == 'ko') {
    language = language
} else {
    language = 'en'
}
console.log(language, 'language')
// localStorage.setItem('lan', language)
//注册i8n实例并引入语言文件
// legacy:false 启用 Composition API（项目里 useI18n() 都是这种用法）
// globalInjection:true 保留模板里 $t 的可用性
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    silentTranslationWarn: true,
    locale: localStorage.getItem('lan') || language  || 'en',	//默认显示的语言
    fallbackLocale: 'en',
    messages: {
        'zh': ZH,
        'en': EN,
        'ko': KO
    }
})
export const changeLan = (lan: string)=>{
    // Composition API 模式下 locale 是 Ref，要用 .value
    if (typeof (i18n.global.locale as any) === 'object' && 'value' in (i18n.global.locale as any)) {
        (i18n.global.locale as any).value = lan
    } else {
        (i18n.global as any).locale = lan
    }
}

export default i18n; //将i18n暴露出去，在main.js中引入挂载