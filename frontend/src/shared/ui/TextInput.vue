<template>
    <div class="ui-text-input">
        <input :type="type" :placeholder="placeholder" :value="value" @input="handleValue" @focus="$emit('onFocus')" @blur="$emit('onBlur')">
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
        },
        border: {
            type: String,
            default: 'none',
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
            // border: v-bind(border);
            border: 2px solid $primary-background;
            // background: transparent;
            // color: #fff;
            overflow: auto;
            outline: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            resize: none;
            height: 30px;
            font-size: 18px;
            border-radius: 10px;
            padding: 20px 15px;
            width: 100%;
            box-sizing: border-box;

            transition: all .3s ease-in;

            &:focus {
                border: v-bind(border);
                transition: all .3s ease-in;
            }
        }
    }
</style>