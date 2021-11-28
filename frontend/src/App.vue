<template>
  <main>
    <wof-header/>
    <div class="main-wrapper">
      <router-view msg="This is a basic frontend">
        <wof-button @click="showBox('default')">Open info box</wof-button>
        <wof-button @click="showBox('warning')">Open warning box</wof-button>
        <wof-button @click="showBox('positive')">Open success box</wof-button>
        <wof-button @click="showBox('error')">Open error box</wof-button>
        
      </router-view>
      
    </div>
    <wof-info-box title="Tytuł" v-if="this.isBoxVisible" :type="this.type" @close="closeBox" >Content</wof-info-box>
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofHeader from './components/WofHeader.vue';
import WofInfoBox from './components/WofInfoBox.vue';

export default {
  components: { WofFooter, WofHeader, WofInfoBox },
  name: "App",
  data(){
    return{
      isBoxVisible: false,
      type: String
    }
  },
  methods:{
    showBox(i){
      this.isBoxVisible=true;
      this.type=i;
    },
    closeBox(i){
      this.isBoxVisible=false;
      this.type=i;
    }
  }
};
</script>

<style lang="less">
@import './components/common.less';
html {
  font-size: 16px;
}
body {
  margin: 0;
  box-sizing: border-box;

  main {
    font-family: Roboto;

    .main-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      min-height: 90vh;
      background-color: @tertiary-color;
      padding: 2em 4em;
    }
  }
}

</style>
