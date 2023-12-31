<template>
    <div class="ui-wrap-form">
        <div class="ui-wrap-form__title">
            {{ title }}
        </div>
        <div class="ui-wrap-form__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'uiWrapForm',
    props: {
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '#fff',
        }
    }
}
</script>

<style lang="scss">
    .ui-wrap-form {
        @include default-flex(column, 30px);
        padding: 30px 50px;
        min-width: 400px;

        &__title {
            font-size: 30px;
            font-weight: 700;
            text-align: center;
            width: 100%;
            color: v-bind(color);
        }
    }
</style>