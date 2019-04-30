<template>
  <div class="layout-default">
    <el-container>
      <el-header heighr=''>
          <myHeader/>
      </el-header>
      <el-main  heighr=''>Main</el-main>
      <el-footer  heighr=''>Footer</el-footer>
    </el-container>

  </div>
</template>


<script>
  import myHeader from '@/components/header/index'
  export default {
    components: {
      myHeader
    }
  }

</script>
<style lang="scss">
@import   '@/assets/css/public/layout.scss'
</style>

