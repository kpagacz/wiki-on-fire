<template>
  <div class="articles-result">
    <h1 class="articles-result__title">Most viewed articles</h1>
    <div class="horizontal-line"></div>
    <div class="articles-result__list">
      <wof-article-list
        :isButtonVisible="this.$store.getters.isAuth"
        :articles="articles"
      />
    </div>
    <div class="articles-result__nav">
      <wof-page-nav
        :currentPage="parseInt(currentPage)"
        :totalPages="totalPages"
        @go="changePage"
      />
    </div>
    <wof-info-box title="Error" type="warning" :isOpen="errorMessage ? true : false" @close="closePopup">
      {{errorMessage}}
    </wof-info-box>
  </div>
</template>

<script>
import WofArticleList from "../components/WofArticleList.vue";
import WofInfoBox from '../components/WofInfoBox.vue';
import WofPageNav from "../components/WofPageNav.vue";
import { getArticles } from "../httpLayers/articles.http.js";

export default {
  name: "MainPage",
  components: { WofArticleList, WofPageNav, WofInfoBox },
  props: {
    currentPage: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      totalPages: 1,
      articles: [],
      errorMessage: null
    };
  },
  methods: {
    checkPage(value) {
      if (value > this.totalPages) {
        this.$router.replace({ path: `/${this.totalPages}` });
        return false;
      } else if (value < 1) {
        this.$router.replace({ path: `/${1}` });
        return false;
      }
      return true;
    },
    changePage(newPage) {
        if(this.checkPage(newPage)) {
            this.$router.push({ path: `/${newPage}` });
        }
    },
    getArticlesData(pageNumber) {
      try {
        const response = getArticles(pageNumber, 1);
        this.articles = response.items;
        this.totalPages = response.totalPages;
      } catch(error) {
        this.errorMessage = error.message;
      }
    },
    closePopup() {
      this.errorMessage = null;
    }
  },
  watch: {
    currentPage(value) {
      this.getArticlesData(value);
    },
  },
  mounted() {
      if(this.checkPage(this.currentPage)) {
          this.getArticlesData(this.currentPage);
      }
  }
};
</script>

<style lang="less">
@import "../components/common.less";

.articles-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .articles-result__title {
    display: flex;
    align-self: flex-start;
    margin: 0.3em 0em;
  }

  .articles-result__list {
    margin-top: 1em;
  }

  .articles-result__nav {
    padding: 1em 0em;
  }
}
</style>