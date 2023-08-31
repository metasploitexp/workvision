<template>
    <div class="desktop-panel">
        <MenuList />
    </div>
</template>

<script>
import { MenuList } from '@/features/MenuList';

export default {
    name: 'desktopPanel',
    components: {
        MenuList,
    }
}
</script>

<style lang="scss">
    .desktop-panel {
        width: fit-content;
        min-width: 200px;
        min-height: 500px;
        border-right: 1px solid $primary-background;
    }
</style>