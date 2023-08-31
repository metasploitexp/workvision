<template>
    <div class="workspace-page">
        <DesktopPanel />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';

export default {
    name: 'workspacePage',
    components: {
        DesktopPanel,
    }
}
</script>

<style lang="scss">
    .workspace-page {
        padding: 0 20px;
    }
</style>