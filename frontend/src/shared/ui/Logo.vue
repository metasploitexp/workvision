<template>
    <div class="ui-logo">
        <img src="@/shared/assets/icons/workvision.png">
    </div>
</template>

<script>
export default {
    name: 'uiLogo',
}
</script>

<style lang="scss">
.ui-logo img {

    @media screen and (max-width: 350px) {
       width: 120px;
    }
}
</style>