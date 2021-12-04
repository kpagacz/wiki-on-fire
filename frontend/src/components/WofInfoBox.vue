<template>
    <wof-popper :isOpen="this.isOpen">
    <div :class="`${this.infoBoxType}`" v-if="this.isOpen">
        <div class="info_box__title-close-container">
            <div class="info_box__title">
                {{ title }}
            </div>
            <div class="info_box__close-window-block">
                <wof-icon :id="`info_box__close-button`" @click="$emit('close')" icon="wof-cancel" :size=2 />
            </div>
       </div>
        <div class="info_box__content">
            <slot></slot>
        </div>
    </div>
    </wof-popper>
</template>

<script>
import WofPopper from './WofPopper.vue'

export default {
  components: { WofPopper },
    name: "WofBox",

    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "Title",
        },
        type: {
            type: String,
            required: true,
            default: "default",
            validator(value){
                return["error", "warning", "positive", "default"].includes(value)
            }
        }  
    },
    computed: {
    infoBoxType: function() {
      return "info-box info-box--"+this.type;
    }
  }
}
</script>


<style lang="less">
@import './common.less';

.info-box{
    display: flex;
    background-color: @secondary-color;
    min-width: 400px;
    flex-direction: column;
    font-size: 1.5rem;
    border-radius: 1em;
    color: @primary-bright-text-color;
    overflow: hidden;
    overflow-wrap: anywhere;

    &--warning{
        background-color: @secondary-warning-color;
        color: black;
        .info_box__title-close-container{background-color: @primary-warning-color;}
        #info_box__close-button{ 
            background-color: @primary-warning-color;
            &:hover, &:focus-visible {
                color: @primary-bright-text-color;
            }
        }
    }

    &--default{
        background-color: @secondary-color;
        .info_box__title-close-container{background-color: @primary-theme-color;}
        #info_box__close-button{ 
            background-color: @primary-theme-color;
            &:hover, &:focus-visible {
                color: @placeholder;
            }
        }
    }

    &--error{
        background-color: @secondary-error-color;
        .info_box__title-close-container{background-color: @primary-error-color;}
        #info_box__close-button{ 
            background-color: @primary-error-color;
            &:hover, &:focus-visible {
                color: @placeholder;
            }
        }
    }

    &--positive{
        background-color: @secondary-positive-color;
        .info_box__title-close-container{background-color: @primary-positive-color;}
        #info_box__close-button{ 
            background-color: @primary-positive-color;
            &:hover, &:focus-visible {
                color: @placeholder;
            }
        }
    }

    .info_box__title-close-container{
        display: flex;
        padding: 0.2em;
        justify-content: space-between;
        align-items: center;
        .info_box__title{
            order: 1;
            text-align: left;
            padding: 0.5em;
        }
        .info_box__close-window-block{
            order: 2;
            padding: 0.5em;
        }
    }

    .info_box__content{
        padding: 1em;
        overflow-wrap: anywhere;
        font-size: 1.125rem;
    }
}
</style>
