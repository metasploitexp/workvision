<template>
    <div class='exist-board' > 
        <span>Созданная доска</span><img src="../ExistBoard/free-icon-favorite-2550223.svg" alt="">
    </div>
</template>

<script>

</script>	

<style lang='scss'>
    .exist-board {
        padding: 45px 20px;
        margin-left: 25px;
        color: $white;
        font-weight: bold;
        background-image: url('./DD Night Forest Scene 45342.svg');
        background-size: cover;
        background-repeat: no-repeat;
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
        position: relative;
        display: flex;
        justify-content: space-between;
        & span {
            top: 12px;
            left: 10px;
            position: absolute;
        }
        & img {
            width: 15px;
            height: 15px;
            opacity: 0;
        }
        &:hover {
            cursor: pointer;
            opacity: 0.9;
            transition: 600ms;
            & img {
            opacity: 1;
            position: absolute;
            right: 20px;
            bottom: 12px;
            filter: invert(100%) sepia(0%) saturate(7494%) hue-rotate(217deg) brightness(101%) contrast(101%);
                &:hover {
                    width: 16px;
                    height: 16px;
                    transition: filter 0.1s ease-in-out;
                    filter: invert(87%) sepia(26%) saturate(5949%) hue-rotate(1deg) brightness(92%) contrast(98%);
                }
            }
        }
    }
</style>
