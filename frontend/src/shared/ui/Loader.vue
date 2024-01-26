<template>

<div class="loader">
    <div> 
        <img src="@/shared/assets/image/Loader.png" alt="dasd">
    </div>
</div>

</template>

<script>


export default {
    name:'loader',
}

</script>

<style lang="scss">

.loader {

    & img {
        width: 35px;
        height: 35px;
        animation: rotate 3s linear infinite;
        margin-top: 3px;
        margin-right: 3px;
    }

    @keyframes rotate {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
}

</style>