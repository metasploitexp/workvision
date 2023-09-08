<template>
    <div class="boards-page">
        <DesktopPanel />
        <ExistBoard/>
        <CreateBoard />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';
import { ExistBoard } from '@/features/ExistBoard';
import { CreateBoard } from '@/features/CreateBoard';

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