<template>
  <header class="header">
    <div class="header__main-nav">
      <img class="header__logo" src="../assets/logo.png" />
      <router-link to="/" class="header__main-link">Wiki On Fire</router-link>
    </div>
    <div class="header__user-nav">
      <router-link to="/login" class="header__nav-link" v-if="!user.length">
        <span class="header__link-text">Sign In</span>
        <wof-icon icon="wof-user" :size="2"></wof-icon>
      </router-link>
      <router-link to="/user/username" class="header__nav-link" v-if="user.length">
        <span class="header__link-text">{{user}}</span>
        <img src="../assets/placeholder-icon.png" class="header__user-image" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "WofHeader",
  data() {
      return { //Placeholder
          user: ''
      }
  }
};
</script>

<style lang="less">
@import "./common.less";

.header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: @primary-theme-color;

  .header__main-nav {
    display: flex;
    align-items: center;

    .header__logo {
      width: 4em;
      height: 4em;
    }

    .header__main-link {
      color: @primary-bright-text-color;
      text-decoration: none;
      font-size: 2rem;
      font-weight: 500;
      padding-left: 10px;

      &:hover {
        color: @primary-warning-color;
      }
    }
  }
  .header__user-nav {
    display: flex;
    align-items: center;

    .header__nav-link {
      display: flex;
      align-items: center;
      color: @primary-bright-text-color;
      text-decoration: none;

      .header__user-image {
        width: 2.5em;
        height: 2.5em;
      }

      .header__link-text {
        font-size: 1.2rem;
        margin-right: 0.8em;
      }
    }
  }
}
</style>
