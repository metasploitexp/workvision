import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    
    @IsString({message: 'Wrong name'})
    readonly name: string;

    @IsEmail({}, {message: 'Wrong email'})
    readonly email: string;

    @IsString({message: 'Wrong password'})
    @Length(6, 20, {message: 'Wrong password'})
    readonly password: string;

    refreshToken: string;
}