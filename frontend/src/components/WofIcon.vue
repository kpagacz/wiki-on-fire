<template>
    <div>
        <i :class="icon" :style="`font-size: ${size}rem`"></i>
    </div>
</template>

<script>
/**
 * Component which contain icon.
 */
export default {
    name: 'WofIcon',
    props: {
        /**
        * Name of icon.
        * @example wof-ok-circle:before
        */
        icon: {
            type: String,
            required: true
        },
        /**
         * Size of icon.
         */
        size: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="less">
@import './icons.less';

</style>
