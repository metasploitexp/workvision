<template>
    <div class="header-bar">
        <Logo /> 
    </div>
</template>

<script>
import Logo from '@/shared/ui/Logo.vue';

export default {
    name: 'headerBar',
    components: {
        Logo,
    }
}
</script>

<style lang="scss">
.header-bar {
    padding: 15px 20px;
    border-bottom: 1px solid $primary-background;
}
</style>