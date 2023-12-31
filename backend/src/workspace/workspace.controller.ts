import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { WorkspaceService } from "./workspace.service";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

@Controller('workspace')
export class WorkspaceController {
    constructor(private workspaceService: WorkspaceService) {}

    @UseGuards(AccessTokenGuard)
    @Post()
    async create(@Body() workspaceDto: CreateWorkspaceDto) {
        return this.workspaceService.createWorkspace(workspaceDto);
    }

    @UseGuards(AccessTokenGuard)
    @Get()
    async getUserWorkspaces(@Request() req) {
        return this.workspaceService.getAllUserWorkspace(req?.user?.sub);
    }
}