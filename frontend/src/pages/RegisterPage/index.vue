<template>
    <div class="register-page">
        <RegisterForm />
    </div>
</template>

<script>
import { RegisterForm } from '@/features/RegisterForm';

export default {
    name: 'registerPage',
    components: {
        RegisterForm,
    }
}
</script>

<style lang="scss">
    .register-page {
        @include default-page;
    }
</style>