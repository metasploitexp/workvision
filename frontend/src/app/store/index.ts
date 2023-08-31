import { createStore } from 'vuex';
import { MenuModel } from '@/features/MenuList';

export default createStore({
  strict: true,
  modules: {
    [MenuModel.NAMESPACE]: MenuModel.module
  }
})
