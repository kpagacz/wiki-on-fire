<template>
    <div class="main-page">
        <h1>Welcome</h1>
        <p>Here we will have some introduction</p>
        <div class="articles">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
};
</script>

<style lang="less">
@import '../components/common.less';


</style>