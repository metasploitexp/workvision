<template>
    <div class="workspace-block">
        <ExistWorkspace v-for="workspace, index in workspaces" :key="index" :workspace="workspace" />
        <CreateWorkspace @handleCreate="createModal = true" />
        <CreateWorkspaceForm v-if="createModal" @cancel="createModal = false" />
    </div>
</template>

<script>
import { CreateWorkspace } from '@/features/CreateWorkspace';
import { CreateWorkspaceForm } from '@/features/CreateWorkspaceForm';
import { ExistWorkspace } from '@/features/ExistWorkspace';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'workspaceBlock',
    components: {
        CreateWorkspace,
        CreateWorkspaceForm,
        ExistWorkspace,
    },
    computed: {
        workspaces: {
            ...mapGetters({get: 'workspace/workspaces'}),
            ...mapMutations({set: 'workspace/setWorkspaces'}),
        }
    },
    data() {
        return {
            createModal: false,
        }
    },
    methods: {
        ...mapActions({
            fetchWorkspaces: 'workspace/fetchWorkspaces',
        })
    },
    mounted() {
        this.fetchWorkspaces();
    }
}
</script>

<style lang="scss">
    .workspace-block {
        @include default-flex(row wrap, 20px);
    }
</style>