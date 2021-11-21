<template>
    <div class="popper"/>
</template>

<script>
export default{
    name: "WofPopper"
}
</script>

<style lang="less">
@import './common.less';

.popper{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
}

</style>
