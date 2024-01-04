<script>
import { remove } from '@/shared/utils/local-storage';

export default {
    name: 'logoutPage',
    created() {
        this.$store.commit('user/setIsLogin', false);
        remove('refresh_token', '');
        remove('access_token', '');
        this.$router.push('/login');
    }
}
</script>

<template></template>