import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcryptjs'
import { User } from "src/users/users.model";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async registration(userDto: CreateUserDto) {
        try {
            
            const candidate = await this.usersService.getUserByEmail(userDto.email);

            if (candidate) {
                throw new HttpException({sucess: false, message: 'user already exist...'}, HttpStatus.BAD_REQUEST);
            }

            const hashPassword = await bcrypt.hash(userDto.password, 5);
            const user = await this.usersService.createUser({...userDto, password: hashPassword});
            return this.generateToken(user);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async authorization(userDto: CreateUserDto) {
        const user = await this.validateUSer(userDto);
        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, name: user.name};
        return {
            sucess: true,
            token: this.jwtService.sign(payload),
        }
    }

    private async validateUSer(userDto: CreateUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user?.password || '');

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'uncorrect user data', success: false});
    }
}