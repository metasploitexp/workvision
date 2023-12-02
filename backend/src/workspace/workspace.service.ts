import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import { Workspace } from "./workspace.model";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";


@Injectable()
export class WorkspaceService {
    constructor (@InjectModel(Workspace) private workspaceRepository: typeof Workspace) {}

    async createWorkspace(dto: CreateWorkspaceDto) {
        const workspace = await this.workspaceRepository.create(dto);
        return workspace;
    }

    async getUserWorkspaces(ids: any) {
        console.log('new ids: ', ids)
        const workspaces = await this.workspaceRepository.findAll({where: {id: ids}});
        return workspaces;
    }

    async getWorkspaceById(id: number) {
        const workspace = await this.workspaceRepository.findOne({where: {id}});
        return workspace;
    }
}