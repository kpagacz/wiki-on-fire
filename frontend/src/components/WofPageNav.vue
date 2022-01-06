<template>
    <div class="wof-page-nav">
        <wof-button icon="wof-left"
                    :size="1.4"
                    :variant="prevButtonState"
                    @click="this.$emit('go', this.currentPage-1)">
        </wof-button>
        <div class="wof-page-nav__pages">
            <input class="wof-page-nav__input" type="number" :min="1" :max="totalPages" v-model="pageNumber" @keydown="submitOnKey">
            <span>of</span>
            <span class="wof-page-nav__total-pages">{{ totalPages }}</span>
        </div>
        <wof-button icon="wof-right"
                    :size="1.4"
                    :variant="nextButtonState"
                    @click="this.$emit('go', this.currentPage+1)">
        </wof-button>
        <wof-button :size="1.1" @click="submitPageNumber" class="wof-page-nav__go-button">
            Go
        </wof-button>
    </div>
</template>

<script>
/**
 * Component used to pagination.
 */
export default {
    name: 'WofPageLinks',
    props: {
        /**
         * Current page.
         */
        currentPage: {
            type: Number,
            default: 1
        },
        /**
         * Total amount of pages.
         */
        totalPages: {
            type: Number,
            required: true
        }
    },
    emits: ['go'],
    data() {
        return {
            pageNumber: this.currentPage
        };
    },
    computed: {
        prevButtonState() {
            if(this.currentPage-1 < 1) {
                return 'disabled';
            }
            return 'default';
        },
        nextButtonState() {
             if(this.currentPage+1 > this.totalPages) {
                return 'disabled';
            }
            return 'default';
        }
    },
    methods: {
        submitPageNumber() {
            if(this.pageNumber < 1) {
                this.$emit('go', 1);
            } else if(this.pageNumber > this.totalPages) {
                this.$emit('go', this.totalPages);
            } else {
                this.$emit('go', this.pageNumber);
            }
        },
        submitOnKey(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                this.submitPageNumber();
            }
        }
    }
};
</script>

<style lang="less">
@import './common.less';

.wof-page-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1em;
    background-color: @primary-theme-color;
    border-radius: 20px;
    width: min-content;
    height: min-content;

    .wof-page-nav__pages {
        display: flex;
        color: @primary-bright-text-color;
        padding: 0em 1em;

        .wof-page-nav__input {
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            border: none;
            border-radius: 15px;
            box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
            -moz-appearance: textfield;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &:focus {
                box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
                outline: none;
            }
        }

        .wof-page-nav__total-pages {
            font-weight: 700;
            margin: 0px 0px;
        }

        span {
            margin: 0px 5px;
        }
    }

    .wof-page-nav__go-button {
        margin-left: 0.3em;
    }
}

</style>