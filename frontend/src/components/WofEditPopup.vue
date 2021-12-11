<template>
    <wof-info-box class="wof-edit-popup" :title="this.title" :isOpen="this.state" v-if="this.state"  @close="changeState">

        <div class="wof-edit-popup__field">
            <form @submit.prevent="submitForm">
                <wof-input :name="this.currentValueName" :v-model="this.value" :initValue="this.currentValue" @change="editValue"  :error="this.errorMsg" ></wof-input>
            </form>
        </div>

        <div class="wof-edit-popup__buttons">
            <wof-button variant="outline" @click="changeState">Cancel</wof-button>
            <wof-button variant="positive" @click="submitForm">Submit</wof-button>
        </div>

    </wof-info-box>

    <!--Not used for now-->
    <div v-if="loading" class="loading">
        <wof-spinner-dots :size="4" :loading="loading"></wof-spinner-dots>
    </div>



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
        visible: {
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
        }
    },
    data(){
        return{
            state: this.visible,
            errorMsg: '',
            loading: false,
            value: this.currentValue
        };
    },
    methods: {
        changeState(){
            if(this.state==true){
                this.state=false;
                //this.loading=true;
            }
            else{
                this.state=true;
                //this.loading=false;
            }
        },
        editValue(newValue){
            this.value=newValue;
        },
        submitForm(){
            //This will be replaced with call to http
            console.log(this.currentValueName+": "+this.value);
            this.state=false;
        }
    }
}
</script>

<style lang="less">
@import './common.less';
.wof-edit-popup{
    
    .info_box__title-close-container{
        background: @primary-neutral-color;
        .info_box__title{
            color: @primary-dark-text-color;           
        }
        #info_box__close-button{
            background-color: @primary-neutral-color;       
        }
    }
    .info_box__content{
        background: @secondary-neutral-color;
        color: @primary-dark-text-color;
    }
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
        margin-top: 5px;
    }
}
</style>