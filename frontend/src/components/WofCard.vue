<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'WofCard'
}
</script>

<style lang="less">
@import './common.less';

.card {
    display: flex;
    padding: 1em;
    background-color: @secondary-color;
    border-radius: 20px;
    width: min-content;
    height: min-content;
}

</style>
