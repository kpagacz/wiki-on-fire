<template>
  <main>
    <wof-header/>
    <div class="main-wrapper">
      <router-view msg="This is a basic frontend">
          <wof-article-list :articles="articles" :isButtonVisible="true" @add="addArticle"></wof-article-list>
      </router-view>
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
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Some interesting article1',
          linkToContents: 'https://en.wikipedia.org/wiki/Potato',
          dateAdded: '24.12.2021',
          lastModification: '27.12.2021',
          numberOfViews: 3401,
          numberOfEditions: 7
        },
        {
          id: 2,
          title: 'Best City at Mediterranean Sea Ever!!!!1!',
          linkToContents: 'https://en.wikipedia.org/wiki/Constantinople',
          dateAdded: '25.12.2021',
          lastModification: '28.12.2021',
          numberOfViews: 6543,
          numberOfEditions: 10
        },
        {
          id: 3,
          title: 'I know it from college',
          linkToContents: 'https://en.wikipedia.org/wiki/Turing_machine',
          dateAdded: '27.12.2021',
          lastModification: '22.12.2021',
          numberOfViews: 245,
          numberOfEditions: 1
        },
      ]
    }
  },
  methods: {
    addArticle(articleID) {
      console.log(articleID);
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
    }
  }
}

</style>
