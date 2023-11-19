import { HttpException, HttpStatus, Injectable, UnauthorizedException, ForbiddenException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import * as argon2 from 'argon2';
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

            const hashPassword = await argon2.hash(userDto.password);
            const user = await this.usersService.createUser({...userDto, password: hashPassword});
            const tokens = await this.generateToken(user);
            await this.updateRefreshToken(user.id, tokens.refreshToken);
            return {...tokens, success: true, id: user.id};
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async authorization(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        const tokens = await this.generateToken(user);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {...tokens, success: true, id: user.id};
    }

    async logout(userId: number) {
        return this.usersService.update(userId, { refreshToken: null });
    }

    hashData(data: string) {
        return argon2.hash(data);
    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.update(userId, {
            refreshToken: hashedRefreshToken,
        });
    }

    async refreshTokens(userId: number, refreshToken: string) {
        const user = await this.usersService.getUserById(userId);
        if (!user || !user.refreshToken) {
            throw new ForbiddenException('Access Denied');
        }
        const refreshTokenMatches = await argon2.verify(user.refreshToken, refreshToken);

        if (!refreshTokenMatches) {
            throw new ForbiddenException({message: 'Access Denied', success: false})
        };
        const tokens = await this.generateToken(user);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }

    private async generateToken(user: User) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                email: user.email,
                sub: user.id
            },
              {
                secret: process.env.JWT_ACCESS_SECRET,
                expiresIn: '24h',
              },
            ),
            this.jwtService.signAsync({
                email: user.email,
                sub: user.id
            },
              {
                secret: process.env.JWT_REFRESH_SECRET,
                expiresIn: '7d',
              },
            ),
          ]);
      
          return {
            accessToken,
            refreshToken,
          };
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        const passwordEquals = await argon2.verify((user?.password || ''), userDto.password);

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'uncorrect user data', success: false});
    }
}