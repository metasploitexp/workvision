import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import { Workspace } from "./workspace.model";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";
import { WorkspaceUsers } from "./workspace-users.model";
import { CreateWorkspaceUsersDto } from "./dto/create-workspace-users.dto";


@Injectable()
export class WorkspaceService {
    constructor (@InjectModel(Workspace) private workspaceRepository: typeof Workspace, 
        @InjectModel(WorkspaceUsers) private workspaceUsersRepository: typeof WorkspaceUsers) {}

    async createWorkspace(dto: CreateWorkspaceDto) {
        const workspace = await this.workspaceRepository.create(dto);
        await this.createWorkspaceUsers({user_id: workspace.owner_id, workspace_id: workspace.id});
        return {
            id: workspace.id,
            name: workspace.name,
            owner_id: workspace.owner_id,
        };
    }

    async createWorkspaceUsers(dto: CreateWorkspaceUsersDto) {
        const workspace = await this.workspaceUsersRepository.create(dto);
        return workspace;
    }

    async getWorkspaceById(id: number) {
        const workspace = await this.workspaceRepository.findOne({where: {id}});
        return workspace;
    }

    async getAllUserWorkspace(id: number) {
        const userWorkspacesId: Array<any> = await this.getUserWorkspacesId(id) || [];
        const workspacesId = userWorkspacesId.map(x => x.workspace_id)

        const workspaces = await this.workspaceRepository.findAll({where: {id: workspacesId}, include: {all: true}});
        return workspaces;
    }

    async getUserWorkspacesId(id: number) {
        return await this.workspaceUsersRepository.findAll({where: {user_id: id}, attributes: ['workspace_id'], include: {all: true}});
    }
}