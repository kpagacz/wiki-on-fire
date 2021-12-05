<template>
  <wof-card>
    <div class="register-page">
      <h1 class="register-page__title">Create account</h1>
      <div class="horizontal-line"></div>
      <form class="register-page__form">
        <div class="register-page__input">
          <wof-input name="User name" :error="username.errorMsg" @change="setUsername" :maxLength="20"></wof-input>
        </div>
        <div class="register-page__input">
          <wof-input name="Email address" :error="email.errorMsg" @change="setEmail"></wof-input>
        </div>
        <div class="register-page__input">
          <wof-input name="Password" :type="'password'" :error="password.errorMsg" @change="setPassword"></wof-input>
        </div>
        <div class="register-page__input">
          <wof-input name="Confirm password" :type="'password'" :error="passwordConfirm.errorMsg" @change="setPasswordConfirm"></wof-input>
        </div>
        <div class="register-page__input">
          <div class="register-page__image-upload">
            <h2>Upload your avatar image</h2>
            <div class="register-page__image-section">
              <img :src="avatarImage" class="register-page__image" />
              <div>
                <input
                  type="file"
                  ref="fileInput"
                  accept="image/png, image/jpeg"
                  hidden
                  @change="changeAvatar"/>
                <wof-button type="button" icon="wof-camera" :size="1.2" @click="uploadAvatar">
                  Upload image
                </wof-button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="horizontal-line"></div>
      <div class="register-page__bottom">
        <router-link to="/login" class="register-page__link">
          Already have an account? Sign In
        </router-link>
        <wof-button class="register-page__submit-button" @click="createAccount">
          Create account
        </wof-button>
      </div>
    </div>
  </wof-card>
</template>

<script>
import WofInput from "../components/WofInput.vue";

export default {
  name: "RegisterPage",
  components: { WofInput },
  data() {
    return {
      username: {
        value: '',
        errorMsg: ''
      },
      email: {
        value: '',
        errorMsg: ''
      },
      password: {
        value: '',
        errorMsg: ''
      },
      passwordConfirm: {
        value: '',
        errorMsg: ''
      },
      avatar: {
        img: "",
        errorMsg: "",
      },
    };
  },
  computed: {
    avatarImage() {
      if (this.avatar.img.length > 0) {
        return this.avatar.img;
      } else {
        return require(`../assets/placeholder.png`);
      }
    }
  },
  methods: {
    setUsername(newValue) {
      this.username.value = newValue;
    },
    setEmail(newValue) {
      this.email.value = newValue;
      if(!this.email.value.includes('@') && this.email.value.length > 0) {
        this.email.errorMsg = 'Email should contain "@"';
      } else {
        this.email.errorMsg = '';
      }
    },
    setPassword(newValue) {
      this.password.value = newValue;
      if(this.passwordConfirm.value.length > 0 && this.passwordConfirm.value != this.password.value) {
        this.passwordConfirm.errorMsg = 'Passwords do not match'
      } else {
        this.passwordConfirm.errorMsg = '';
      }
    },
    setPasswordConfirm(newValue) {
      this.passwordConfirm.value = newValue;
      if(this.passwordConfirm.value != this.password.value) {
        this.passwordConfirm.errorMsg = 'Passwords do not match'
      } else {
        this.passwordConfirm.errorMsg = '';
      }
    },
    uploadAvatar() {
      this.$refs.fileInput.click();
    },
    changeAvatar(event) {
      const file = event.target.files[0];
      this.avatar.img = URL.createObjectURL(file);
    },
    formValidation() {
     if(this.username.errorMsg == '' && this.password.errorMsg == '' && this.passwordConfirm.errorMsg == '' && this.email.errorMsg == '') {
        if(this.username.value.length > 0 && this.password.value.length > 0 && this.passwordConfirm.value.length > 0 && this.email.value.length > 0) {
          return true;
        }
      }
      return false;
    },
    createAccount() {
      if(this.formValidation()) {
        //This will be replaced with call to http
        console.log("Username:"+this.username.value);
        console.log("Email:"+this.email.value);
        console.log("Password:"+this.password.value);
        console.log("ConfirmPassword:"+this.passwordConfirm.value);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../components/common.less";

.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  min-width: 500px;
  font-size: 0.8rem;

  .register-page__title {
    margin: 0.2em 0px;
    font-size: 2.5em;
  }

  .register-page__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 30px 0px;

    .register-page__input {
      display: flex;
      justify-content: center;
      padding: 0.5em;
      .input {
        width: 80%;
      }

      .register-page__image-upload {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;

        .register-page__image-section {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;

          .register-page__image {
            width: 200px;
            height: 200px;
            margin-right: 30px;
          }
        }
      }
    }
  }

  .register-page__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    padding: 2em 0em;

    .register-page__submit-button {
      align-self: center;
      font-size: 1.2em;
    }

    .register-page__link {
      color: @primary-dark-text-color;
      font-size: 1.1rem;
    }
  }
}

@media (max-width: 767.98px) {

  .register-page__image-section {
    align-items: center;
    gap: 0.5em;

    .register-page__image {
      order: 2;
    }
  }
}
</style>
