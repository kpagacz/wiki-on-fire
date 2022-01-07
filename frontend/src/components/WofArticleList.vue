<template>
  <wof-card>
    <table class="wof-article-list">
      <tr class="wof-article-list__row">
        <th class="wof-article-list__header">Article's name</th>
        <th class="wof-article-list__header">Views (last week)</th>
      </tr>
      <tr class="wof-article-list__row"
        v-for="article in articles"
        :key="article.id">
        <td :class="cellClass">
          <a :href="article.link" class="wof-article-list__name">
            {{ article.title }}
          </a>
        </td>
        <td :class="cellClass">
          {{ article.views }}
        </td>
        <td class="wof-article-list__cell wof-article-list__cell--button" v-if="isButtonVisible">
          <wof-button
            icon="wof-plus"
            variant="positive"
            :size="1.3"
            @click="this.$emit('add', article.id)">
            </wof-button>
        </td>
      </tr>
    </table>
  </wof-card>
</template>

<script>
export default {
  name: "WofArticleList",
  props: {
    articles: {
      type: Array,
      validator: (list) => {
        for (let i = 0; i < list.length; i++) {
          if (
            !list[i].id ||
            !list[i].link ||
            !list[i].title ||
            !list[i].views
          ) {
            return false;
          }
        }
        return true;
      },
    },
    isButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["add"],
  computed: {
    cellClass() {
      if (!this.isButtonVisible) {
        return "wof-article-list__cell wof-article-list__cell--padding";
      }
      return "wof-article-list__cell";
    },
  },
};
</script>

<style lang="less">
@import "./common.less";

.wof-article-list {
  width: 100%;
  min-width: 1000px;
  border-collapse: collapse;
  color: @primary-bright-text-color;

  .wof-article-list__row {
    border-bottom: 1px solid @primary-accent-color;

    .wof-article-list__header {
      text-align: start;
      font-size: 1.4rem;
      margin: 0;
      padding: 0;

      &.wof-article-list__header--small {
        font-size: 0.8rem;
        max-width: 60px;
      }
    }

    .wof-article-list__cell {
      text-align: start;

      .wof-article-list__name {
        text-decoration: none;
        color: @primary-bright-text-color;
        white-space: pre-wrap;

        &:hover {
          text-decoration: underline;
          color: @primary-dark-text-color;
        }
      }

      &.wof-article-list__cell--button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }

      &.wof-article-list__cell--padding {
        padding: 0.7em 0em;
      }
    }
  }
}
</style>