<template>
    <div class="header-bar">
        <HeaderLogo /> 
        <HeaderAccount />
    </div>
</template>

<script>
import { HeaderLogo } from '@/features/HeaderLogo';
import { HeaderAccount } from '@/features/HeaderAccount';

export default {
    name: 'headerBar',
    components: {
        HeaderLogo,
        HeaderAccount,
    }
}
</script>

<style lang="scss">
    .header-bar {
        padding: 15px 15px;
        border-bottom: 1px solid $primary-background;
        @include default-flex();
        align-items: center;
        justify-content: space-between;
    }
    
</style>