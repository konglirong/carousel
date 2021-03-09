<!--  -->
<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div class="director dir-prev" v-else-if="dir === 'prev'">
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>

<script>
export default {
  name: "Director",
  props: {
    dir: String,
  },
  setup(props, ctx) {
    const dirClick = (dir) => {
      ctx.emit("dirClick", dir);
    };
    return {
      dirClick,
    };
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.director {
  position: absolute;
  top: 50%;
 
  background: rgba(0, 0, 0, 0.2);
  width: 20px;
  height: 50px;
  z-index: 2;
  color: #fff;
  font-size: 30px;
}
.dir-prev {
 left: 0;
}
.dir-next{
    right:0;
}
</style>