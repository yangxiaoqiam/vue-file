<template>
  <ul class="course-list">
    <li v-for="item in courseList" :key="item.name" class="courese">
      <img :src="item.poster" alt='' class="poster">
      <p class="title">{{item.name}}</p>
      <div class="course-ifo">
        <div class="price" v-if="item.price>0">￥{{item.price}}</div>
        <div class="price free" v-else>免费</div>
        <div class="institution">杨晓倩</div>
      </div>
    </li>
  </ul>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState(['courseList'])
    }
  }
</script>
<style lang="scss" scoped>
  .course-list {
    display: flex;
    flex-wrap: wrap;
    
    font-size: 14px;

  }

  .courese {
    width: 220px;
    padding: 10px;
    border: 1px solid transparent;
    margin-bottom: 10px;

    img {
      width: 100%;
    }

  }

  .course-ifo {
    display: flex;
    justify-content: space-between;

  }

  .title {
    margin-top: 10px;
    min-height: 40px
  }
  .price{
    color:red;
    &.free{
      color:green;
    }
  }
</style>