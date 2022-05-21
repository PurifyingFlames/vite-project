<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      content: "hello",
    };
  },
  mounted() {
    // console.log(
    //   "%c [ this ]-6",
    //   "font-size:13px; background:pink; color:#bf2c9f;",
    //   this
    // );
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // console.log(
      //   "%c [ vm ]-7",
      //   "font-size:13px; background:pink; color:#bf2c9f;",
      //   vm
      // );
    });
  },
};
</script>
<script setup>
import { computed } from "@vue/reactivity";

import {
  inject,
  onMounted,
  onBeforeUpdate,
  ref,
  useAttrs,
  unref,
  watch,
  toRefs,
  reactive,
  onUpdated,
  withDirectives,
  nextTick,
  toRef,
  useCssModule,
} from "vue";

import useMapState from '@/utils/useMapState.js'

const prop = defineProps({
  modelValue: String,
  msg: String,
});
const { modelValue, msg } = toRefs(prop);
const emit = defineEmits(["showCount", "update:modelValue"]);
let n = ref(0);
const aaa = computed({
  get() {
    return modelValue.value;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const ijt = inject("provide", "hahaha");
const arr = ref([1, 2, 3]);
const ppp = computed(() => {
  return 123;
});

watch(modelValue, () => {
  console.log("watch!!!");
});
const ref1 = ref(null);
const ref2 = ref([]);
const r = reactive({
  name: "tom",
});
const bgc = ref("#999");
function changeBgc() {
  let fn = () => Math.floor(Math.random() * 256);
  bgc.value = `rgb(${fn() + "," + fn() + "," + fn()})`;
}
const vFocus = {
  // 指令的定义
  mounted(el, binding) {
    el.focus();
    // console.log(binding);
  },
};
// 确保在每次更新之前重置ref
onBeforeUpdate(() => {
  ref2.value = [];
});
onUpdated(() => {
  // console.log(ref2.value);
});
onMounted(() => {
  // console.log(Object.assign({}, useAttrs()));
  // console.log(ijt.value);
  // console.log(modelValue);
  // console.log(ref1.value);
  // console.log(ref2);
  // console.log(arr);
  // console.log(toRefs(r).name);
  // console.log(
  //   "%c [  ]-71",
  //   "font-size:13px; background:pink; color:#bf2c9f;",
  //   toRef(aaa, "aaa")?.value
  // );
  // // console.log(app);
  // console.log(
  //   "%c [  ]-81",
  //   "font-size:13px; background:pink; color:#bf2c9f;",
  //   useCssModule()
  // );

  // console.log(store.state.count);

  // console.log('%c [  ]-119', 'font-size:13px; background:pink; color:#bf2c9f;', useMapState(['count']))
  console.log();
  123
  n.value = 6;
  nextTick(() => {
    // console.log(ref1.value.innerHTML);
  });
});
</script>

<template>
  <h1 ref="ref1">{{ "inject: " + ijt + n }}</h1>
  <h1>{{ modelValue }}</h1>
  <h1>{{ msg }}</h1>
  <div
    v-bind="$attrs"
    v-for="(item, index) of arr"
    :ref="
      (el) => {
        if (el) ref2[index] = el;
      }
    "
  >
    <slot :item="item" :index="index"></slot>
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <input v-focus v-model="aaa" />
  <button
    type="button"
    @click="
      n++;
      emit('showCount', n);
      emit('update:modelValue', 'new model-value');
      arr = [4];
      changeBgc();
    "
  >
    n is: {{ n }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped module>
a {
  /* color: #42b983; */
  color: v-bind(bgc);
}
.ooo {
  font-size: 12px;
  color: red;
  background-color: red;
}
</style>
