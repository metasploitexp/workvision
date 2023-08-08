<template>
    <div class="login-form">
        <WrapForm title="Вход">

        </WrapForm>
    </div>
</template>

<script>
import WrapForm from '@/shared/ui/WrapForm.vue';
import TextInput from '@/shared/ui/TextInput.vue';

export default {
    name: 'loginForm',
    components: {
        WrapForm,
        TextInput,
    }
}
</script>

<style lang="scss">
    
</style>