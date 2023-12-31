<template>
    <div class="create-workspace-form">
        <div class="create-workspace-form__content">
            <WrapForm :title="$t('workspace.create')" color="#000">
                <div class="create-workspace-form__content-name">
                    <div class="create-workspace-form__content-name__label" :class="{'create-workspace-form__content--is-colorized': textColorized === 'name'}">
                        {{ $t('workspace.name') }}
                    </div>
                    <div class="create-workspace-form__content-name__input">
                        <TextInput type="text" :value="form.name" border="2px solid #0d0d9e" @update="handleUpdate('name', $event)" @onFocus="textColorized = 'name'" @onBlur="onBlur" />
                    </div>
                </div>
                <div class="create-workspace-form__content-button">
                    <Btn :text="$t('workspace.confirm')" background="#fff" border="2px solid #0d0d9e" color="#000" mw="100px" @click="handleSubmit" />
                    <Btn :text="$t('workspace.cancel')" background="#fff" border="2px solid #950527" hb="#950527" color="#000" mw="100px" @click="cancel" />
                </div>
            </WrapForm>
        </div>
    </div>
</template>

<script>
import WrapForm from '@/shared/ui/WrapForm.vue';
import TextInput from '@/shared/ui/TextInput.vue';
import Btn from '@/shared/ui/Btn.vue';

import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'createWorkspaceForm',
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
            ...mapGetters({get: 'create-workspace/form'}),
            ...mapMutations({set: 'create-workspace/setFormParam'}),
        }
    },
    methods: {
        ...mapActions({
            create: 'create-workspace/create',
        }),
        handleUpdate(property, value) {
            this.form = {property, value};
        },
        onBlur() {
            this.textColorized = '';
        },
        async handleSubmit() {
            const res = await this.create();
            if (res) {
                this.cancel();
            }
        },
        cancel() {
            this.handleUpdate('name', '');
            this.$emit('cancel');
        }
    }
}
</script>

<style lang="scss">
    .create-workspace-form {
        @include flex-centered();
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: $black;
        opacity: .6;

        &__content {
            @include default-flex(column, 20px);
            border: 3px solid $blue;
            border-radius: 15px;
            background: $primary-background;
            position: relative;

            .ui-icon {
                cursor: pointer;
                position: absolute;
                top: 20px;
                right: 20px;
                transition: all .3s ease-in;

                &:hover {
                    color: $blue;
                    transition: all .3s ease-in;
                }
                
                svg {
                    width: 30px;
                    height: 30px;
                }
            }

            &-name {
                @include default-flex(column, 10px);;
                font-size: 18px;
                transition: all .3s ease-in;
            }

            &-button {
                margin: 30px auto 0;
                width: fit-content;
                font-size: 18px;
                @include default-flex();
            }

            &--is-colorized {
                color: $blue;
                transition: all .3s ease-in;
            }
        }
    }
</style>