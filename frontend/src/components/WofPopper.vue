<template>
    <div class="popper">
        <div class="popper-content">
            <slot></slot> 
        </div>
    </div>
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

.popper-content{
    top:50%;
    left:50%;
    position:fixed;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    align-content: center;
}

</style>
