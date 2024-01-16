<template>
    <div class="boards-page">
        <DesktopPanel />
        <BoardBlock />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';
import { BoardBlock } from '@/widgets/BoardBlock';

export default {
    name: 'boardsPage',
    components: {
        DesktopPanel,
        BoardBlock,
    }
}
</script>

<style lang="scss">
    .boards-page {
        padding: 0 20px;
        @include default-flex();
    }
</style>