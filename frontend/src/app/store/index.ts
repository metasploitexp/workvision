import { createStore } from 'vuex';
import { MenuModel } from '@/features/MenuList';
import { RegisterModel } from '@/features/RegisterForm';
import { LoginModel } from '@/features/LoginForm';
import { UserModel } from '@/entities/User';
import { WorkspaceModel } from '@/entities/Workspace';
import { CreateWorkspaceModel } from '@/features/CreateWorkspaceForm';

export default createStore({
  strict: true,
  modules: {
    [MenuModel.NAMESPACE]: MenuModel.module,
    [RegisterModel.NAMESPACE]: RegisterModel.module,
    [LoginModel.NAMESPACE]: LoginModel.module,
    [UserModel.NAMESPACE]: UserModel.module,
    [WorkspaceModel.NAMESPACE]: WorkspaceModel.module,
    [CreateWorkspaceModel.NAMESPACE]: CreateWorkspaceModel.module,
  }
})
