<template>
    <div class="header-logo">
        <Logo @handleClick="handleClick" /> 
    </div>
</template>

<script>
import Logo from '@/shared/ui/Logo.vue';

export default {
    name: 'headerLogo',
    components: {
        Logo,
    },
    methods: {
        handleClick() {
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
    .header-bar {
        
    }
    
</style>