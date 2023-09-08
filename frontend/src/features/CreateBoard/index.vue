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
        padding: 15px;
        margin-left: 25px;
        color: $white;
        background-color: $primary-background;
        border: 2px solid $border;
        width: 100%;
        max-width: 200px;
        height: 100%;
        max-height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        &:hover {
            color: $hover;
            background-color: $hover-background;
            cursor: pointer;
            opacity: 1;
            transition: 600ms;
        }
    }
</style>