<template>
    <div class="exist-board">
        <div class="exist-board__img">
            <SvgIcon/>
            <img src="../ExistBoard/DD-Night-Forest-Scene-45342.svg" alt="">
        </div>
        <div class="exist-board__name">
            Созданная доска
        </div>
    </div>
</template>

<script>

import SvgIcon from '@/shared/ui/Star.vue';
export default {

    name: 'existBoard',
    components: {
        SvgIcon,
    },
}
</script>	

<style lang='scss'>
    .exist-board {
        padding: 50px 0px;
        margin-left: 25px;
        max-width: 320px;
        max-height: 100px;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
    .exist-board__name {
        position: absolute;
        top: 12px;
        left: 12px;
        color: $black;
        font-weight: bold;
        opacity: 1;
    }
    .star {
        position: absolute;
        bottom: 12px;
        right: 12px;
    }
    .exist-board__img {
        position: absolute;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
            &:hover {
                opacity: 0.9;
                transition: opacity 0.3s ease-in-out;
            }
    }
}
</style>
