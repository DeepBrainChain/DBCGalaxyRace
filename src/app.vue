<template lang="pug">
nav.navigator
  router-link.navigator-item(to='/',:class='{active:  active === 0}')
    | 银河竞赛
    div.navigator-active
  router-link.navigator-item(to='/rule',:class='{active: active === 1}')
    | 规则说明
    div.navigator-active
div.logger-wrapper
  img(src='./assets/logo.gif')
  div.name
    span DeepBrain
    | Chain
h1.title 银河算力竞赛
div.time-wrapper
  div.time-title 比赛开始倒计时
  div.time
    vue-countdown(v-if="counting",@end="handleCountdownEnd" ,:time="time", v-slot="{ days, hours, minutes, seconds }")
      span {{days}}天
      span {{hours}}时
      span {{minutes}}分
      span {{seconds}}秒
    span(v-else) 已结束
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
  width: 500px;
  height: 120px;
  background: url("./assets/button.png");
  background-size: cover;
  border-radius: 20px;
  margin: 40px auto 0;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .time-title {
    font-family: PingFang SC, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    opacity: 0.8;
  }
  .time {
    font-family: PingFang SC, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
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
  margin-left: -62.5px;
  font-size: 18px;
  color: #051174;
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
    &:first-child {
      margin-right: 40px;
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
</style>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import Background from "./components/background.vue";

export default defineComponent({
  name: "App",
  components: {
    Background,
  },
  setup() {
    const route = useRoute();
    const active = computed(() => ["/", "/rule"].indexOf(route.path));
    const counting = ref(true);
    return {
      active,
      time: computed(() => new Date("2021-07-01 00:00").valueOf() - Date.now()),
      handleCountdownEnd: () => {
        counting.value = false
      },
      counting
    };
  },
});
</script>
