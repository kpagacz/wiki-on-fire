<template>
    <div class="main-page">
        <h1>Welcome</h1>
        <div class="articles">
            <div class="articles__list">
                <wof-article-list :isButtonVisible="this.$store.getters.isAuth" />
            </div>
            <div class="articles__nav">
                <wof-page-nav :currentPage="parseInt(currentPage)" :totalPages="totalPages" @go="changePage" />
            </div>
        </div>
    </div>
</template>

<script>
import WofArticleList from '../components/WofArticleList.vue';
import WofPageNav from '../components/WofPageNav.vue';

export default {
    name: 'MainPage',
    components: { WofArticleList, WofPageNav },
    props: {
        currentPage: {
            type: String,
            default: '1'
        }
    },
    data() {
        return {
            totalPages: 20
        }
    },
    methods: {
        checkPage(value) {
            if(value > this.totalPages) {
                this.$router.replace({path: `/${this.totalPages}`});
            } else if(value < 1) {
                this.$router.replace({path: `/${1}`});
            }
        },
        changePage(newPage) {
            this.checkPage(newPage);
            this.$router.push({path: `/${newPage}`});
        }
    },
    beforeMount() {
        this.checkPage(this.currentPage);
    }
};
</script>

<style lang="less">
@import '../components/common.less';

.main-page {

    .articles {
        display: flex;
        flex-direction: column;
        align-items: center;

        .articles__nav {
            padding: 1em 0em;
        }
    }
}

</style>