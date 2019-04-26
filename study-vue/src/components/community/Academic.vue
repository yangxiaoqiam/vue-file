<template>
    <div>
        <ul>
            <router-link tag="li" :to="{name:'question',params:{id:item.id}}"  v-for="item in questionList" :key="item.id"  >{{item.title}}</router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                questionList: [{
                    id: 1,
                    title: '测试1'
                },{
                    id: 2,
                    title: '测试2'
                },{
                    id: 3,
                    title: '测试3'
                }]
            }
        }
    }
</script>
<style>

</style>