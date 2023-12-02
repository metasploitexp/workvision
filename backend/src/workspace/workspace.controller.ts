import { Body, Controller, Post } from "@nestjs/common";
import { WorkspaceService } from "./workspace.service";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";


@Controller('workspace')
export class WorkspaceController {
    constructor(private workspaceService: WorkspaceService) {}

    @Post()
    async create(@Body() workspaceDto: CreateWorkspaceDto) {
        return this.workspaceService.createWorkspace(workspaceDto);
    }
}