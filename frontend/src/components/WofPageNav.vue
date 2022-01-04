<template>
    <div class="wof-page-nav">
        <wof-button icon="wof-left" :size="1.5"></wof-button>
        <div class="wof-page-nav__pages">
            <input class="wof-page-nav__input" type="number" :min="1" :max="totalPages" v-model="value">
        </div>
        <wof-button icon="wof-right" :size="1.5"></wof-button>
    </div>
</template>

<script>
export default {
    name: 'WofPageLinks',
    props: {
        currentPage: {
            type: Number,
            default: 1
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            value: this.currentPage
        };
    }
};
</script>

<style lang="less">
@import './common.less';

.wof-page-nav {
    display: flex;
    padding: 0.5em;
    background-color: @primary-theme-color;
    border-radius: 20px;
    width: min-content;
    height: min-content;

    .wof-page-nav__pages {

        .wof-page-nav__input {
            border: none;
            box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);

            &:focus {
                box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
            }
        }
    }
}

</style>