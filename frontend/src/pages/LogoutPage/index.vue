<script>
import { remove } from '@/shared/utils/local-storage';

export default {
    name: 'logoutPage',
    created() {
        this.$store.dispatch('user/handleExit');
        remove('refresh_token', '');
        remove('access_token', '');
        this.$router.push('/login');
    }
}
</script>

<template></template>