<template>
  <div>
    <CourseList></CourseList>

    <router-link :to="{name:'changeCourse'}" tag="button" class="change-course">修改课程</router-link>
 

  </div>
</template>

<script>
  import CourseList from '@/components/learn/CourseList'
  export default {
    components:{
      CourseList
    }
  }
</script>

<style lang="scss" scoped>
.change-course{
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  background: #000;
  color:#fff;
  margin: 0 auto;
}
</style>
