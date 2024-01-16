import { IsNumber, IsString, IsBoolean } from "class-validator";

export class CreateBoardUsersDto {
    @IsNumber({})
    user_id: number;

    @IsNumber({})
    board_id: number;

    @IsNumber({})
    role: number;

    @IsBoolean({message: 'is not bool'})
    favorite: boolean;
}