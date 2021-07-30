<template lang="pug">
el-config-provider(:locale="locale")
  nav.navigator
    router-link.navigator-item(to='/',:class='{active:  active === 0}')
      | {{t('header_menu1')}}
      div.navigator-active
    router-link.navigator-item(to='/rule',:class='{active: active === 1}',v-if="lan == 'zh'")
      | {{t('header_menu2')}}
      div.navigator-active
    router-link.navigator-item(to='/rule_En',:class='{active: active === 2}',v-else)
      | {{t('header_menu2')}}
      div.navigator-active
    router-link.navigator-item(to='/map',:class='{active: active === 3}')
      | {{t('header_menu3')}}
      div.navigator-active
    router-link.navigator-item(to='/table',:class='{active: active === 4}')
      | {{t('header_menu4')}}
      div.navigator-active
    div.select-wrapper
      Arrow.down-arrow
      div.select-box.border-1px
        select(@change="handleSelect", :value="lan")
          option(value="zh") 简体中文
          option(value="en") ENGLISH

  div.logger-wrapper
    img(src='./assets/logo.gif')
    div.name
      span DeepBrain
      | Chain
  h1.title {{t('title')}}
  div.time-wrapper
    div.time-title(v-if='countDownactive') {{t('countDown')}}
    div.time-title(v-else) {{t('countDown1')}}
    div.time
      vue-countdown(v-if="counting",@end="handleCountdownEnd" ,:time="time", v-slot="{ days, hours, minutes, seconds }")
        span {{days}}{{t('Day')}}
        span {{hours}}{{t('Hour')}}
        span {{minutes}}{{t('Minute')}}
        span {{seconds}}{{t('Second')}}
      span(v-else) {{t('TheEnd')}}
  router-view
  Background
</template>

<style lang="less">
@import (less) "modern-normalize/modern-normalize.css";
@import (less) "./app.less";
.title {
  text-align: center;
  font-size: 44px;
  margin-top: 40px 0;
  line-height: 61.6px;
  font-family: PingFang SC, sans-serif;
  color: #051174;
}

.time-wrapper {
  box-sizing: border-box;
  width: 550px;
  min-height: 120px;
  background: url("./assets/button.png");
  background-size: cover;
  border-radius: 20px;
  margin: 40px auto 0;
  padding: 26px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .time-title {
    font-family: PingFang SC, sans-serif;
    font-weight: 600;
    font-size: 18px;
    // line-height: 25px;
    color: #ffffff;
    opacity: 0.8;
  }
  .time {
    font-family: PingFang SC, sans-serif;
    font-weight: 600;
    font-size: 22px;
    // line-height: 34px;
    color: #ffffff;
    span {
      padding: 0 13px;
    }
  }
}
.name {
  position: absolute;
  font-weight: bold;
  bottom: 0;
  left: 50%;
  font-size: 18px;
  color: #051174;
  transform: translate(-50%, 0);
  span {
    margin-right: 4px;
  }
}
.navigator {
  height: 34px;
  margin: 24px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .navigator-item {
    font-size: 16px;
    color: #051174;
    order: 0;
    text-decoration: none;
    font-family: PingFang SC, sans-serif;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      .navigator-active {
        width: 24px;
      }
    }
  }
  .navigator-active {
    width: 0;
    height: 4px;
    background: #051174;
    border-radius: 16px;
    transition: width 0.2s ease;
    margin-top: 8px;
  }

  .select-wrapper {
    position: absolute;
    top: 0;
    right: 20px;
    display: flex;
    .down-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      margin-top: -5px;
      transform: rotate(0deg);
      z-index: 2;
    }
    .select-box {
      margin-left: 16px;
    }
    select {
      cursor: pointer;
      display: block;
      appearance: none;
      box-sizing: border-box;
      border: 1px solid #e0e0e0; /* px-to-viewport-ignore */
      font-family: PingFang SC, sans-serif;
      border-radius: 4px;
      font-size: 12px;
      line-height: 1.1;
      color: #333333;
      padding: 0 25px; 
      min-height: 26px;
      padding-left: 12px;
      outline: none;
      background: #fff;
      &:focus-visible,
      &:focus {
        outline: none;
        border-color: #338aff;
      }
    }
  }
}

.logger-wrapper {
  width: 280px;
  height: 160px;
  margin: 20px auto 0;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 750px){
  .time-wrapper{
    width: 230px;
  }
  .navigator{
    .select-wrapper {
      .arrow{
        width: 1.3vw;
        height: 1.3vw;
      }
      .down-arrow {
        margin-top: -.6vw;
      }
      select{
        min-height: 3vw;
      }
    }
  }
}
</style>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Background from "./components/background.vue";
import { useI18n } from "vue-i18n";
import Arrow from "./components/arrow.vue";
import { changeLan } from '../src/language'
import { ElConfigProvider } from 'element-plus'
import ZH from '../src/language/zh'
import EN from '../src/language/en'
export default defineComponent({
  name: "App",
  components: {
    Background,
    Arrow,
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const locale = ref(ZH)
    const formateIOS = (time: string) => {
      const myDate = new Date((time.replace(/-/g, "/")));
      return myDate;
    };
    const active = computed(() => ["/", "/rule", "/rule_En", "/map", "/table"].indexOf(route.path));
    const counting = ref(true);
    const countDownactive = computed(() => (formateIOS("2021-07-18 00:00").valueOf() - Date.now()) > 0 );
    let lan = ref(localStorage.getItem('lan') || 'zh')
    watch(
      () => lan.value,
      (value, pervalue) => {
        lan.value = value
        if(value == 'zh'){
          locale.value = ZH
        }else{
          locale.value = EN
        }
      }
    )
    return {
      active,
      time: computed(() => {
        const times = formateIOS("2021-07-18 00:00").valueOf() - Date.now()
        if(times >= 0){
          return times
        }else{
          return formateIOS("2021-08-17 00:00").valueOf() - Date.now()
        }
      }),
      handleCountdownEnd: () => {
        counting.value = false
      },
      counting,
      countDownactive,
      t,
      lan,
      locale,
      handleSelect: (e: any) => {
        lan.value = e.target.value
        localStorage.setItem('lan', e.target.value)
        changeLan( e.target.value )
        let path = ["/rule", "/rule_En"].indexOf(route.path)
        if(path >= 0){
          if(e.target.value == 'zh'){
            router.push('./rule')
          }else{
            router.push('./rule_En')
          }
        }
      },
    };
  },
});
</script>
