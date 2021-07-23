<template lang="pug">
div.pagination-wrapper
  div.item.border-1px(@click="prev")
    Arrow.arrow(:disabled="currentPage === 1")
  div.item.border-1px(@click="first", v-show="showFirst") 1
  div.jump.item.border-1px(@click="() => currentPage -= 5", v-show="showLeftMore")
    div.more •••
    DoubleArrow.double-arrow(left)
  div.item.border-1px(v-for="n in result", :key="n",:class="{active: currentPage === n}", @click="handleJump(n)") {{n}}
  div.jump.item.border-1px(@click="() => currentPage += 5", v-show="showRightMore")
    div.more •••
    DoubleArrow.double-arrow
  div.item.border-1px(@click="last", v-show="showLast") {{lastPage}}
  div.item.border-1px.next(@click="next")
    Arrow.arrow(right, :disabled="currentPage === lastPage")
  div.input-wrapper
    span {{t('Jumpto')}}
    div.input-box.border-1px
      input.input(@keypress="handleKeypress")
    span {{t('page')}}
  div.select-wrapper
    Arrow.down-arrow
    div.select-box.border-1px
      select(@change="handleSelect", :value="pageSize")
        option(v-for="n in options" :value="n") {{n}}{{t('ap')}}
</template>

<style lang="less" scoped>
.select-wrapper {
  position: relative;
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
    // width: 89px;
    min-height: 30px;
    padding:0 25px 0 15px;
    outline: none;
    background: #fff;
    &:focus-visible,
    &:focus {
      outline: none;
      border-color: #338aff;
    }
    &.newwidth{
      width: 125px;
    }
  }
}
.input-wrapper {
  font-family: PingFang SC, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
  }
}
.input-box {
  margin: 0 4px;
}
.input {
  background: #ffffff;
  border: 1px solid #e0e0e0; /* px-to-viewport-ignore */
  box-sizing: border-box;
  border-radius: 4px;
  width: 36px;
  height: 26px;
  font-size: 12px;
  padding: 5px;
  outline: none;
  &:focus-visible,
  &:focus {
    border-color: #338aff;
  }
}
.jump {
  cursor: pointer;
  border: none !important;
  .more {
    display: block;
    color: #333333;
    font-size: 12px;
  }
  .double-arrow {
    display: none;
  }
  &:hover {
    .more {
      display: none;
    }
    .double-arrow {
      display: block;
    }
  }
}
.pagination-wrapper {
  display: flex;
}
.item {
  font-size: 12px;
  font-family: PingFang SC, sans-serif;
  width: 26px;
  height: 26px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  cursor: pointer;
  user-select: none;
  &.active {
    background: #ebf3ff;
    border: 1px solid currentColor;
    color: #338aff;
    --border-color: currentColor;
  }
}
@media screen and (max-width: 750px){
  .item {
    width: 2.80556vw;
    height: 2.80556vw;
  }
  .input{
    width: 2.5vw;
    height: 2.5vw;
  }
  .arrow{
    width: 1.3vw;
    height: 1.3vw;
  }
  .select-wrapper {
    .down-arrow {
      margin-top: -.6vw;
    }
    select{
      min-height: 3vw;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from "vue";
import { usePagination } from "../hooks/usePagination";
import Arrow from "./arrow.vue";
import DoubleArrow from "./double-arrow.vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "pagination",
  props: {
    total: Number,
    pageSize: Number,
    onChangePageSize: Function,
    onJumpPage: Function,
  },
  components: {
    Arrow,
    DoubleArrow,
  },
  setup(props) {
    const { t } = useI18n();
    const { pageSize, total, currentPage, offset, lastPage, prev, next, first, last } = usePagination({
      currentPage: 1,
      pageSize: 20,
      total: 0,
    });
    const all = computed(() => {
      total.value = props.total || 0;
      return props.total || 0;
    });
    const totalPage = computed(() => Math.ceil(all.value / pageSize.value));
    const result = computed(() => {
      const array = Array(totalPage.value)
        .fill(1)
        .map((_, i) => i + 1);

      if (!Array.isArray(array)) return [];
      let first = currentPage.value <= 3 || totalPage.value <= 5 ? 0 : currentPage.value - 3;
      if (currentPage.value > totalPage.value - 3 && totalPage.value >= 7) {
        first = totalPage.value - 5;
      }
      return array.slice(first, first + 5);
    });
    const jump = (currentPage: number) => {
      if (typeof props.onJumpPage !== "undefined") {
        props.onJumpPage(currentPage, pageSize.value);
      }
    };
    return {
      pageSize,
      total,
      currentPage,
      offset,
      lastPage,
      result,
      t,
      prev: () => {
        if(currentPage.value != 1){
          currentPage.value -= 1;
          jump(currentPage.value);
        }else{
          console.log('prev no change');
        }
      },
      next: () => {
        let oldcurrentPage = currentPage.value;
        currentPage.value += 1;
        if(oldcurrentPage != currentPage.value){
          jump(currentPage.value);
        }else{
          console.log('next no change');
        }
      },
      first: () => {
        console.log('first');
        currentPage.value = 1;
        jump(1);
      },
      last: () => {
        console.log('last');
        currentPage.value = lastPage.value;
        jump(lastPage.value);
      },
      showFirst: computed(() => currentPage.value > 3 && totalPage.value >= 7),
      showLeftMore: computed(() => currentPage.value > 4 && totalPage.value >= 7),
      showLast: computed(() => currentPage.value < totalPage.value - 2 && totalPage.value >= 7),
      showRightMore: computed(() => currentPage.value < totalPage.value - 3 && totalPage.value >= 7),
      handleKeypress: (e: any) => {
        console.log(e,'eee');
        const isEnter = (e.which || e.keyCode) === 13;
        const v = Number(e.target.value);
        if (isEnter && !Number.isNaN(v)) {
          if(currentPage.value != v && v !=0 ){
            currentPage.value = v > totalPage.value ? totalPage.value : v < 1 ? 1 : v;
            jump(currentPage.value)
          }else{
            console.log('Keypress no change');
          }
        }
        e.target.value = "";
      },
      options: [5, 10, 20, 30, 50],
      handleSelect: (e: any) => {
        pageSize.value = Number(e.target.value);
        currentPage.value = 1;
        if (typeof props.onChangePageSize !== "undefined") {
          props.onChangePageSize(pageSize.value);
        }
      },
      handleJump: (n: number) => {
        if(currentPage.value != n){
          currentPage.value = n;
          jump(n);
        }else{
          console.log('no change');
        }
      },
    };
  },
});
</script>
