<template>
    <div class='create-board' >
        <span>
            {{ $t('board.create') }}
        </span>  
    </div>
</template>

<script>

export default {
    name: 'createBoard',
}
</script>

<style lang='scss'>

    .create-board {
        padding: 40px 0px;
        margin: 0 25px;
        color: $black;
        background-color: $primary-background;
        width: 100%;
        height: 100%;
        max-width: 320px;
        max-height: 100px;
        justify-content: center;
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        & span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        
        &:hover {
            color: $black;
            background-color: $hover-background;
            cursor: pointer;
            opacity: 1;
            transition: 600ms;
        }
    }
</style>