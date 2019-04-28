<template>
    <div>
        <!-- <add-student @add="add"></add-student>
        <student-list :student-list="studentList"></student-list> -->
        <add-student ></add-student>
        <student-list ></student-list>
    </div>
</template>
<script>
    // import AddStudent from './Learn.vue'
    import AddStudent from '@/components/student/AddStudent'
    import StudentList from '@/components/student/StudentList'

    export default {
        data(){
            return {
                studentList:[]
            }
        },
        components: {
            // AddStudent
            AddStudent,
            StudentList
        },
        methods:{
            add(name){
                this.studentList.push(name)
            }
        }
    }
</script>
<style>

</style>