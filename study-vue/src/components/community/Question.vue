<template>
  <div class="question">
    问题:{{question}}
  </div>
</template>

<script>
  export default {
    created() {
      const qid = this.$route.params.id;
      const dataIndex = this.questionList.findIndex(item => item.id == qid);

      if (dataIndex == -1) {
        //this.$router.go(-1)
        this.$router.replace('/err.html');
      } else {
        this.question = this.questionList[dataIndex].title
      }
    },
    data() {
      return {
        question: '',
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
<style scoped lang="scss">

</style>