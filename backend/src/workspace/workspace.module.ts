import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceService } from './workspace.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Workspace } from "./workspace.model";

@Module({
    controllers: [WorkspaceController],
    providers: [
        WorkspaceService
    ],
    imports: [
        SequelizeModule.forFeature([Workspace]),
        forwardRef(() => UsersModule),
    ],
    exports: [
        WorkspaceService,
    ],
})
export class WorkspaceModule {}