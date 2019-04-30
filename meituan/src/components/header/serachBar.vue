<template>
    <div class="search-panel">
     <el-row class="m-header-searchbar">
       <el-col  :span="3" class="left">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
       </el-col>
       <el-col  :span="15" class="center">
         <div class="wrapper">
            <el-input v-model="searchWord" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
         </div>
         <p class="suggest">
            <a href="#">故宫博物院</a>
            <a href="#">故宫博物院</a>
            <a href="#">故宫博物院</a>
            <a href="#">故宫博物院</a>
            <a href="#">故宫博物院</a>
            <a href="#">故宫博物院</a>
         </p>
       </el-col>
     </el-row>
    </div>
  </template>
  
  
  <script>
    export default {
  data(){
    return {
      searchWord:''
    }
  }
    }
  
  </script>
  <style lang="scss">
   @import "@/assets/css/public/header/search.scss"
  </style>
  