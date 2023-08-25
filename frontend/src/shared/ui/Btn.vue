<template>
    <div class="ui-btn" @click="$emit('handleButton')">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'uiBtn',
    props: {
        text: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: 'fit-content',
        },
        fs: {
            type: String,
            default: '18px',
        },
        color: {
            type: String,
            default: '#fff',
        },
        background: {
            type: String,
            default: '#000',
        },
        padding: {
            type: String,
            default: '10px 20px',
        },
        br: {
            type: String,
            default: '10px',
        }
    }
}
</script>

<style lang="scss">
    .ui-btn {
        width: v-bind(width);
        font-size: v-bind(fs);
        color: v-bind(color);
        background: v-bind(background);
        padding: v-bind(padding);
        border-radius: v-bind(br);
        user-select: none;
        cursor: pointer;
    }
</style>