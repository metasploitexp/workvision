import { Body, Controller, Post, Get, Req, UseGuards, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { Public } from "src/decorators/public.decorators";
import { RefreshTokenGuard } from "src/common/guards/refreshToken.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    @Post('/authorization')
    authorization(@Body() userDto: CreateUserDto) {
        return this.authService.authorization(userDto);
    }

    @Get('logout')
    logout(@Param() params: any) {
        this.authService.logout(params.id);
    }

    @UseGuards(RefreshTokenGuard)
    @Get('refresh')
    refreshTokens(@Req() req: any) {
        const userId = req.user['sub'];
        const refreshToken = req.user['refreshToken'];
        return this.authService.refreshTokens(userId, refreshToken);
    }
}