<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed } from "@vue/reactivity";
import { provide, ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
const log = (val) => {
  console.log(val);
};
const modelValue = ref("default model-value");
const temp=ref('temp')
provide('provide',computed(()=>{
    return temp.value
  })
)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <HelloWorld
    v-model="modelValue"
    msg="Hello Vue 3 + Vite"
    aaa="12312"
    @bbb="() => {}"
    @showCount="log($event)"
    @update:modelValue="log($event)"
    #="{item,index}"
  >
    <div>
      {{ `item:${item}  index:${index}` }}
    </div>
  </HelloWorld>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
