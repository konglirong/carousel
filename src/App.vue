<template>
  <!-- {{ count }} -->
  <div id="app">
    <div class="container">
      <carousel
       :autoplay="true" 
       :duration="3000"
       :initial="0"
       :hasDot="true"
       :hasDirector="true"
       >
        <car-item v-for="(item, index) of carData" :key="index">
          <img :src="require(`./assets/img/${item.img_name}`)" alt="" />
        </car-item>
      </carousel>
    </div>
  </div>
</template>

<script>
import carData from "@/data/carousel";
export default {
  name: "App",

  setup() {
    return {
      carData,
    };
  },
};
</script>

<style lang="less" scoped>
.container{
  width:520px;
  height: 280px;
  margin: 150px auto;
  img{
    width: 100%;
    height: 280px;
  }
}
</style>
