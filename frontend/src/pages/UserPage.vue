<template>
    <div class="login-page">
        <wof-optional-section>
            <div class="login-page__user">
                Username: {{ userLogin }}
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
        userLogin: {},
        
    }
};
</script>

<style lang="less">
@import '../components/common.less';

.login-page {
    display: flex;
    width: 100%;
}

</style>
