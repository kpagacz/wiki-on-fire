<template>
  <div class="articles-result">
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
  </div>
</template>

<script>
import WofArticleList from "../components/WofArticleList.vue";
import WofPageNav from "../components/WofPageNav.vue";
import { getArticles } from "../httpLayers/articles.http.js";

export default {
  name: "MainPage",
  components: { WofArticleList, WofPageNav },
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
  },
  watch: {
    currentPage(value) {
      const response = getArticles(value, 1);
      this.articles = response.items;
      this.totalPages = response.totalPages;
    },
  },
  mounted() {
      if(this.checkPage(this.currentPage)) {
          const response = getArticles(this.currentPage, 1);
          this.articles = response.items;
          this.totalPages = response.totalPages;
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

  .articles-result__nav {
    padding: 1em 0em;
  }
}
</style>