<template>
    <wof-popper>
    <table :class="`WofBox WofBox--${this.type}`">
        <tr :id="`first-row`">
            <th :id="`title`">{{ title }}</th>
            <th :id="`close-window`">
                <wof-button :type="this.type" :id="`close-window-button`" @click="$emit('close')">
                <wof-icon icon="wof-cancel" size=2  />
                </wof-button>
            </th>
        </tr>
        <tr>
        <th colspan="2" id="content"><slot></slot></th>
        </tr>
    </table>
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
                return["error", "warning", "success", "info"].includes(value)
            }
        }  
    }
}
</script>


<style lang="less">
@import './common.less';

.WofBox{
    background-color: @secondary-color;
    min-width: 400px;
    max-width: 600px;
    font-size: 1.5rem;
    word-wrap: break-word;
    color: white;
    top:50%;
    left:50%;
    position:fixed;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    align-content: center;
    height: 0;
    border-radius: 20px;
    padding: 0px;
    z-index: 9999;
    overflow: hidden;
    border-collapse: collapse;
    #title{
        text-align: left;
        font-weight: normal;
    }
    #title, #close-window{
        padding: 10px 20px 10px;
    }
    #close-window-button{
        float: right;
        background-color: @primary-theme-color;
        border: 0;
        padding: 0;
        border-radius: 0;
    }
    #content{
        font-size: 1.125rem;
        text-align: left;
        padding: 15px;
        font-weight: normal;
    }
    &--warning{
        background-color: @secondary-warning-color;
        color: black;
        #title{background-color: @primary-warning-color;}
        #close-window{background-color: @primary-warning-color;}
        #close-window-button{background-color: @primary-warning-color;}
    }
    &--info{
        background-color: @secondary-color;
        #title{background-color: @primary-theme-color;}
        #close-window{background-color: @primary-theme-color;}
        #close-window-button{ background-color: @primary-theme-color;}
    }
    &--error{
        background-color: @secondary-error-color;
        #title{background-color: @primary-error-color;}
        #close-window{background-color: @primary-error-color;}
        #close-window-button{ background-color: @primary-error-color;}
    }
    &--success{
        background-color: @secondary-positive-color;
        #title{background-color: @primary-positive-color;}
        #close-window{background-color: @primary-positive-color;}
        #close-window-button{ background-color: @primary-positive-color;}
    }
}
</style>