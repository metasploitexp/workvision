import { IsNumber, IsString} from "class-validator";

export class CreateWorkspaceDto {
    
    @IsString({message: 'Wrong name'})
    readonly name: string;

    @IsNumber({})
    readonly owner_id: number;
}