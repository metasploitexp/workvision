import { IsNumber, IsString} from "class-validator";

export class CreateWorkspaceUsersDto {
    @IsNumber({})
    user_id: number;

    @IsNumber({})
    workspace_id: number;

    @IsNumber({})
    role: number;
}