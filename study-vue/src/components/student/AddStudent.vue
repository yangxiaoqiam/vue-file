<template>
    <div>
       添加學生：
       <input type="text" v-model="name">
       <button @click="add">确认</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:''
            }
        },
        methods:{
            add(){
                //this.$emit('add',this.name);
                this.bus.$emit('add',this.name);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>