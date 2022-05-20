import {defineAsyncComponent} from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
const HelloWorld = () => import("../components/HelloWorld.vue");
const routes = [
  { path: "/HelloWorld", component: HelloWorld },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: 
    // {
    //     template: "<div>404 Not Found</div>",
    //   }

    // defineAsyncComponent(() => {
    //   return new Promise((resolve, reject) => {
    //     // ...load component from server
    //     resolve({
    //       template: "<div>404 Not Found</div>",
    //     })
    //   })
    // })

    ()=>Promise.resolve({
      template: "<div>404 Not Found</div>",
    }),
    
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
