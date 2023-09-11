<template>
    <div class="boards-page">
        <DesktopPanel />
        <CreateBoard />
        <ExistBoard/>
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';
import { CreateBoard } from '@/features/CreateBoard';
import { ExistBoard } from '@/features/ExistBoard';

export default {
    name: 'boardsPage',
    components: {
        DesktopPanel,
        ExistBoard,
        CreateBoard
    }
}
</script>

<style lang="scss">
    .boards-page {
        padding: 0 20px;
        display: flex;
    }
</style>