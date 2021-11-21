<template>
  <main>
    <wof-header/>
    <div class="main-wrapper">
      <router-view msg="This is a basic frontend"></router-view>
    </div>
    <wof-spinner color = "red" loading = true size =16 />
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofHeader from './components/WofHeader.vue';
import WofSpinner from "./components/WofSpinner.vue";

export default {
  components: { WofFooter, WofHeader, WofSpinner},
  name: "App",
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
