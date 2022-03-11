import store from "@/store";
if (store.getters.token) {
  store.dispatch('permission/handleRoutes')
}

export default store;
