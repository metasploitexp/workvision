<template>
    <div class='exist-board' > 
        Созданная доска 
    </div>
</template>

<script>

</script>	

<style lang='scss'>
    .exist-board {
        padding: 40px 20px;
        margin-left: 25px;
        color: $white;
        background-color: $exist-board;
        width: 100%;
        max-width: 200px;
        height: 100%;
        justify-content: center;
        text-align: center;
        border-radius: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
            color: $hover;
            background-color: $hover-background;
            cursor: pointer;
            opacity: 1;
            transition: 600ms;
        }
    }
</style>