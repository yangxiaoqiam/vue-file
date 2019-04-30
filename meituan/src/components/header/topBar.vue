<template>
  <el-row class='m-header-topBar m-header'>
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <MNnav />
    </el-col>
  </el-row>
</template>


<script>
  import geo from './geo'
  import MNnav from './nav'
  export default {
    components: {
      geo,
      MNnav
    }
  }

</script>
<style lang="scss">
  @import '@/assets/css/public/header/topBar.scss'

</style>
