<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <serach-bar />
    </el-row>
  </div>
</template>


<script>
  import topBar from '@/components/header/topBar'
  import serachBar from '@/components/header/serachBar'
  export default {
    components: {
      topBar,
      serachBar
    }
  }

</script>
  <style lang="scss">
      @import "@/assets/css/public/header/index.scss";
    </style>
    
