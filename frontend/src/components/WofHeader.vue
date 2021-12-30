<template>
  <header class="header">
    <div class="header__main-nav">
      <img class="header__logo" src="../assets/logo.png" />
      <router-link to="/" class="header__main-link">Wiki On Fire</router-link>
    </div>
    <div class="header__user-nav">
      <router-link to="/login" class="header__nav-link" v-if="!username">
        <span class="header__link-text">Sign In</span>
        <wof-icon icon="wof-user" :size="2"></wof-icon>
      </router-link>
      <router-link to="/user/username" class="header__nav-link" v-if="username">
        <router-link :to="`/user/${username}`" class="header__link-text">{{username}}</router-link>
        <img src="../assets/placeholder-icon.png" class="header__user-image" />
      </router-link>
      <wof-button v-if="username" icon="wof-logout" :size="1.5" @click="logout"></wof-button>
    </div>
  </header>
</template>

<script>
export default {
  name: "WofHeader",
  computed: {
    username() {
      return this.$store.getters.username;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push('/');
      });
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
      margin-right: 0.8em;

      .header__user-image {
        width: 2.5em;
        height: 2.5em;
      }

      .header__link-text {
        text-decoration: none;
        color: @primary-bright-text-color;
        font-size: 1.3rem;
        margin-right: 0.8em;
      }
    }
  }
}
</style>
