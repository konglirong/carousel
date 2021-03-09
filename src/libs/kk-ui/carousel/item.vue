<!--  -->
<template>
  <transition>
    <div class="carItem" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getCurrentInstance, reactive, toRefs, watch } from "vue";
export default {
  name: "CarItem",
  //import引入的组件需要注入到对象中才能使用
  setup() {
    const instance = getCurrentInstance();
    console.log(instance);

    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });

    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="less" scoped>
.carItem {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.v-enter-active,
.v-leave-active {
  transform: all .3 linear;
}

.v-enter-active {
  transform: translateX(100%);
}

.v-enter-to {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(-100%);
}

img {
  width: 100%;
}
</style>