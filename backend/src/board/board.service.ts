import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import { Board } from "./board.model";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardUsers } from "./board-users.model";
import { CreateBoardUsersDto } from "./dto/create-board-users.dto";


@Injectable()
export class BoardService {
    constructor (@InjectModel(Board) private boardRepository: typeof Board, 
        @InjectModel(BoardUsers) private boardUsersRepository: typeof BoardUsers) {}

    async createBoard(dto: CreateBoardDto) {
        const board = await this.boardRepository.create(dto);
        const favorite = dto.favorite || false;
        await this.createBoardUsers({user_id: board.owner_id, board_id: board.id, role: dto.role, favorite});
        return {
            id: board.id,
            name: board.name,
            owner_id: board.owner_id,
            role: dto.role,
            favorite,
        }
    }

    async createBoardUsers(dto: CreateBoardUsersDto) {
        const board = await this.boardUsersRepository.create(dto);
        return board;
    }

    async getBoardById(id: number) {
        const board = await this.boardRepository.findOne({where: {id}});
        return board;
    }

    async getAllUserBoard(id: number) {
        const userBoardsId: Array<any> = await this.getUserBoardId(id) || [];
        const boardsId = userBoardsId.map(x => x.board_id);
        let roles = {};
        let favorite = {};

        userBoardsId.forEach((item) => {
            roles[item.board_id] = item.role;
            favorite[item.board_id] = item.favorite;

        })

        const boards: any = await this.boardRepository.findAll({where: {id: boardsId}, include: {all: true}});
        const newBoards = [];
        boards.forEach(x => {
            newBoards.push({
                ...x.dataValues,
                role: roles[x.id],
                favorite: favorite[x.id],
            })
        })
        return newBoards;
    }

    async getUserBoardId(id: number) {
        return await this.boardUsersRepository.findAll({where: {user_id: id}, attributes: ['board_id', 'role', 'favorite'], include: {all: true}});
    }
}