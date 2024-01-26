<template>
    <div class="header-account">
        <div class="header-account__name" :class="{'header-account__name--active': isActive}" @click="isActive = !isActive" v-if="name" v-click-outside="handleClose">
            {{ name }}
        </div>
        <div class="header-account__content" v-if="isActive">
            <div class="header-account__content-item" v-for="(tab, index) in menu" :key="index">
                <Icon type="mdi" :path="tab.icon"></Icon>
                <router-link class="header-account__content-item__router" :to="tab.path">{{ $t(`account.${tab.name}`) }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import vClickOutside from 'click-outside-vue3';
import Icon from '@/shared/ui/Icon.vue'
import { mdilLogout } from '@mdi/light-js';
import { mdilSettings } from '@mdi/light-js';

export default {
    name: 'headerAccount',
    directives: {
        clickOutside: vClickOutside.directive
    },
    components: {
        Icon
    },
    data() {
        return {
            isHovered: false,
            isActive: false,
            menu: [
                {
                    path: '/settings',
                    name: 'settings',
                    icon: mdilSettings,
                },
                {
                    path: '/logout',
                    name: 'logout',
                    icon: mdilLogout,   
                },
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
        },
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
                border: 2px solid $light-blue;
                color: $blue;
                transition: all .3s ease-in;
            }
        }

        &__content {
            color: $black;
            position: absolute;
            right: 0;
            margin-top: 20px;
            padding: 15px 25px;
            border: 2px solid $light-blue;
            border-radius: 5px;
            animation: slide-in 0.5s linear;

            :hover {
                    fill: $blue;
                    color: $blue;
                }
            
            &-item {
                color: $black;
                display:flex;
                align-items: center;

                :hover {
                    fill: $blue;
                    color: $blue;
                }

                &__router {
                    color: $black;
                    text-decoration: none;
                    font-size: 18px;
                    margin-left: 5px;
                }
            }
            
            @keyframes slide-in {
                0% {
                    top: -30px; 
                }
                100% {
                    top: 60px; 
                }   
            }
        }
    }
</style>