<template>
  <wof-card class="login-page-card">
    <div class="login-page">
      <h1 class="login-page__title">Login</h1>
      <div class="horizontal-line"></div>
      <form class="login-page__form">
        <div class="login-page__input">
          <wof-input name="User name" :error="username.errorMsg" @change="setUsername" :maxLength="20"></wof-input>
        </div>
        <div class="login-page__input">
          <wof-input name="Password" :type="'password'" :error="password.errorMsg" @change="setPassword"></wof-input>
        </div>
      </form>
      <div class="horizontal-line"></div>
      <div class="login-page__bottom">
        <router-link to="/register" class="login-page__link">
          Don't have an account? Sign Up
        </router-link>
        <wof-button class="login-page__submit-button" @click="logIn">
          Login
        </wof-button>
      </div>
    </div>
  </wof-card>
</template>

<script>
import WofInput from "../components/WofInput.vue";

export default {
  name: "LoginPage",
  components: { WofInput },
  data() {
    return {
      username: {
        value: '',
        errorMsg: ''
      },
      password: {
        value: '',
        errorMsg: ''
      },
    };
  },
  methods: {
    setUsername(newValue) {
      this.username.value = newValue;
    },
    setPassword(newValue) {
      this.password.value = newValue;
    },
    formValidation() {
     if(this.username.errorMsg == '' && this.password.errorMsg == '') {
        if(this.username.value.length > 0 && this.password.value.length > 0) {
          return true;
        }
      }
      return false;
    },
    logIn() {
      if(this.formValidation()) {
        //This will be replaced with call to http
        console.log("Username:"+this.username.value);
        console.log("Password:"+this.password.value);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../components/common.less";

.login-page-card {
  margin: 2em 0em;
  position: relative;
}

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  min-width: 500px;
  font-size: 0.8rem;

  .login-page__title {
    margin: 0.2em 0px;
    font-size: 2.5em;
  }

  .login-page__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 30px 0px;

    .login-page__input {
      display: flex;
      justify-content: center;
      padding: 0.5em;
      .input {
        width: 80%;
      }
    }
  }

  .login-page__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    padding: 2em 0em;

    .login-page__submit-button {
      align-self: center;
      font-size: 1.2em;
    }

    .login-page__link {
      color: @primary-dark-text-color;
      font-size: 1rem;
    }
  }
}

</style>
