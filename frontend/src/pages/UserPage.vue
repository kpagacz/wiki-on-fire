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
                        <wof-button class="user-page__option-button" icon="wof-edit" :size="1.1">Change email address</wof-button>
                    </div>
                    <h2 class="user-page__options-header">Account Options</h2>
                    <div class="horizontal-line"></div>
                    <div class="user-page__option user-page__option--row">
                        <wof-button icon="wof-edit" variant="warning" :size="1.1">Change password</wof-button>
                        <wof-button icon="wof-user-delete" variant="error" :size="1.1">Remove account</wof-button>
                    </div>
                </div>
            </div>
        </wof-optional-section>
    </div>
</template>

<script>
import WofOptionalSection from '../components/WofOptionalSection.vue';

export default {
    name: 'UserPage',
    components: {
        WofOptionalSection,
    },
    props: {
        /**
         * This prop comes from route param
         */
        userLogin: {},
    },
    data() {
        return {
            userEmail: this.$store.getters.email
        };
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
}

</style>
