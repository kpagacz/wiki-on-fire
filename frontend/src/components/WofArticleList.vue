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
                <th class="wof-article-list__header">
                    Number of viewers (this week)
                </th>
                <th class="wof-article-list__header">
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
                <td class="wof-article-list__cell">
                    <wof-button icon="wof-plus" variant="positive"></wof-button>
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
    color: @primary-bright-text-color;
}
</style>