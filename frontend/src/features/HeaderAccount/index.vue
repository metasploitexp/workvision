<template>
    <div class="header-account">
        <div class="header-account__name" :class="{'header-account__name--active': isActive}" @click="isActive = !isActive" v-if="name" v-click-outside="handleClose">
            {{ name }}
        </div>
        <div class="header-account__content" v-if="isActive">
            <div class="header-account__content-item" v-for="(tab, index) in menu" :key="index" @click="handleClose">
                <router-link :to="tab.path">{{ tab.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3';

export default {
    name: 'headerAccount',
    directives: {
        clickOutside: vClickOutside.directive
    },
    data() {
        return {
            isActive: false,
            menu: [
                {
                    path: '/settings',
                    name: 'settings'
                },
                {
                    path: '/logout',
                    name: 'logout'
                }
            ]
        }
    },
    computed: {
        name() {
            return this.$store.getters['user/getName'].substring(0, 1).toUpperCase();
        }
    },
    methods: {
        handleClose() {
            this.isActive = false;
        }
    }
}
</script>

<style lang="scss">
    .header-account {
        position: relative;

        &__name {
            border: 2px solid $primary-background;
            transition: all .3s ease-in;
            text-align: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            padding: 10px;
            font-size: 24px;
            font-weight: 600;
            user-select: none;
            cursor: pointer;
    
            &:hover, &--active {
                border: 2px solid $blue;
                color: $blue;
                transition: all .3s ease-in;
            }
        }

        &__content {
            position: absolute;
            right: 0;
            margin-top: 10px;
            background: $primary-background;
            padding: 10px 20px;
        }
    }
</style>