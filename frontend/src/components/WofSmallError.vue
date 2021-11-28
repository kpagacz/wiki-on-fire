<template>
<div class="small-error-contener">
    <div class="small-error-icon">
        <wof-icon @mouseover="hover = true" @mouseleave="hover = false" icon="wof-warning-circle-fill" :size="this.size"/>
    </div>
    <div class="small-error-content" v-if="hover">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
  name: "WofSmallError",

  props: {
      size: Number
  },
  data() {
    return {
      hover: false
    };
  }
}
</script>

<style lang="less">

.small-error-contener{
    display: flex;
    position: absolute;
    align-items: center;
}

.small-error-icon{
    color: #E13E3E;
    margin-right: 0.5em;
    order: 1;
    
}

.small-error-content{
    border-radius: 1em;
    padding: 0.5em;
    font-size: 1rem;
    background-color: #E13E3E;
    color: #FFFFFF;
    order: 2;
    flex-basis: auto;
    min-height: 0%;
    min-width: 0%;
    align-content: center;
}

</style>
