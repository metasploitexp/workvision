<template>
    <div class="boards-page">
        <DesktopPanel />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';

export default {
    name: 'boardsPage',
    components: {
        DesktopPanel,
    }
}
</script>

<style lang="scss">
    .boards-page {
        padding: 0 20px;
    }
</style>