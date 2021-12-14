<template>
    <div class="login-page" :style="formVisibility" @keydown="submitOnKey">
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
    <div v-if="loading" class="loading">
        <wof-spinner-dots :size="4" :loading="loading"></wof-spinner-dots>
      </div>
      <wof-info-box :isOpen="resultTitle ? true : false" :title="resultTitle" :type="resultType" @close="closePopup">{{ resultMessage }}</wof-info-box>
  </wof-card>
</template>

<script>
import WofInput from "../components/WofInput.vue";
import WofSpinnerDots from '../components/WofSpinnerDots.vue';
import WofInfoBox from '../components/WofInfoBox.vue';

export default {
  name: "LoginPage",
  components: { WofInput, WofSpinnerDots, WofInfoBox},
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
      loading: false,
      /**
        * All those result{X} properties are related to error on logging in
      */
      resultTitle: null,
      resultType: null,
      resultMessage: null
    };
  },
  computed: {
    /**
      * It returns hidden or visible 'visibility' css property, based on loading state, in a String
    */
    formVisibility() {
      if(this.loading) {
        return 'visibility: hidden;';
      }
      return 'visibility: visible;';
    }
  },
  methods: {
    /**
      * It requires String argument
    */
    setUsername(newValue) {
      this.username.value = newValue;
    },
    /**
      * It requires String argument
    */
    setPassword(newValue) {
      this.password.value = newValue;
    },
    /**
      * Form is valid only when login AND password are correct.
    */
    formValidation() {
     if(this.username.errorMsg == '' && this.password.errorMsg == '') {
        if(this.username.value.length > 0 && this.password.value.length > 0) {
          return true;
        }
      }
      return false;
    },
    /**
      * This function will call store action 'logIn' with username and password as a payload.
      * Call is possible only if form is valid.
      * While contacting http, the loading is displayed for minimum 500ms
      * If login is successful, user will be redirected to his own user page.
    */
    async logIn() {
      this.loading = true;
      let start = Date.now();
      let result = false;
      if(this.formValidation()) {
        try {
          result = await this.$store.dispatch('logIn', {username: this.username.value, password: this.password.value});
        } catch(err) {
          this.loading = false;
          this.resultTitle = 'Error';
          this.resultType = 'error';
          this.resultMessage = err.message;
        }
        if(result) {
          let timeRemaining = Date.now() - start;
          if(timeRemaining < 500) {
            setTimeout(() => {
              this.loading = false;
              this.$router.push(`/user/${this.username.value}`);
            }, 500 - timeRemaining);
          } else {
            this.loading = false;
            this.$router.push(`/user/${this.username.value}`);
          }
        }
      }
    },
    /**
      * This will call logIn method when user hit enter
    */
    submitOnKey(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.logIn();
      }
    },
    closePopup() {
      this.resultTitle = null;
      this.resultType = null;
      this.resultMessage = null;
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

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
