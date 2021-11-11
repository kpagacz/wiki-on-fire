<template>
  <main>
    <router-view msg="This is a basic frontend"></router-view>
    <wof-button>A button</wof-button>
  </main>
</template>

<script>
import WofButton from './components/WofButton.vue';

export default {
  components: { WofButton },
  name: "App",
};
</script>

<style lang="less">
body {
  margin: 0;
  box-sizing: border-box;

  main {
    font-family: Roboto;
  }
}

</style>
