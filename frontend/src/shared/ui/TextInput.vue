<template>
    <div class="ui-text-input">
        <input :type="type" :placeholder="placeholder" :value="value" @input="handleValue">
    </div>
</template>

<script>
export default {
    name: 'uiTextInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        }
    },
    methods: {
        handleValue(event) {
            this.$emit('update', event.target.value);
        }
    }
}
</script>

<style lang="scss">
    .ui-text-input {
        
        input {
            border: 1px solid $primary-background;
            overflow: auto;
            outline: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            resize: none;
            height: 30px;
            font-size: 18px;
            border-radius: 10px;
            padding: 5px;
            width: 100%;
            box-sizing: border-box;
            // width: 100%;
            // max-width: 290px;
        }
    }
</style>