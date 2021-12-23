<template>
<div class="small-error" v-if="haveText">
    <div class="small-error__contener">
        <div class="small-error__icon">
            <wof-icon icon="wof-warning-circle-fill" :size="this.size"/>
        </div>
        <div class="small-error__wrap-text" :style="`left: ${size}rem; min-width: ${size*10}rem;`">
            <div class="small-error__content" :style="`font-size: ${size*0.5}rem;`">
                {{ text }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "WofSmallError",

  props: {
      size: {
          type: Number,
          default: 1
      },
      text:{
          type: String,
          default: ''
      }
  },
  computed: {
      haveText(){
            if(this.text!='')
                return true;
            else
                return false;  
      }
  },
}
</script>

<style lang="less">
@import './common.less';

.small-error{
    .small-error__contener{
        display: flex;
        position: relative; 
        justify-content: center; 
        align-items: center;

        .small-error__icon{
            color: @primary-error-color;
            order: 1;  
        }
        
        .small-error__icon:hover ~ .small-error__wrap-text .small-error__content{
                    display: flex;
                }

        .small-error__wrap-text{
            position:absolute;
            order:3;
            //align-content: center;
    
            .small-error__content{
                border-radius: 1em;
                padding: 0.35em;
                color: @primary-bright-text-color;
                background-color: @primary-error-color;
                order: 2;
                flex-basis: auto;
                align-content: center; 
                width: fit-content;
                display: none;
            }
        }
    }
}

</style>
