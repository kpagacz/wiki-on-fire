<template>
    <div class="popper" v-if="this.isOpen">
        <div class="popper__content">
            <slot></slot> 
        </div>
    </div>
</template>

<script>
export default{
    name: "WofPopper",

    props: {
        isOpen:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less">
@import './common.less';

.popper{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    .popper__content{
        top:50%;
        left:50%;
        position:fixed;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        align-content: center;
    }
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
