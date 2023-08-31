export const NAMESPACE = 'menu';

const IS_NAMESPACED = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        tabs: [
            {
                label: 'home',
                path: '/',
                pages: [],
            },
            {
                label: 'workspaces',
                perm: 'can_view_workspace',
                path: '/workspaces',
                pages: [],
            },
            {
                label: 'boards',
                perm: 'can_view_boards',
                path: '/boards',
                pages: [],
            }
        ],
        selected: '',
    },
    getters: {
        tabs: (state: any) => state.tabs,
        selected: (state: any) => state.selected,
    },
    mutations: {
        setSelected: (state: any, value: string) => state.selected = value,
    },
    actions: {

    }
}
