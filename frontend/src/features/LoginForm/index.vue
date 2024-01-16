<template>
    <div class="login-form">
        <WrapForm :title="$t('login.title')" color="#000">
            <div class="login-form__content">
                <div class="login-form__content-mail">
                    <div class="login-form__content-mail__label" :class="{'register-form__content--is-colorized': textColorized === 'mail'}">
                        {{ $t('login.mail') }}
                    </div>
                    <div class="login-form__content-mail__input">
                        <TextInput type="mail" :value="form.email" border="2px solid #0d0d9e" @update="handleUpdate('email', $event)" @onFocus="textColorized = 'mail'" @onBlur="onBlur" />
                    </div>
                    <div class="login-form__content-mail__error" :class="{'login-form__content-mail__error--active': errors.fields.includes('email')}">
                        {{ $t('errors.email') }}
                    </div>
                </div>
                <div class="login-form__content-password">
                    <div class="login-form__content-password__label" :class="{'register-form__content--is-colorized': textColorized === 'password'}">
                        {{ $t('login.password') }}
                    </div>
                    <div class="login-form__content-password__input">
                        <TextInput type="password" :value="form.password" border="2px solid #0d0d9e" @update="handleUpdate('password', $event)" @onFocus="textColorized = 'password'" @onBlur="onBlur" />
                    </div>
                    <div class="login-form__content-password__error" :class="{'login-form__content-password__error--active': errors.fields.includes('password')}">
                        {{ $t('errors.password') }}
                    </div>
                </div>
                <div class="login-form__content-button" @click="handleSubmit">
                    <Btn :text="$t('login.button')" background="#fff" border="2px solid #0d0d9e" color="#000" mw="100px" />
                </div>
                <router-link class="login-form__content-link" :to="{name: 'register'}">{{ $t('login.link') }}</router-link>
            </div>
        </WrapForm>
    </div>
</template>

<script>
import WrapForm from '@/shared/ui/WrapForm.vue';
import TextInput from '@/shared/ui/TextInput.vue';
import Btn from '@/shared/ui/Btn.vue';

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'loginForm',
    components: {
        WrapForm,
        TextInput,
        Btn,
    },
    data() {
        return {
            textColorized: '',
        }
    },
    computed: {
        form: {
            ...mapGetters({get: 'login/form'}),
            ...mapMutations({set: 'login/setFormParam'}),
        },
      errors: {
          ...mapGetters({get: 'login/errors'}),
          ...mapMutations({set: 'login/spliceErrors'}),
      }
    },
    methods: {
        ...mapActions({
            authorization: 'login/authorization',
        }),
        handleUpdate(property, value) {
            this.form = {property, value};
            this.errors = property;
        },
        async handleSubmit() {
            await this.authorization();
        },
        onBlur() {
            this.textColorized = '';
        }
    }
}
</script>

<style lang="scss">
    .login-form {
        @include absolute-centered;
        border: 3px solid $blue;
        border-radius: 15px;
        
        &__content {
            @include default-flex(column, 20px);
            color: $white;

            &-mail, &-password {
                @include default-flex(column, 10px);;
                font-size: 18px;
                color: $black;
                transition: all .3s ease-in;

                &__error {
                    font-size: 14px;
                    color: $red;
                    transition: max-height .5s ease-out;
                    max-height: 0;
                    overflow: hidden;

                    &--active {
                        transition: max-height .5s ease-out;
                        max-height: 50px;
                    }
                }
            }

            &-button {
                margin: 25px auto 0;
                width: fit-content;
                font-size: 18px;
                font-weight: 600;
            }

            &-link {
                text-align: center;
                margin-top: 15px;
                color: $blue;
            }

            &--is-colorized {
                color: $blue;
                transition: all .3s ease-in;
            }
        }
    }
</style>