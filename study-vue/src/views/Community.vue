<template>
    <ul>
        <div>
            <ul class="nav">
                <router-link tag="li" to="/community/academic">学术讨论</router-link>
                <router-link tag="li" to="/community/download">资源下载</router-link>
                <router-link tag="li" to="/community/personal">个人中心</router-link>
            </ul>
            <router-view class="con-router-view"></router-view>
        </div>
    </ul>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
  
.nav {
    li{
        display: inline-block;
        margin:0 10px;
    }
}
.con-router-view{
    padding: 20px 10px;
}
</style>