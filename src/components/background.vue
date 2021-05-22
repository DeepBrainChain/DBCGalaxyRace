<template lang="pug">
img.left-bg(src="../assets/left.png")
img.right-bg(src="../assets/right.png")
img.bg(src="../assets/rectangle.png")
img.cirle(src="../assets/circle.png")
</template>

<style lang="less">
.left-bg,
.right-bg,
.bg,
.cirle {
  position: absolute;
}
.cirle {
  width: 320px;
  height: 320px;
  right: -180px;
  top: 380px;
}
.bg {
  width: 100%;
  left: 0;
  top: 0;
  z-index: -2;
}
.left-bg {
  left: -94px;
  top: -121px;
  z-index: -1;
  width: 660px;
  height: 692px;
}
.right-bg {
  position: absolute;
  right: -108px;
  top: -202px;
  z-index: -1;
  width: 492px;
  height: 552px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "background",
});
</script>
