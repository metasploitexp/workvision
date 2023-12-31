<template>
    <div class="exist-workspace">
        <div class="exist-workspace__title">
            {{ workspace.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'existWorkspace',
    props: {
        workspace: {
            type: Object,
            default: () => {},
        }
    }
}
</script>

<style lang="scss">
    .exist-workspace {
        @include flex-centered();
        border: 1px solid $blue;
        border-radius: 10px;
        padding: 50px 35px;
        height: fit-content;
        cursor: pointer;
        user-select: none;
        transition: all .3s ease-in;
        width: 300px;

        &:hover {
            background: $blue;
            color: $white;
            transition: all .3s ease-in;
        }

        &__title {
            font-size: 28px;
            font-weight: 600;
        }
    }
</style>