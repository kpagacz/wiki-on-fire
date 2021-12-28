<template>
    <wof-card>
        <table class="wof-article-list">
            <tr class="wof-article-list__row">
                <th class="wof-article-list__header">
                    Article's name
                </th>
                <th class="wof-article-list__header">
                   Date added
                </th>
                <th class="wof-article-list__header">
                    Last Edition
                </th>
                <th class="wof-article-list__header wof-article-list__header--small">
                    Number of viewers (this week)
                </th>
                <th class="wof-article-list__header wof-article-list__header--small">
                    Number of editions (this month)
                </th>
            </tr>
            <tr class="wof-article-list__row">
                <td class="wof-article-list__cell">
                    <a href="#" class="wof-article-list__name">Some interesting article</a>
                </td>
                <td class="wof-article-list__cell">
                    20.12.2021
                </td>
                <td class="wof-article-list__cell">
                    21.12.2021
                </td>
                <td class="wof-article-list__cell">
                    3421
                </td>
                <td class="wof-article-list__cell">
                    15
                </td>
                <td class="wof-article-list__cell wof-article-list__cell--button">
                    <wof-button icon="wof-plus" variant="positive" :size="1.3"></wof-button>
                </td>
            </tr>
        </table>
    </wof-card>
</template>

<script>
export default {
    name: 'WofArticleList'
};
</script>

<style lang="less">
@import './common.less';

.wof-article-list {
    width: 100%;
    min-width: 1000px;
    border-collapse: collapse;
    color: @primary-bright-text-color;

    .wof-article-list__row {
        border-bottom: 1px solid @primary-accent-color;

        .wof-article-list__header {
            text-align: start;
            margin: 0;
            padding: 0;

            &.wof-article-list__header--small {
                font-size: 0.8rem;
                max-width: 60px;
            }
        }

        .wof-article-list__cell {

            .wof-article-list__name {
                text-decoration: none;
                color: @primary-bright-text-color;
            }

            &.wof-article-list__cell--button {
                width: 100%;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
}
</style>