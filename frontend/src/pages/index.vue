<template>
    <div class="app">
        <HeaderBar />
        <router-view/>
    </div>
</template>

<script>
import { HeaderBar } from '@/features/HeaderBar';
import { authRedirect } from '@/shared/utils/auth-redirect';

export default {
    components: {
        HeaderBar,
    },
    mounted() {
        authRedirect();
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