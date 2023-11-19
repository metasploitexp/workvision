<template>
    <div class="register-page">
        <RegisterForm :form="form" @update="handleUpdate" @submit="handleSubmit" />
    </div>
</template>

<script>
import { RegisterForm } from '@/features/RegisterForm';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'registerPage',
    components: {
        RegisterForm,
    },
    computed: {
        form: {
            ...mapGetters({get: 'register/form'}),
            ...mapMutations({set: 'register/setFormParam'}),
        }
    },
    methods: {
        ...mapActions({
            registration: 'register/registration',
        }),
        handleUpdate(obj) {
            this.form = obj;
        },
        async handleSubmit() {
            await this.registration();
        }
    }
}
</script>

<style lang="scss">
    
</style>