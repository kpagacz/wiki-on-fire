<template>
  <main>
    <wof-header/>
    <wof-small-error size=1>Error description</wof-small-error>
    <div class="main-wrapper">
      <router-view msg="This is a basic frontend">
      <wof-small-error size=1>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:</wof-small-error></router-view>
      
      
    </div>
    <wof-small-error size=1>Error description</wof-small-error>
    
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofHeader from './components/WofHeader.vue';
import WofSmallError from './components/WofSmallError.vue';

export default {
  components: { WofFooter, WofHeader, WofSmallError },
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
