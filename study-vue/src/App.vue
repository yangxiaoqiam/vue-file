<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->


    <div class="header">
      <div class="logo">
        <div class="logo"><img src="./assets/logo.png"></div>
      </div>
      <ul class="nav">
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/learn">课程学习</router-link>
        <router-link tag="li" to="/student">学员展示</router-link>
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </div>
    <router-view class="router-vue"></router-view>

    <router-view class="router-vue" name='community'></router-view>
    <router-view class="router-vue" name='personal'></router-view>
    <router-view class="router-vue" name='learn'></router-view>

  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped="">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .header {
    background: #000;
    padding: 20px 250px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  .logo {
    img {
      width: 60px;
    }
  }

  ul {
    list-style: none;

    li {
      display: inline-block;
      margin-left: 50px;
      font-size: 18px;
    }
  }
</style>