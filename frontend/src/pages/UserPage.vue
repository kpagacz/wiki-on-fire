<template>
    <div class="user-page">
        <wof-optional-section>
            <div class="user-page__user">
                <div class="user-page__avatar">
                    <img src="../assets/placeholder.png">
                </div>
                <div class="user-page__options">
                    <h2 class="user-page__options-header">Your Data</h2>
                    <div class="horizontal-line"></div>
                    <div class="user-page__option">
                        <h3 class="user-page__option-name">Username:</h3>
                        <span class="user-page__option-value">{{ userLogin }}</span>
                    </div>
                    <div class="user-page__option">
                        <h3 class="user-page__option-name">Email:</h3>
                        <span class="user-page__option-value">{{ userEmail }}</span>
                        <wof-button class="user-page__option-button" icon="wof-edit" :size="1.1" @click="openEditPopup">Change email address</wof-button>
                    </div>
                    <h2 class="user-page__options-header">Account Options</h2>
                    <div class="horizontal-line"></div>
                    <div class="user-page__option user-page__option--row">
                        <wof-button icon="wof-edit" variant="warning" :size="1.1" @click="changePassword">Change password</wof-button>
                        <wof-button icon="wof-user-delete" variant="error" :size="1.1" @click="removeAccount">Remove account</wof-button>
                    </div>
                </div>
            </div>
        </wof-optional-section>
        <wof-edit-popup title="Email"
        :isOpen="isEditOpen"
        :serviceErrorMsg="editServiceError"
        :inputErrorMsg="editInputError"
        :currentValue="userEmail"
        :currentValueName="edittedValueName"
        :loading="editLoading"
        @edit="changeEmail"
        @close="closeEditEmail"></wof-edit-popup>
        <wof-info-box :isOpen="errorOpen" title="Error" type="error" @close="closeErrorPopup">{{ errorMessage }}</wof-info-box>
        <div v-if="loading" class="loading">
            <wof-spinner-dots :size="4" :loading="loading"></wof-spinner-dots>
        </div>
    </div>
</template>

<script>
import WofOptionalSection from '../components/WofOptionalSection.vue';
import WofEditPopup from '../components/WofEditPopup.vue';
import WofInfoBox from '../components/WofInfoBox.vue';
import WofSpinnerDots from '../components/WofSpinnerDots.vue';
import { updateUser, deleteUser } from '../httpLayers/accountActions.http.js';

export default {
    name: 'UserPage',
    components: {
        WofOptionalSection,
        WofEditPopup,
        WofInfoBox,
        WofSpinnerDots
    },
    props: {
        /**
         * This prop comes from route param
         */
        userLogin: {},
    },
    data() {
        return {
            userEmail: this.$store.getters.email,
            /**
              * All these 'edit' properities are connected to editing email via WofEditPopup
            */
            isEditOpen: false,
            editServiceError: '',
            editInputError: '',
            edittedValueName: 'Email',
            editLoading: false,
            errorMessage: '',
            loading: false
        };
    },
    computed: {
        /**
         * If we have some error message, we will open WofInfoBox
         */
        errorOpen() {
            if(this.errorMessage.length > 0) {
                return true;
            }
            return false;
        }
    },
    methods: {
        openEditPopup() {
            this.isEditOpen = true;
        },
        /**
         * In this function, we will call updateUser function which will change user's email.
         * New email comes from WofEditPopup opened by user.
         */
        async changeEmail(_, newEmail) {
            this.editLoading = true;
            if(!newEmail.includes('@')) {
                this.editInputError = "Email should contain '@' symbol";
                this.editLoading = false;
            } else {
                try {
                    const updatedUser = await updateUser(this.$store.getters.username, {email: newEmail});
                    this.$store.commit('setUser', updatedUser);
                    this.userEmail = newEmail;
                    this.isEditOpen = false;
                } catch(err) {
                    this.editServiceError = err.message;
                }
                this.editLoading = false;
            }
        },
        /**
         * Change password will redirect us to PassRecoveryPage
         */
        changePassword() {
            this.$router.push(`/password-recovery`);
        },
        /**
         * We call deleteUser function and then we will log out the removed user.
         * If everything was successful, we will be redirected to the main page
         */
        async removeAccount() {
            if(confirm("Do you really want to remove your account?")) {
                let isRemoved = false;
                this.loading = true;
                try {
                    isRemoved = await deleteUser(this.$store.getters.username);
                    await this.$store.dispatch('logOut');
                } catch(err) {
                    this.errorMessage = err.message;
                    this.loading = false;
                }
                this.loading = false;
                if(isRemoved) {
                    this.$router.push('/');
                }
            }
        },
        closeErrorPopup() {
            this.errorMessage = '';
        },
        closeEditEmail() {
            this.isEditOpen = false;
        }
    }
};
</script>

<style lang="less">
@import '../components/common.less';

.user-page {
    display: flex;
    width: 100%;

    .user-page__user {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1em 0em;

        .user-page__options {
            display: flex;
            flex-direction: column;
            min-width: 600px;

            .user-page__options-header {
                margin: 0;
                margin-bottom: 0.3em;
            }

            .user-page__option {
                display: flex;
                align-items: center;
                padding: 0.5em 0em;

                &--row {
                    justify-content: space-between;
                }

                .user-page__option-name {
                    margin: 0;
                    margin-right: 0.5em;
                }

                .user-page__option-value {
                    font-size: 1.1rem;
                    margin-right: 0.5em;
                }
            }
        }
    }

    .user-page__avatar {
        margin-right: 20px;
        img {
            width: 250px;
            height: 250px;
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
}

</style>
