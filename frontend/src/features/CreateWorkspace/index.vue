<template>
    <div class="create-workspace" @click="$emit('handleCreate')">
        <div class="create-workspace__title">
            {{ $t('workspace.create') }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'createWorkspace',
}
</script>

<style lang="scss">
    .create-workspace {
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
            background: $light-blue;
            color: $white;
            transition: all .3s ease-in;
        }

        &__title {
            font-size: 28px;
            font-weight: 600;
        }
    }
</style>