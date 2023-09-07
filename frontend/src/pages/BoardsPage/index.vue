<template>
    <div class="boards-page">
        <DesktopPanel />
        <CreateBoard />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';
import { CreateBoard } from '@/features/CreateBoard';

export default {
    name: 'boardsPage',
    components: {
        DesktopPanel,
        CreateBoard
    }
}
</script>

<style lang="scss">
    .boards-page {
        padding: 0 20px;
    }
</style>