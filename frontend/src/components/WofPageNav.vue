<template>
    <div class="wof-page-nav">
    </div>
</template>

<script>
export default {
    name: 'WofPageLinks',
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        totalPages: {
            type: Number,
            required: true
        }
    }
};
</script>

<style lang="less">
@import './common.less';

.wof-page-nav {
    display: flex;
    padding: 1em;
    background-color: @primary-theme-color;
    border-radius: 20px;
    width: min-content;
    height: min-content;
}

</style>