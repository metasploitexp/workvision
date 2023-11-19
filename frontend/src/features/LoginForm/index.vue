<template>
    <div class="login-form">
        <WrapForm :title="$t('login.title')">
            <div class="login-form__content">
                <div class="login-form__content-mail">
                    <div class="login-form__content-mail__label">
                        {{ $t('login.mail') }}
                    </div>
                    <div class="login-form__content-mail__input">
                        <TextInput type="mail" :value="form.email" @update="handleUpdate('email', $event)" />
                    </div>
                </div>
                <div class="login-form__content-password">
                    <div class="login-form__content-password__label">
                        {{ $t('login.password') }}
                    </div>
                    <div class="login-form__content-password__input">
                        <TextInput type="password" :value="form.password" @update="handleUpdate('password', $event)" />
                    </div>
                </div>
                <div class="login-form__content-button" @click="$emit('submit')">
                    <Btn :text="$t('login.button')" />
                </div>
            </div>
        </WrapForm>
    </div>
</template>

<script>
import WrapForm from '@/shared/ui/WrapForm.vue';
import TextInput from '@/shared/ui/TextInput.vue';
import Btn from '@/shared/ui/Btn.vue';

export default {
    name: 'loginForm',
    components: {
        WrapForm,
        TextInput,
        Btn,
    },
    props: {
        form: {
            type: Object,
            default: () => {},
        }
    },
    methods: {
        handleUpdate(property, $event) {
            this.$emit('update', {property, value: $event})

        }
    }
}
</script>

<style lang="scss">
    .login-form {
        @include absolute-centered;
        
        &__content {
            @include default-flex(column, 20px);

            &-mail, &-password {
                @include default-flex(column, 10px);;
                font-size: 18px;
            }

            &-button {
                margin: 0 auto;
                width: fit-content;
                font-size: 18px;

            }
        }
    }
</style>