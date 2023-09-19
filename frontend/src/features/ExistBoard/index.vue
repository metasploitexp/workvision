<template>
    <div class="exist-board">
        <div class="exist-board__card">
            Созданная доска
        </div>
        
        <div class="exist-board__bg">
            <img src="../ExistBoard/DD-Night-Forest-Scene-45342.svg" alt="">
        </div>
        <div class="exist-board__hover" :class="{'click': starClicked }">
            <div class="exist-board__bg">
                <img src="../ExistBoard/DD-Night-Forest-Scene-45342.svg" alt="">
                <SvgIcon @click="toggleColor" />
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

    .exist-board__card {
        position: absolute;
        top: 12px;
        left: 12px;
        color: $white;
        font-weight: bold;
        z-index: 4;
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
    }
}
</style>
