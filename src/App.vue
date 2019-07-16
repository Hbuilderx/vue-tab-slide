<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>

    <!-- 底部导航栏 -->
    <TabBar></TabBar>
  </div>
</template>

<script>
 import TabBar from './components/TabBar'
export default {
  name: 'App',
  components:{
    TabBar,
  }
}
</script>

<style scoped="scoped">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
}
</style >
