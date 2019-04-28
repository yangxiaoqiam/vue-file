<template>
    <div>
        学生列表
        <ul>
            <li v-for="(item,index) in studentList" :key="index+item">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        //props:['student-list']
        data() {
            return {
                studentList: []
            }
        },
        created(){
            this.bus.$on('add',name=>{
                this.studentList.push(name)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>