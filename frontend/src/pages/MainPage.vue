<template>
  <div class="main-page">
    <h1 class="main-page__welcome-header">Welcome!</h1>
    <div class="main-page__introduction">
      <div class="main-page__row">
        <div class="main-page__info-section">
          <h2 class="main-page__info-header">Why Wikipedia is important?</h2>
          <p class="main-page__info-text">
            Wikipedia is a free, universal, multilingual, online encyclopedia.
            Almost every person who has access to the Internet has been to
            Wikipedia once! It is an incredibly useful source of knowledge in
            almost every field. An important feature of Wikipedia is that it is
            made by ordinary people and anyone can help it grow.
          </p>
        </div>
        <div class="main-page__info-section">
          <h2 class="main-page__info-header">
            Start being up to date with Wikipedia
          </h2>
          <p class="main-page__info-text">
            WikiOnFire is a website that aims to help you stay up to date with
            all the news, changes on Wikipedia. Thanks to it, you will be able
            to contribute to the development of wikipedia by watching for news
            introduced by users and checking whether they are not uploading
            anything harmful.
          </p>
        </div>
      </div>
      <div class="main-page__row">
        <div class="main-page__info-section">
          <h2 class="main-page__info-header">Join the Community</h2>
          <p class="main-page__info-text">
            Create an account and participate in the Wikipedia community. Create
            your own lists of favorite articles and always have easy access to
            them. Share your opinions on articles using the comment system
          </p>
        </div>
        <div class="main-page__info-section">
          <h2 class="main-page__info-header">Knowledge is for everyone</h2>
          <p class="main-page__info-text">
            Everyone can find something for themselves on Wikipedia. Students
            needing study materials. Research workers writing another work.
            Reviewers checking the sources. Ordinary people wanting to quickly
            check a topic. Each of them may need to be up to date with Wikipedia
          </p>
        </div>
      </div>
    </div>
    <div class="articles">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style lang="less">
@import "../components/common.less";

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em;

  .main-page__welcome-header {
    font-size: 2.5rem;
    align-self: flex-start;
    margin: 0em 0em 0.5em 0em;
    width: 100%;
  }

  .main-page__introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;

    .main-page__row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;

        .main-page__info-section {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            padding: 1em;

            .main-page__info-header {
                font-size: 1.6rem;
                margin: 0;
            }

            .main-page__info-text {
                margin: 0;
                font-size: 1.2rem;
            }
        }
    }
  }
}
</style>