<template>
    <div class="menu-list">
        <div class="menu-list__tabs" v-for="tab in tabs" :class="{'menu-list__tabs is-active': selected === tab.label}" @click="toggleMenu(tab)">
            {{ $t(`menu.${tab.label}`) }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'menuList',
    computed: {
        ...mapGetters({
            tabs: 'menu/tabs',
        }),
        selected: {
            ...mapGetters({get: 'menu/selected'}),
            ...mapMutations({set: 'menu/setSelected'}),
        }
    },
    methods: {
        toggleMenu(tab) {
            this.$router.push(tab.path)
        }
    },
    mounted() {
        this.selected = this.$route.name;
    }
}
</script>

<style lang="scss">
    .menu-list {
        @include default-flex(column, 15px);

        &__tabs {
            font-size: 20px;
            font-weight: 600;
            cursor: pointer;
            user-select: none;
            opacity: .6;
            transition: all .3s;

            &:hover {
                opacity: 1;
                transition: all .3s;
            }

            &.is-active {
                opacity: 1;
            }
        }
    }
</style>