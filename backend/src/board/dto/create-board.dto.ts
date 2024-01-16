import { IsBoolean, IsNumber, IsString} from "class-validator";

export class CreateBoardDto {
    
    @IsString({message: 'Wrong name'})
    readonly name: string;

    @IsNumber({})
    readonly owner_id: number;

    @IsNumber({})
    role: number;

    @IsBoolean({message: 'is not bool'})
    favorite: boolean;
}