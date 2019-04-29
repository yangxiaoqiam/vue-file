<template>
    <div>
        添加學生：
        <input type="text" v-model="name">
        <button @click="changStudent({name,number:1})">确认</button>
    </div>

</template>

<script>
    import { mapState,mapActions} from 'vuex';
    export default {
        data() {
            return {
                name: ''
                // storeName:'1'
            }
        },
        // computed: {
        //     storeName() {
        //         return this.$store.state.name
        //     },
        //     sotreAge(){
        //         return this.$store.state.age
        //     },
        //     sotreLook(){
        //         return this.$store.state.look
        //     }

        // },
        // computed: {
        //     ...mapState({
        //         storeName: state => state.name,
        //         storeAge: state => state.age,
        //         storeLook: state => state.look,
        //     })
        // },
        methods: {
            ...mapActions(['changStudent'])
            // add() {

            //     //this.$emit('add',this.name);
            //     //this.$store.state.name = 'shanshan';
            //     //this.bus.$emit('add', this.name);
            //    // this.$store.state.studentList.push(this.name)
            //    //this.$store.commit('changStudent',{name:this.name,number:1})
            //   // this.$store.dispatch('changStudent',{name:this.name,number:1})
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>