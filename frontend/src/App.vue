<template>
  <main>
    <wof-header/>
    <div class="main-wrapper">
      <router-view msg="This is a basic frontend"></router-view>
      <button @click="login()">Login</button>
      <button @click="getOneUser()">Get user</button>
    </div>
    <wof-footer/>
  </main>
</template>

<script>
import WofFooter from './components/WofFooter.vue';
import WofHeader from './components/WofHeader.vue';
import { loginUser } from "./httpLayers/login.http.js";
import wofApi from "./httpLayers/wofApi.js";

export default {
  components: { WofFooter, WofHeader },
  name: "App",
  methods: {
    login() {
      loginUser("test_username1", "test_password");
    },
    getOneUser() {
      const res = wofApi.get("/users/test_username1");
      console.dir(res);
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
      padding: 2em 4em;
    }
  }
}

</style>
