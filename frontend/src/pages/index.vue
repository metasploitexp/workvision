<template>
    <div class="app">
        <HeaderBar />
        <router-view/>
    </div>
</template>

<script>
import { HeaderBar } from '@/features/HeaderBar';

export default {
    components: {
        HeaderBar,
    }
}
</script>

<style lang="scss">
    .app {
        @include default-page;
        display: flex;
        flex-flow: column;
        gap: 30px;
    }
</style>