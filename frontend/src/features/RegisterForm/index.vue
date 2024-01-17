<template>
    <div class="register-form">
        <WrapForm :title="$t('register.title')" color="#000">
            <div class="register-form__content">
                <div class="register-form__content-mail">
                    <div class="register-form__content-mail__label" :class="{'register-form__content--is-colorized': textColorized === 'mail'}">
                        {{ $t('register.mail') }}
                    </div>
                    <div class="register-form__content-mail__input">
                        <TextInput type="mail" :value="form.email" border="2px solid #0d0d9e" @update="handleUpdate('email', $event)" @onFocus="textColorized = 'mail'" @onBlur="onBlur" />
                    </div>
                    <div class="register-form__content-mail__error" :class="{'register-form__content-mail__error--active': errors.fields.includes('email')}">
                        {{ $t('errors.email') }}
                    </div>
                </div>
                <div class="register-form__content-name">
                    <div class="register-form__content-name__label" :class="{'register-form__content--is-colorized': textColorized === 'name'}">
                        {{ $t('register.name') }}
                    </div>
                    <div class="register-form__content-name__input">
                        <TextInput type="text" :value="form.name" border="2px solid #0d0d9e" @update="handleUpdate('name', $event)" @onFocus="textColorized = 'name'" @onBlur="onBlur" />
                    </div>
                    <div class="register-form__content-mail__error" :class="{'register-form__content-mail__error--active': errors.fields.includes('name')}">
                        {{ $t('errors.name') }}
                    </div>
                </div>
                <div class="register-form__content-password">
                    <div class="register-form__content-password__label" :class="{'register-form__content--is-colorized': textColorized === 'password'}">
                        {{ $t('register.password') }}
                    </div>
                    <div class="register-form__content-password__input">
                        <TextInput type="password" :value="form.password" border="2px solid #0d0d9e" @update="handleUpdate('password', $event)" @onFocus="textColorized = 'password'" @onBlur="onBlur" />
                    </div>
                    <div class="register-form__content-mail__error" :class="{'register-form__content-mail__error--active': errors.fields.includes('password')}">
                        {{ $t('errors.password') }}
                    </div>
                </div>
                <div class="register-form__content-repeat">
                    <div class="register-form__content-repeat__label" :class="{'register-form__content--is-colorized': textColorized === 'repeat'}">
                        {{ $t('register.repeat') }}
                    </div>
                    <div class="register-form__content-repeat__input">
                        <TextInput type="password" :value="form.repeat" border="2px solid #0d0d9e" @update="handleUpdate('repeat', $event)" @onFocus="textColorized = 'repeat'" @onBlur="onBlur" />
                    </div>
                    <div class="register-form__content-mail__error" :class="{'register-form__content-mail__error--active': errors.fields.includes('password')}">
                        {{ $t('errors.password') }}
                    </div>
                </div>
                <div class="register-form__content-button" @click="handleSubmit">
                    <Btn :text="$t('register.button')" background="#fff" border="2px solid #0d0d9e" color="#000" mw="100px" />
                </div>
                <router-link class="register-form__content-link" :to="{name: 'login'}">{{ $t('register.link') }}</router-link>
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
    name: 'registerForm',
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
            ...mapGetters({get: 'register/form'}),
            ...mapMutations({set: 'register/setFormParam'}),
        },
        errors: {
          ...mapGetters({get: 'register/errors'}),
          ...mapMutations({set: 'register/spliceErrors'}),
      },
    },
    methods: {
        ...mapActions({
            registration: 'register/registration',
        }),
        handleUpdate(property, value) {
            this.form = {property, value};
            this.errors = property;
        },
        async handleSubmit() {
            await this.registration();
        },
        onBlur() {
            this.textColorized = '';
        }
    }
}
</script>

<style lang="scss">
    .register-form {
        @include absolute-centered;
        border: 3px solid $blue;
        border-radius: 15px;
        
        &__content {
            @include default-flex(column, 20px);

            &-mail , &-name, &-password, &-repeat {
                @include default-flex(column, 10px);;
                font-size: 18px;
                transition: all .3s ease-in;
                &__error {
                    font-size: 14px;
                    color: $red;
                    transition: max-height .3s ease-out;
                    max-height: 0;
                    overflow: hidden;
                    height: fit-content;

                    &--active {
                        transition: max-height .3s ease-out;
                        max-height: 50px;
                    }
                }
            }
            

            &-button {
                margin: 0 auto;
                width: fit-content;
                font-size: 18px;

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