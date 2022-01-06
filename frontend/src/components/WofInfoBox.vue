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
/**
 * A component that contains information to show. 
 */
import WofPopper from './WofPopper.vue'

export default {
  components: { WofPopper },
    name: "WofBox",

    props: {
        /**
         * Determines whether the window will be displayed.
         */
        isOpen: {
            type: Boolean,
            default: false
        },
        /**
         * Title of info box.
         */
        title: {
            type: String,
            default: "Title",
        },
        /**
        * Type of info box. Determines style of box like color, etc.
        * @values error, warning, positive, default, neutral
        */
        type: {
            type: String,
            default: "default",
            validator(value){
                return["error", "warning", "positive", "default", "neutral"].includes(value)
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
    overflow-wrap: anywhere;

    &--warning{
        background-color: @secondary-warning-color;
        color: black;
        .info_box__title-close-container{
            background-color: @primary-warning-color;
            border-radius: 1em 1em 0 0; 
        }
        #info_box__close-button{ 
            background-color: @primary-warning-color;
            &:hover, &:focus-visible {
                color: @primary-bright-text-color;
            }
        }
    }

    &--neutral{
        background: @secondary-neutral-color;
        color: @primary-dark-text-color;
        
        .info_box__title-close-container{
            background: @primary-neutral-color;
            border-radius: 1em 1em 0 0; 
        }
        #info_box__close-button{ 
            background-color: @primary-neutral-color;
            &:hover, &:focus-visible {
                color: @placeholder;
            }
        }
    }
    
    &--default{
        background-color: @secondary-color;
        .info_box__title-close-container{
            background-color: @primary-theme-color;
            border-radius: 1em 1em 0 0; 
        }
        #info_box__close-button{ 
            background-color: @primary-theme-color;
            &:hover, &:focus-visible {
                color: @placeholder;
            }
        }
    }

    &--error{
        background-color: @secondary-error-color;
        .info_box__title-close-container{
            background-color: @primary-error-color;
            border-radius: 1em 1em 0 0;
        }
        #info_box__close-button{ 
            background-color: @primary-error-color;
            &:hover, &:focus-visible {
                color: @placeholder;
            }
        }
    }

    &--positive{
        background-color: @secondary-positive-color;
        .info_box__title-close-container{
            background-color: @primary-positive-color;
            border-radius: 1em 1em 0 0;
        }
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
