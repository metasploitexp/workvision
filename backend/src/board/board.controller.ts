import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { BoardService } from "./board.service";
import { CreateBoardDto } from "./dto/create-board.dto";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}

    @UseGuards(AccessTokenGuard)
    @Post()
    async create(@Body() boardDto: CreateBoardDto) {
        return this.boardService.createBoard(boardDto);
    }

    @UseGuards(AccessTokenGuard)
    @Get()
    async getUserBoards(@Request() req) {
        return this.boardService.getAllUserBoard(req?.user?.sub);
    }
}