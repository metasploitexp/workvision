import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { AuthModule } from "src/auth/auth.module";
import { WorkspaceModule } from "src/workspace/workspace.module";


@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User]),
        forwardRef(() => AuthModule),
        forwardRef(() => WorkspaceModule),
    ],
    exports: [UsersService],
})

export class UsersModule {}