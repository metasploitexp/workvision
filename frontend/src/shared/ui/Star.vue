<template>
    <div class="star" :class="{'active': isActive, 'click': starClicked }" > 
        <SvgIcon @click="toggleColor" type="mdi" :path="path" ></SvgIcon>
    </div>
</template>

<script>

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiStar } from '@mdi/js';

export default {
    name: "star",
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiStar,
            isActive: false,
            starClicked: false
        };
    },
    methods: {
        toggleColor() {
        this.isActive = !this.isActive;
        this.starClicked =!this.starClicked;
        }   
    }
};
</script>	

<style lang='scss'>

.star {
    position: absolute;
    color: grey;
    bottom: 5px;
    right: 8px;
    &:hover {
        stroke: gold;
    }
    &.active {
        color: gold;
        &.click {
        color: gold;
        opacity: 1;
        }
    }
    & svg {
        width: 17px;
        height: 17px;
    }
    
}
</style>