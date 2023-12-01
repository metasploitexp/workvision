import { createStore } from 'vuex';
import { MenuModel } from '@/features/MenuList';
import { RegisterModel } from '@/features/RegisterForm';
import { LoginModel } from '@/features/LoginForm';
import { UserModel } from '@/entities/User';

export default createStore({
  strict: true,
  modules: {
    [MenuModel.NAMESPACE]: MenuModel.module,
    [RegisterModel.NAMESPACE]: RegisterModel.module,
    [LoginModel.NAMESPACE]: LoginModel.module,
    [UserModel.NAMESPACE]: UserModel.module,
  }
})
