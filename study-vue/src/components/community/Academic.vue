<template>
  <div>
    <ul>
      <router-link
        tag="li"
        :to="{name:'question',params:{id:item.id}}"
        v-for="item in questionList"
        :key="item.id"
      >{{item.title}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
//  beforeRouteEnter (to, from, next) {
//     console.log(this);  //undefined，不能用this来获取vue实例
//     console.log('组件路由钩子：beforeRouteEnter');
//     next(vm => {
//       console.log(vm);  //vm为vue的实例
//       console.log('组件路由钩子beforeRouteEnter的next');
//     });
//   },


  //组件内守卫
  // beforeRouteEnter(to, from, next) {
  //   debugger
  //     const whetherLoing=to.matched[0].meta.login;
  //     if(whetherLoing){
  //         next();
  //         return;
  //     }

  //   const answer = confirm('你还没有登录，要登陆后才能浏览信息，要登录吗？')
  //   if (answer) {
  //     next({
  //       name: 'personal
  //     });
  //   } else {
  //     next(false)
  //   }
  // },
  data() {
    return {
      questionList: [{
        id: 1,
        title: '测试1'
      }, {
        id: 2,
        title: '测试2'
      }, {
        id: 3,
        title: '测试3'
      }]
    }
  }
}


</script>
<style>
</style>