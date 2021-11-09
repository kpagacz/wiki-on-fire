<template>
    <div>
        <i :class="icon" :style="`font-size: ${size}px`"></i>
    </div>
</template>

<script>
export default {
    name: 'WofIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 16
        }
    }
}
</script>

<style lang="less">
@import './icons.less';

</style>
