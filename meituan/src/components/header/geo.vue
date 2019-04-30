<!--  -->
<template>
    <div class="m-geo">
      <div class="position">
        <i class="el-icon-location" />
        北京
        <router-link :to="{name:'changeCity'}">
          切换城市
        </router-link>
        [
        <a href="#">阜南县</a>
        <a href="#">阜南县</a>
        <a href="#">阜南县</a>
        ]
      </div>
     <div class="m-user">
        <router-link :to="{name:'login'}" class="login">
          立即登录
        </router-link>
        <router-link :to="{name:'register'}" class="register">
            注册
          </router-link>
     </div>
    </div>
  </template>
  <script>
    export default {
    
    }
  
  </script>
  