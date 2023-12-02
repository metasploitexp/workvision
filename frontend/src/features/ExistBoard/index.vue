<template>
    <div class="exist-board" v-on:mouseover="isHovered = true" v-on:mouseout="isHovered = false" >
        <img class='exist-board__bg' src="../ExistBoard/DD-Night-Forest-Scene-45342.svg" alt="" v-bind:class="{ 'darken': isHovered, 'star': isStarHovered }" >
            <span class="exist-board__title" v-bind:class="{ 'darken': isHovered }" v-on:mouseover="isHovered = true" v-on:mouseout="isHovered = false">
                Созданная доска
            </span>
            <Star @click="starClicked = !starClicked" :class="{'star--active': isHovered || starClicked}" />
    </div>
</template>

<script>

import Star from '@/shared/ui/Star.vue';

export default {
    props: ['propsa'],
    name: 'existBoard',
    components: {
        Star,
    },
    data() {
        return {
            isHovered: false,
            starClicked: false,
        };
    },
    methods: {
  }
};
</script>	

<style lang='scss'>
    .exist-board {
        padding: 40px 0px;
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
    .darken {
        filter: brightness(0.95); 
    }
    .star {
        display: none;
        &--active {
        display: block;
        position: absolute;
        }
    }
}
</style>
