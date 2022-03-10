<template>
  <div>
    <h1>测试界面:Home</h1>
    <div>count: {{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      count() {
        return this.$store.getters.count;
      },
    },
    mounted: function () {
    
    },
    methods: {
      addCount() {
        this.$store.commit("addCount", 1);
      },
    },
  };
</script>
<style scoped>

</style>
