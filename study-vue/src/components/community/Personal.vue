<template>

  <div>
    <button @click="handleClick">{{loginFlag ? '退出':'登录'}}</button>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      loginFlag: this.defines.login
    }
  },
  created() {
    this.loginFlag = this.defines.login
  },
  methods: {
    handleClick() {
      this.loginFlag = !this.loginFlag;
      this.defines.setlogin(this.loginFlag)
    
    }
  }
}
</script>
    <style>
</style>