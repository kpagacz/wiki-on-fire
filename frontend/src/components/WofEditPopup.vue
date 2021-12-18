<template>

<wof-info-box :title="this.title" :isOpen="this.isOpen" v-if="this.isOpen" type="neutral" @close="close">
    <div class="wof-edit-popup">
        <div class="wof-edit-popup__body" :style="isVisible">
            <div class="wof-edit-popup__field">
                <wof-input :name="this.currentValueName" :v-model="this.value" :initValue="this.currentValue" @change="editValue" :error="this.inputErrorMsg" ></wof-input>
            </div>
            <div class="wof-edit-popup__buttons">
                <wof-button variant="outline" @click="close">Cancel</wof-button>
                <wof-button variant="positive" @click="submitForm">Submit</wof-button>
            </div>
        </div>
        <div v-if="loading" class="loading" :style="`visibility: ${this.visibility};`">
            <wof-spinner-dots :size="4" :loading="loading"></wof-spinner-dots>
        </div>
        <div class="wof-edit-popup__error" :v-if="isErrorMsg" :style="`visibility: ${visibility};`">
            {{ serviceErrorMsg }}
        </div>
    </div>
</wof-info-box>

</template>

<script>
import WofInfoBox from '../components/WofInfoBox.vue';
import WofInput from '..//components/WofInput.vue';
import WofSpinnerDots from "../components/WofSpinnerDots.vue";
export default {
    name: 'WofEditPopup',
    components: { WofInfoBox, WofInput, WofSpinnerDots },
    props:{
        title:{
            type: String,
            default: ""
        },
        isOpen: {
            type: Boolean,
            default: false
        },
        currentValueName: {
            type: String,
            default: "Something"
        },
        currentValue: {
            type: String,
            default: ''
        },
        inputErrorMsg: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        },
        serviceErrorMsg: {
            type: String,
            default: ''
        },
    },
    data(){
        return{
            value: this.currentValue,
            visibility: "hidden"
        };
    },
    methods: {
        close(){
            this.$emit('close');
        },
        editValue(newValue){
            this.value=newValue;
        },
        submitForm(){
            this.$emit("edit", this.currentValueName, this.value);
        },
        changeVisibility(newValue){
            this.visibility=newValue;
        }
    },
    computed: {
        isVisible(){
            if(this.loading || this.serviceErrorMsg.length>0){
                this.changeVisibility("visible");
                return "visibility: hidden;";
            }
            else{
                this.changeVisibility("hidden");
                return "visibility: visible;";
            }
                 
        },
        isErrorMsg(){
            if(this.serviceErrorMsg.length>0){
                this.changeVisibility("visible");
                return true;
            }
            else if(!this.loading) {
                this.changeVisibility("hidden");
                return false;
            }
            return false;   
        }
    },
    emits: ['close', 'edit']
}
</script>

<style lang="less">
@import './common.less';
.wof-edit-popup{
    position: relative;
    .wof-edit-popup__body{
        padding: 0 3em 0;
        .wof-edit-popup__field{
            font-size: 0.75em;
            .input{
                .input__field{
                    &:focus{
                        background-color: @secondary-neutral-color;
                        box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
                        border: 2px solid @primary-neutral-color;
                    }
                }
            }
        }
        .wof-edit-popup__buttons{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 10px;
        }
    }

    .loading, .wof-edit-popup__error{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        position: absolute;
    }
}
</style>