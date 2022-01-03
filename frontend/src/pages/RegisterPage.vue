<template>
  <wof-card class="register-page-card">
    <div class="register-page" :style="formVisibility">
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
        <wof-button class="register-page__submit-button" :variant="submitButtonVariant" @click="createAccount">
          Create account
        </wof-button>
      </div>
    </div>
      <div v-if="loading" class="loading">
        <wof-spinner-dots :size="4" :loading="loading"></wof-spinner-dots>
      </div>
      <wof-info-box :isOpen="infoBoxOpen" :title="resultTitle" :type="resultType" @close="closePopup">{{ resultMessage }}</wof-info-box>
  </wof-card>
</template>

<script>
import WofInput from "../components/WofInput.vue";
import WofSpinnerDots from "../components/WofSpinnerDots.vue";
import WofInfoBox from '../components/WofInfoBox.vue';
import { registerUser } from '../httpLayers/accountActions.http.js';

export default {
  name: "RegisterPage",
  components: {
    WofInput,
    WofSpinnerDots,
    WofInfoBox
  },
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
      loading: false,
      resultTitle: null,
      resultType: null,
      resultMessage: null
    };
  },
  computed: {
    /**
     * This will return user avatar or placeholder image
     */
    avatarImage() {
      if (this.avatar.img.length > 0) {
        return this.avatar.img;
      } else {
        return require(`../assets/placeholder.png`);
      }
    },
    formVisibility() {
      if(this.loading) {
        return 'visibility: hidden;';
      }
      return 'visibility: visible;';
    },
    infoBoxOpen() {
      if(this.resultTitle) {
        return true;
      }
      return false
    },
    /**
     * Submit button variant is disabled if at least one of fields is empty
     */
    submitButtonVariant() {
      if(this.username.value == '' || this.password.value == '' || this.passwordConfirm.value == '' || this.email.value == '') {
        return 'disabled';
      } else {
        return 'default';
      }
    }
  },
  methods: {
    setUsername(newValue) {
      this.username.errorMsg = '';
      this.username.value = newValue;
    },
    /**
     * This will set new email and check if it is correct.
     */
    setEmail(newValue) {
      this.email.value = newValue;
      if(!this.email.value.includes('@') && this.email.value.length > 0) {
        this.email.errorMsg = 'Email should contain "@"';
      } else {
        this.email.errorMsg = '';
      }
    },
    /**
     * This will set new password and check if it is correct.
     */
    setPassword(newValue) {
      this.password.value = newValue;
      this.password.errorMsg = '';
      if(this.passwordConfirm.value.length > 0 && this.passwordConfirm.value != this.password.value) {
        this.passwordConfirm.errorMsg = 'Passwords do not match'
      } else {
        this.passwordConfirm.errorMsg = '';
      }
    },
    /**
     * This will set new password for confirmation and check if it is correct.
     */
    setPasswordConfirm(newValue) {
      this.passwordConfirm.value = newValue;
      if(this.passwordConfirm.value != this.password.value) {
        this.passwordConfirm.errorMsg = 'Passwords do not match'
      } else {
        this.passwordConfirm.errorMsg = '';
      }
    },
    /**
     * This will trigger a click event on input for files. It should open window to search your device for images.
     */
    uploadAvatar() {
      this.$refs.fileInput.click();
    },
    /**
     * This will update user image, which will be displayed.
     */
    changeAvatar(event) {
      const file = event.target.files[0];
      this.avatar.img = URL.createObjectURL(file);
    },
    /**
     * Form is valid only if all fields are not empty and all fields are valid
     */
    formValidation() {
     if(this.username.errorMsg == '' && this.password.errorMsg == '' && this.passwordConfirm.errorMsg == '' && this.email.errorMsg == '') {
        if(this.username.value.length > 0 && this.password.value.length > 0 && this.passwordConfirm.value.length > 0 && this.email.value.length > 0) {
          return true;
        }
      }
      return false;
    },
    /**
     * This will check if form is valid on frontend side and will call /users endpoint to register user.
     * It can throw an error on some service or network error.
     * If everything is ok it will display popup with success message.
     */
    async createAccount() {
      if(this.formValidation()) {
        let registeredUser = null;
        this.loading = true;
        try {
          registeredUser = await registerUser(this.username.value, this.password.value, this.email.value);
        } catch(err) {
            switch(err.path) {
              case 'password':
                this.password.errorMsg = err.message;
              break;
              case 'email':
                this.email.errorMsg = err.message;
              break;
              case 'username':
                this.username.errorMsg = err.message;
              break;
              default:
                this.resultTitle = 'Error';
                this.resultType = 'error';
                this.resultMessage = err.message;
              break;
            }
        }
        if(registeredUser) {
          this.resultTitle = 'Success';
          this.resultType = 'positive';
          this.resultMessage = 'User Created';
        }
        this.loading = false;
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

.register-page-card {
  margin: 2em 0em;
  position: relative;
}

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

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
