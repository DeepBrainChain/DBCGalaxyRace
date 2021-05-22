<template>
  <svg
    t="1621084310933"
    :class="{ left: left}"
    class="arrow"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1965"
    width="200"
    height="200"
  >
    <path
      d="M367.7952 388.9408a13.6448 13.6448 0 1 1 19.2768-19.2768l132.7872 132.7872a13.6704 13.6704 0 0 1 0 19.2768l-132.7872 132.608a13.6448 13.6448 0 1 1-19.2768-19.2768L490.8288 512l-123.0336-123.0592z m136.5248 0a13.6448 13.6448 0 0 1 19.2768-19.2768l132.7872 132.7872a13.6704 13.6704 0 0 1 0 19.2768l-132.7872 132.7872a13.6448 13.6448 0 0 1-19.2768-19.3024L627.3792 512 504.32 388.9408z"
      p-id="1966"
      fill="#338aff"
    ></path>
  </svg>
</template>

<style lang="less" scoped>
.arrow {
  width: 26px;
  height: 26px;
  &.left {
    transform: rotate(180deg);
  }
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "double-arrow",
  props: {
    left: {
      default: false,
      type: Boolean,
    },
  },
});
</script>
