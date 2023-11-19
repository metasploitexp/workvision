import { createStore } from 'vuex';
import { MenuModel } from '@/features/MenuList';
import { RegisterModel } from '@/pages/RegisterPage';
import { LoginModel } from '@/pages/LoginPage';

export default createStore({
  strict: true,
  modules: {
    [MenuModel.NAMESPACE]: MenuModel.module,
    [RegisterModel.NAMESPACE]: RegisterModel.module,
    [LoginModel.NAMESPACE]: LoginModel.module,
  }
})
