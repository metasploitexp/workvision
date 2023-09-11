<template>
    <div class='create-board' >
        {{ $t('board.create') }}  
    </div>
</template>

<script>

export default {
    name: 'createBoard',
}
</script>

<style lang='scss'>
    .create-board {
        padding: 45px 20px;
        margin-left: 25px;
        color: $black;
        background-color: $primary-background;
        width: 100%;
        max-width: 320px;
        min-height: 20px;
        height: 100%;
        justify-content: center;
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
            color: $black;
            background-color: $hover-background;
            cursor: pointer;
            opacity: 1;
            transition: 600ms;
        }
    }
</style>