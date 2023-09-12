<template>
    <div class="header-account">
        <div class="header-account__action">
            <div class="header-account__action--profile" @click="menuToggle" :class="{ 'is-active': isActive }">
                <img src="@/shared/assets/icons/user/avatar.png">
            </div> 
            <div class="header-account__action--menu" v-if="isActive">
                <h3>Имя Фамилия</h3>
                <ul>
                    <li><img src="@/shared/assets/icons/user/setting.png"><a href="#">{{ $t('account.titles.settings') }}</a></li>
                    <li><img src="@/shared/assets/icons/user/help.png"><a href="#">{{ $t('account.titles.help') }}</a></li>
                    <li><img src="@/shared/assets/icons/user/close.png"><a href="#">{{ $t('account.titles.logout') }}</a></li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        menuToggle() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style lang="scss">
    .header-account {
        background: $white;
        padding: 10px 30px;
        display: flex;
        margin-left: auto;
        
        &__action {
            margin-left: auto;

            &--profile img {
                width: 50px;
                border-radius: 50%;
                cursor: pointer;
                margin-top: 5px;
            }

            &--menu {
                position: absolute;
                background: white;
                width: 200px;
                box-sizing: 0 5px 25px rgba(0,0,0,0.1);
                box-shadow: 4px 4px 15px #2B4F5A;
                border-radius: 15px;
                transition: 0.5%;
                margin-left: -135px;
                margin-top: 15px;
            }

            &--menu.active {
                visibility: visible;
                opacity: 1;
            }

            &--menu::before {
                content: '';
                position: absolute;
                background: white;
                box-shadow: 15px #2B4F5A;
                transform: rotate(45deg);
                top: -10px;
                right: 30px;
                width: 20px;
                height: 20px;
            }

            &--menu h3 {
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-weight: 500;
                line-height: 1.2em;
            }

            &--menu ul li {
                list-style: none;
                padding: 10px 0;
                border-top: 1 px solid rgba(0,0,0,0.05);
                display: flex;
                align-items: center;
            }

            &--menu ul li img {
                max-width: 20px;
                margin-right: 10px;
                opacity: 0.5;
                transition: 0.5s;
            }

            &--menu ul li:hover img {
                opacity: 1;
            }

            &--menu ul li a {
                display: inline-block;
                text-decoration: none;
                font-weight: 500;
                transition: 0.5s;
                color: #555;
            }
        }
    }
</style>