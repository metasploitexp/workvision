<template>
    <div class="ui-logo" @click="$emit('handleClick')">
        <img src="@/shared/assets/image/workvisionLogo.png">
    </div>
</template>

<script>
export default {
    name: 'uiLogo',
}
</script>

<style lang='scss'>
    .ui-logo {
        width: fit-content;
        user-select: none;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            max-width: 250px;
            max-height: 250px;
        }
    }

</style>