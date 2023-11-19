<template>
    <div class="login-page">
        <LoginForm :form="form" @update="handleUpdate" @submit="handleSubmit" />
    </div>
</template>

<script>
import { LoginForm } from '@/features/LoginForm';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'loginPage',
    components: {
        LoginForm,
    },
    computed: {
        form: {
            ...mapGetters({get: 'login/form'}),
            ...mapMutations({set: 'login/setFormParam'}),
        },
    },
    methods: {
        ...mapActions({
            authorization: 'login/authorization',
        }),
        handleUpdate(obj) {
            this.form = obj;
        },
        async handleSubmit() {
            await this.authorization();
        }
    }
}
</script>

<style lang="scss">
</style>