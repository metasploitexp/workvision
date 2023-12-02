import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-users.dto";
import { WorkspaceService } from "src/workspace/workspace.service";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private workspaceRepository: WorkspaceService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return user;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}, include: {all: true}});    
        return user;
    }

    async getUser(id: number): Promise<any> {
        const defaultUser = await this.userRepository.findOne({where: {id}, include: {all: true}});

        let workspaces: any = [];
        if (defaultUser.workspaces) {
            const ids:any = defaultUser.workspaces;
            workspaces = await this.workspaceRepository.getUserWorkspaces(JSON.parse(ids));
        }
        const user = {
            name: defaultUser.name,
            email: defaultUser.email,
            id: defaultUser.id,
            workspaces,
        };
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async update(id: number, updateUserDto: UpdateUserDto,) {
        return this.userRepository.update(updateUserDto, {where: {id: id}});
    }
}