<template>
  <main>
    <wof-header/>
    <div class="main-wrapper">
      <!--<router-view msg="This is a basic frontend"></router-view>-->
      <wof-article-list></wof-article-list>
    </div>
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofHeader from './components/WofHeader.vue';
import WofArticleList from './components/WofArticleList.vue';

export default {
  components: { WofFooter, WofHeader, WofArticleList },
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
    }
  }
}

</style>
