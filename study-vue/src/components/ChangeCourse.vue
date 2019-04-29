<template>
  <div>
    <div class="change-area" v-if="ischange">
      <div class="box">
        <label for="">课程名称：</label>
        <input type="text" v-model='title'>
      </div>
      <div class="box">
        <label for="">课程价格：</label>
        <input type="text" v-model='price'>
      </div>
      <button class="confirm-btn" @click="confirm">提交修改</button>
    </div>
    <template v-else>
      <ul class="course-area">
        <li v-for='(item,index) in courseList' :key="item.name" class="couese">
          {{item.name}}
          {{item.price}}
          <button class="change-btn" @click="change(index)">点击修改</button>
        </li>
      </ul>

      <router-link :to="{name:'learn'}" tag="button">已全部修改</router-link>
    </template>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        ischange: false,
        title: '',
        price: 0,
        index: 0,
      }
    },
    computed: {
      ...mapState(['courseList'])
    },
    methods: {
      change(index) {
        this.ischange = true;
        const course = this.courseList[index];
        this.ischange = true;
        this.title = course.name;
        this.price = course.price;
        this.index = index;
      },
      confirm() {
        const name = this.title;
        const price = this.price;
        const index = this.index;
        this.$store.commit('changeCourse', {
          index,
          name,
          price
        });
        this.ischange = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    background: #000;
    color: #fff;
    padding: 5px 10px;
    border: 0;
  }
  .couese{
    margin-bottom: 10px;
  }
</style>