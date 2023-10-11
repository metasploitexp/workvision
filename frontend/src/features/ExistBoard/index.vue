<template>
        <div class="exist-board">
        <img class='exist-board__bg' src="../ExistBoard/DD-Night-Forest-Scene-45342.svg" alt="" v-bind:class="{ 'darken': isHovered }" v-on:mouseover="isHovered = true" v-on:mouseout="isHovered = false">
            <span class="exist-board__title">
                Созданная доска
            </span>
            <div class="overlay" v-if="isHovered">
                <Star class='star' />
            </div>
        </div>
</template>

<script>

import Star from '@/shared/ui/Star.vue';

export default {
    name: 'existBoard',
    components: {
        Star,
    },
    data() {
        return {
            isHovered: false,
            isStarClicked: false
        };
    },
    methods: {
    toggleColor() {
      this.isStarClicked =!this.iSstarClicked;
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

    .exist-board__title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: $white;
        font-weight: bold;
        opacity: 1;
    }
    .exist-board__bg {
    position: absolute;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
    .overlay {
        position: absolute;
        top: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .darken {
        filter: brightness(0.95); 
    }
    .star {
        z-index: 5;
        position: absolute;
        right: 7px;
        bottom: 3px;
        transition: color 0.3s;
        color: grey;
        &:hover {
        stroke: gold;
        }
        &.active {
        color: gold;
        }
        &.click {
        opacity: 1;
        &:hover {
            color: grey;
        }
        }
    }
}
</style>
