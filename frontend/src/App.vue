<template>
  <main>
    <router-view msg="This is a basic frontend"></router-view>
    <wof-button>A button</wof-button>
    <div class="main-wrapper">
      <router-view msg="This is a basic frontend"></router-view>
    </div>
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofButton from './components/WofButton.vue';

export default {
  components: { WofFooter, WofButton},
  name: "App",
};
</script>

<style lang="less">
@import './components/common.less';
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
