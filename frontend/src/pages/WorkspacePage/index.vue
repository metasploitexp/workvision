<template>
    <div class="workspace-page">
        <DesktopPanel />
        <WorkspaceBlock />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';
import { WorkspaceBlock } from '@/widgets/WorkspaceBlock';

export default {
    name: 'workspacePage',
    components: {
        DesktopPanel,
        WorkspaceBlock
    }
}
</script>

<style lang="scss">
    .workspace-page {
        padding: 0 20px;
        @include default-flex();
    }
</style>