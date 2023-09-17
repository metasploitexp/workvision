<template>
    <div class="star" :class="{ active: isActive }" @click="toggleColor"> 
        <SvgIcon type="mdi" :path="path"></SvgIcon>
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
            isActive: false
        };
    },
    methods: {
    toggleColor() {
      this.isActive = !this.isActive;
      console.log('dasdad')
    }
  }
};
</script>	

<style lang='scss'>
.star {
    color: grey;
    &:hover {
        stroke: gold;
    }
    &.active {
        color: gold;
    }
}
</style>