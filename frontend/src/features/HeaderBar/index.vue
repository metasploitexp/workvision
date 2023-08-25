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
        background: $white;
        padding: 15px;
    }
</style>