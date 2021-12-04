<template>
<div class="small-error">
    <div class="small-error__contener">
        <div class="small-error__icon">
            <wof-icon @mouseover="hover = true" @mouseleave="hover = false" icon="wof-warning-circle-fill" :size="this.size"/>
        </div>
        <div class="small-error__wrap-text">
            <div class="small-error__content" v-if="hover">
                <slot></slot>
            </div>
        </div>
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

.small-error{
    position: absolute;
    
    .small-error__contener{
        display: flex;
        position: absolute;
        min-width: 0;

        .small-error__icon{
            color: #E13E3E;
            margin-right: 0.5em;
            order: 1;
            margin: 0.5em;   
        }

        .small-error__wrap-text{
            position:absolute;
            order:3;
            min-width: 10vw;
            align-content: left;
            left: 4vh; 
    
            .small-error__content{
                border-radius: 1em;
                padding: 0.5em;
                font-size: 0.6rem;
                background-color: #E13E3E;
                color: #FFFFFF;
                order: 2;
                margin: auto;
                margin-left: 0;
                flex-basis: auto;
                position: absolute;
                margin-top: 0.75em;
                align-content: center;
            }
        }
    }
}
</style>
