<template>
    <div class="app">
        <HeaderBar />
        <router-view/>
    </div>
</template>

<script>
import { HeaderBar } from '@/widgets/HeaderBar';
import { authRedirect } from '@/shared/utils/auth-redirect';
import { axiosHeaders } from '@/shared/utils/axios-headers';

import { mapActions } from 'vuex';

export default {
    components: {
        HeaderBar,
    },
    methods: {
        ...mapActions({
            fetchInit: 'user/fetchInit',
        }),
    },
    async mounted() {
        const needData = authRedirect();
        if (needData.success) {
            axiosHeaders(needData.token);
            await this.fetchInit();
        } else {
            this.$store.commit('user/setIsLogin', false);
        }
    }
}
</script>

<style lang="scss">
    .app {
        @include default-page;
        display: flex;
        flex-flow: column;
        gap: 30px;
    }
</style>