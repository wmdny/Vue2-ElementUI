<template>
  <div>
    <h1>测试界面:About</h1>
    <el-row>
      <el-button @click="login">默认按钮</el-button>
    </el-row>
  
  </div>
</template>

<script>
  import {test} from "@/api/home";
  
  export default {
    data() {
      return {}
    },
    mounted: function () {
    
    },
    activated() {
    
    },
    methods: {
      login() {
        test({openid: '100051'}).then((data) => {
          console.log(data);
        })
      }
    },
  };
</script>
<style scoped>

</style>
