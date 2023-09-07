<template>
    <div class='board-card' >Create new board</div>
</template>

<script>

</script>

<style lang='scss'>
    .board-card {
        padding: 15px;
        color: white;
        background-color: grey;
        border: 1px solid green;
        position: absolute;
        top: 100px;
        left: 250px;
        width: 200px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        &:hover {
            color: rgb(72, 68, 63);
            background-color: #aba5a5;
            cursor: pointer;
            opacity: 1;
            transition: 600ms;
        }
    }
</style>