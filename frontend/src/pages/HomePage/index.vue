<template>
    <div class="home-page">
        <DesktopPanel />
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';

export default {
    name: 'homePage',
    components: {
        DesktopPanel,
    }
}
</script>

<style lang="scss">
    .home-page {
        padding: 0 20px;
    }
</style>
