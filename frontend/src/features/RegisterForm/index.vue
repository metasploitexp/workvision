<template>
    <div class="register-form">
        <WrapForm :title="$t('register.title')">
            <div class="register-form__content">
                <div class="register-form__content-mail">
                    <div class="register-form__content-mail__label">
                        {{ $t('register.mail') }}
                    </div>
                    <div class="register-form__content-mail__input">
                        <TextInput type="mail" />
                    </div>
                </div>
                <div class="register-form__content-password">
                    <div class="register-form__content-password__label">
                        {{ $t('register.password') }}
                    </div>
                    <div class="register-form__content-password__input">
                        <TextInput type="password" />
                    </div>
                </div>
                <div class="register-form__content-repeat">
                    <div class="register-form__content-repeat__label">
                        {{ $t('register.repeat') }}
                    </div>
                    <div class="register-form__content-repeat__input">
                        <TextInput type="password" />
                    </div>
                </div>
                <div class="register-form__content-button">
                    <Btn :text="$t('register.button')" />
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
    name: 'registerForm',
    components: {
        WrapForm,
        TextInput,
        Btn,
    }
}
</script>

<style lang="scss">
    .register-form {
        @include absolute-centered;
        
        &__content {
            @include default-flex(column, 20px);

            &-mail, &-password, &-repeat {
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