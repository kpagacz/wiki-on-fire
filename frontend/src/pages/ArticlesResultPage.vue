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
import { getMostViewedArticles } from '../httpLayers/mostViewedArticles.http.js';

export default {
  name: "MainPage",
  components: { WofArticleList, WofPageNav, WofInfoBox },
  props: {
    /**
     * This prop comes from route param
     */
    currentPage: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      totalPages: 1,
      articles: [],
      errorMessage: null,
      articlesPerPage: 5
    };
  },
  methods: {
    /**
     * It will check if number of page is between 1 and number of last page (totalPages).
     */
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
    /**
     * Method to changing page with router, if page number is valid
     */
    changePage(newPage) {
        if(this.checkPage(newPage)) {
            this.$router.push({ path: `/${newPage}` });
        }
    },
    /**
     * It will call function which will download certain number of most viewed articles (articlesPerPage)
     * from certain page (pageNumber). If it is successful, we will save them in articles data property and
     * pass them to WofArticleList. We also get totalPages number, which will be passed to WofPageNav.
     * If we catch error, we will display it in the middle of the window with WofInfoBox.
     */
    async getArticlesData(pageNumber) {
      try {
        const response = await getMostViewedArticles(pageNumber, this.articlesPerPage);
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
    /**
     * It watches currentPage value to ensure that it's always valid.
     * If it is valid, then we will update list of articles
     */
    async currentPage(value) {
      await this.getArticlesData(value);
    },
  },
  /**
   * We are checking page number from route param and if it's valid - we run getArticlesData
   */
  async mounted() {
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