<template>
    <footer>
        <img class="footer__ul-img" src="../assets/logo-ul-eng.png">
        <div class="footer__authors">
            <h4>Authors:</h4>
            <span>Karol Kozłowski</span>
            <span>Konrad Pagacz</span>
            <span>Robert Szczurkowski</span>
            <span>Magdalena Wiechecka</span>
            <span>Kacper Fryczak</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'WofFooter',
}
</script>

<style lang="less">
@import './common.less';

footer {
    display: flex;
    background-color: @primary-theme-color;
    padding: 10px;

    .footer__ul-img {
        width: 14em;
    }

    .footer__authors {
        display: flex;
        flex-direction: column;
        color: @white;

        h4 {
            margin: 0px;
            margin-bottom: 4px;
        }
    }
}

</style>
