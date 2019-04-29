<template>
    <div>
        学生列表:{{this.$store.state.name}}
        <ul>
            <li v-for="(item,index) in studentList" :key="index+item">
                {{index}}--{{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    export default {
        //props:['student-list']
        data() {
            return {
                // studentList: []
            }
        },
        computed: {
            ...mapState(['studentList'])
        }
        // created() {
        //     this.bus.$on('add', name => {
        //         this.studentList.push(name)
        //     })
        // }
    }
</script>

<style lang="scss" scoped>

</style>