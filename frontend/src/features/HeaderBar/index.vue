<template>
    <div class="header-bar">
        <Logo /> 
        <HeaderAccount />
    </div>
</template>

<script>
import Logo from '@/shared/ui/Logo.vue';
import HeaderAccount from '@/entities/HeaderAccount';

export default {
    name: 'headerBar',
    components: {
        Logo,
        HeaderAccount,
    }
}
</script>

<style lang="scss">
    .header-bar {
        display: flex;
        // padding: 15px 20px;
        border-bottom: 1px solid $primary-background;
    }
</style>
