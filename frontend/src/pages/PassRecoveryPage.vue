<template>
  <wof-card class="pass-recovery-card">
    <div class="pass-recovery" :style="formVisibility">
      <h1 class="pass-recovery__title">Change password</h1>
      <div class="horizontal-line"></div>
      <form class="pass-recovery__form">
        <div class="pass-recovery__input">
          <wof-input name="Password" :type="'password'" :error="password.errorMsg" @change="setPassword"></wof-input>
        </div>
        <div class="pass-recovery__input">
          <wof-input name="Confirm password" :type="'password'" :error="passwordConfirm.errorMsg" @change="setPasswordConfirm"></wof-input>
        </div>
      </form>
      <div class="horizontal-line"></div>
      <div class="pass-recovery__bottom">
        <wof-button class="pass-recovery__submit-button" :variant="submitButtonVariant" @click="changePassword">
          Change password
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
import { updateUser } from '../httpLayers/accountActions.http.js';

export default {
  name: "PassRecoveryPage",
  components: {
    WofInput,
    WofSpinnerDots,
    WofInfoBox
  },
  data() {
      return {
        password: {
          value: '',
          errorMsg: ''
        },
        passwordConfirm: {
          value: '',
          errorMsg: ''
        },
        loading: false,
        resultTitle: null,
        resultType: null,
        resultMessage: null
      }
  },
  computed: {
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
      if(this.password.value === '' || this.passwordConfirm.value === '') {
        return 'disabled';
      } else {
        return 'default';
      }
    }
  },
  methods: {
      /**
     * This will set new password and check if it is correct.
     */
    setPassword(newValue) {
      this.password.value = newValue;
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
     * Form is valid only if all fields are not empty and all fields are valid
     */
    formValidation() {
     if(this.password.errorMsg === '' && this.passwordConfirm.errorMsg === '') {
        if(this.password.value.length > 0 && this.passwordConfirm.value.length > 0) {
          return true;
        }
      }
      return false;
    },
    async changePassword() {
      if(this.formValidation()) {
        let userChangingPassword = null;
        this.loading = true;
        try {
          userChangingPassword = await updateUser(this.$store.getters.username, {password: this.password.value});
        } catch(err) {
          this.resultTitle = 'Error';
          this.resultType = 'error';
          this.resultMessage = err.message;
        }
        if(userChangingPassword) {
          this.resultTitle = 'Success';
          this.resultType = 'positive';
          this.resultMessage = 'Password Changed';
        }
        this.loading = false;
      }
    },
    closePopup() {
      const resultTemp = this.resultTitle;
      this.resultTitle = null;
      this.resultType = null;
      this.resultMessage = null;
      if(resultTemp) {
          this.$router.push(`/user/${this.$store.getters.username}`);
      }
    }
  }
};
</script>

<style lang="less">
@import "../components/common.less";

.pass-recovery-card {
  margin: 2em 0em;
  position: relative;
}

.pass-recovery {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  min-width: 500px;
  font-size: 0.8rem;

  .pass-recovery__title {
    margin: 0.2em 0px;
    font-size: 2.5em;
  }

  .pass-recovery__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 30px 0px;

    .pass-recovery__input {
      display: flex;
      justify-content: center;
      padding: 0.5em;
      .input {
        width: 80%;
      }
    }
  }

  .pass-recovery__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em 0em;

    .pass-recovery__submit-button {
      align-self: center;
      font-size: 1.2em;
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