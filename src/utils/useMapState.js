import { computed } from "vue";
import { mapState, useStore } from "vuex";
export default (Keys) => {
  const store = useStore(); // 使用useStore方法
  const storeStateFns = mapState(Keys);
  const storeState = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn);
  });
  return storeState
};
