import { Body, Controller, Post, Get, Patch, Param, UseGuards, Request } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-users.dto";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @UseGuards(AccessTokenGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @UseGuards(AccessTokenGuard)
    @Get('data')
    getUser(@Request() request) {
        return this.usersService.getUser(request?.user?.sub);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(id, updateUserDto);
    }
}