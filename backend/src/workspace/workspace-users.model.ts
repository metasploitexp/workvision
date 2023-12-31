import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";

interface IWorkspace {
    user_id: number;
    workspace_id: number;
}

@Table({tableName: 'workspaces_users', paranoid: true})
export class WorkspaceUsers extends Model<WorkspaceUsers, IWorkspace> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    user_id: number;

    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    workspace_id: number;

    @Column({type: DataType.DATE})
    created_at: Date;

    @Column({type: DataType.DATE})
    updated_at: Date;

    @Column({type: DataType.DATE})
    deleted_at: Date;
}