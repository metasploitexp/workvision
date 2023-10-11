<template>
    <div class="star" > 
        <SvgIcon @click="toggleColor" type="mdi" :path="path"></SvgIcon>
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
        };
    },
    methods: {
  }
};
</script>	

<style lang='scss'>

.star {
    & svg {
        width: 17px;
        height: 17px;
        color: rgb(82, 82, 82);
        &:hover {
        stroke: gold;
        }
    }
}
</style>