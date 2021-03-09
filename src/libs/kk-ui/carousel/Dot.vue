<!--  -->
<template>
  <div class="dot-wrapper" v-if="hasDot">
    <div class="dot-item" v-for="item in itemLen" :key="item">
      <a
        href="javascript:;"
        class="dot-link"
        :style="{
          backgroundColor: item - 1 === currentIndex ? dotBgColor : '#000',
        }"
        @click="dotClick(item - 1)"
      >
      </a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "CatDot",
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true,
    },
    dotBgColor: {
      type: String,
      default: "#ff5000",
    },
  },
  setup(props, ctx) {
    const dotClick = (index) => {
      ctx.emit("dotClick", index);
    };

    return {
      dotClick,
    };
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.dot-wrapper {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 42%;
  display: flex;
  .dot-item {
     margin-right: 10px;
    a {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}
</style>