<template>
  <svg
    class="arrow"
    :class="{ right: right}"
    t="1621080538286"
    :fill="color || (disabled ? '#D6D6D6' : 'black') || 'black'"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1172"
    width="200"
    height="200"
  >
    <path
      d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
      p-id="1173"
    ></path>
  </svg>
</template>

<style lang="less" scoped>
.arrow {
  width: 10px;
  height: 10px;
  transform: rotate(90deg);
  &.right {
    transform: rotate(270deg);
  }
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "arrow",
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    color: {
      default: '',
      type: String,
    },
    right: {
      default: false,
      type: Boolean,
    }
  },
});
</script>
