import { IsString} from "class-validator";

export class CreateWorkspaceDto {
    
    @IsString({message: 'Wrong name'})
    readonly name: string;

    @IsString({message: 'Wrong users'})
    readonly users: JSON;

    @IsString({message: 'Wrong boards'})
    readonly boards: JSON;
}