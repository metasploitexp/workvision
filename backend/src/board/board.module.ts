import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Board } from "./board.model";
import { BoardUsers } from './board-users.model';

@Module({
    controllers: [BoardController],
    providers: [
        BoardService
    ],
    imports: [
        SequelizeModule.forFeature([Board]),
        SequelizeModule.forFeature([BoardUsers]),
        forwardRef(() => UsersModule),
    ],
    exports: [
        BoardService,
    ],
})
export class BoardModule {}