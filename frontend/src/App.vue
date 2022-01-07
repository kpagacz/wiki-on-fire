<template>
  <main>
    <wof-header/>
    <div class="main-wrapper">
      <router-view></router-view>
    </div>
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofHeader from './components/WofHeader.vue';

export default {
  components: { WofFooter, WofHeader },
  name: "App",
  async mounted() {
    await this.$store.dispatch('autoLogIn');
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
    }
  }
}

</style>
