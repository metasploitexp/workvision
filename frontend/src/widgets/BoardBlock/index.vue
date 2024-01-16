<template>
    <div class="board-block">
        <CreateBoard />
    </div>
</template>

<script>
import { CreateBoard } from '@/features/CreateBoard';

export default {
    name: 'boardBlock',
    components: {
        CreateBoard,
    }
}
</script>