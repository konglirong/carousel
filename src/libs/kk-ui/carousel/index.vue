<!--  -->
<template>
  <div 
    class="carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="inner">
        <CarDot
         :hasDot="hasDot"
         :itemLen="itemLen"
         :currentIndex="currentIndex"
         :dotBgColor="dotBgColor"
         @dotClick="dotClick"
         />
         <CarDirector
            dir="prev"
            @dirClick="dirClick"
         />
         <CarDirector
            dir="next"
            @dirClick="dirClick"
         />
      <slot></slot>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
  
} from "vue";

import CarDot from './Dot'
import CarDirector from './Director'
export default {
  name: "carousel",
  components:{
      CarDot,
      CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor:String
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0,
    });

    let t = null;
    const autoplay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
            setIndex('next')
        }, props.duration);
      }
    };

    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case "prev":
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
      }
    };
     

    const dotClick = (index)=>{
        state.currentIndex = index
    }

    const dirClick = (dir)=>{
        console.log(dir)
        setIndex(dir)
    }
    
    const mouseEnter = ()=>{
        _clearInterval()
    }

    const mouseLeave = ()=>{
        autoplay()
    }

    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length;
      autoplay();
    });

    onBeforeUnmount(() => {
      _clearInterval()
    });

    const _clearInterval = ()=>{
        clearInterval(t);
        t = null;
    }

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
    };
  },
};
</script>
<style scoped lang="less">
.carousel {
  width: 100%;
  height: 100%;
  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>