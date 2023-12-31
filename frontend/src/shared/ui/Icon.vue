<template>
    <div class="ui-icon">
        <svg-icon type="mdi" :path="path"></svg-icon>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseThick } from '@mdi/js';

export default {
    name: 'uiIcon',
    components: {
        SvgIcon
    },
    props: {
        path: {
            type: String,
            default: mdiCloseThick,
        }
    }
}
</script>

<style lang="scss">
    
</style>