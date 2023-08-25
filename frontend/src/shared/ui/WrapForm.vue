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
        }
    }
}
</script>

<style lang="scss">
    .ui-wrap-form {
        @include default-flex(column, 30px);
        padding: 20px;
        border-radius: 10px;
        background: $white;
        min-width: 300px;

        &__title {
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            width: 100%;
        }
    }
</style>