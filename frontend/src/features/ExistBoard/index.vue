<template>
    <div class="exist-board">
        <div class="exist-board__bg">
                <img src="../ExistBoard/DD-Night-Forest-Scene-45342.svg" alt="">
            <span class="exist-board__card">
            Созданная доска
            </span>
            <div class="exist-board__hover" :class="{'click': starClicked }">
                <div class="exist-board__bg">
                    <SvgIcon @click="toggleColor" />
                </div>
            </div>
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
    data() {
        return {
            starClicked: false,
        };
    },
    methods: {
    toggleColor() {
      this.starClicked =!this.starClicked;
    }
  }
};
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
        &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1); 
            opacity: 0;
            transition: opacity 0.5s;
            content: '';
            z-index: 5;
    }
    &:hover:before {
      opacity: 0.9;
    }

    .exist-board__card {
        position: absolute;
        top: 12px;
        left: 12px;
        color: $white;
        font-weight: bold;
        opacity: 1;
        &:hover {
            opacity: 1;
        }
    }
    .exist-board__hover {
        opacity: 0;
        &:hover {
            opacity: 1;
        }
        &.click {
        opacity: 1;
    }
}
    .exist-board__bg {
        position: absolute;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: 5;
    }
}
</style>
