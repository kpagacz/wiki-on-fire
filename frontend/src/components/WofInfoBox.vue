<template>
    <wof-popper>
    <div :class="`flex-container flex-container--${this.type}`">
        <div class="title-close-container">
            <div class="title">
                {{ title }}
            </div>
            <div class="close-window">
                <wof-button :type="this.type" :id="`close-window-button`" @click="$emit('close')">
                    <wof-icon icon="wof-cancel" size=2  />
                </wof-button>
            </div>
       </div>
        <div class="content">
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
        title: {
            type: String,
            default: "Title",
        },
        type: {
            type: String,
            required: true,
            default: "info",
            validator(value){
                return["error", "warning", "positive", "default"].includes(value)
            }
        }  
    }
}
</script>


<style lang="less">
@import './common.less';

.flex-container{
    display: flex;
    background-color: @secondary-color;
    min-width: 400px;
    max-width: 600px;
    flex-direction: column;
    font-size: 1.5rem;
    border-radius: 1em;
    color: @primary-bright-text-color;
    overflow: hidden;
    overflow-wrap: anywhere;
    &--warning{
        background-color: @secondary-warning-color;
        color: black;
        .title-close-container{background-color: @primary-warning-color;}
    }
    &--default{
        background-color: @secondary-color;
        .title-close-container{background-color: @primary-theme-color;}
        #close-window-button{ 
            background-color: @primary-theme-color;
            &:hover, &:focus-visible {
                background-color: @secondary-color;
            }
        }
    }
    &--error{
        background-color: @secondary-error-color;
        .title-close-container{background-color: @primary-error-color;}
    }
    &--positive{
        background-color: @secondary-positive-color;
        .title-close-container{background-color: @primary-positive-color;}
    }
}

.title-close-container{
    display: flex;
    padding: 0.5em;
}

.title{
    order: 1;
    flex-grow: 2;
    text-align: left;
    padding: 0.5em 0.5em 0em;
}
.close-window{
    order: 2;
}

.content{
    padding: 1em;
    overflow-wrap: anywhere;
    font-size: 1.125rem;
}
</style>
