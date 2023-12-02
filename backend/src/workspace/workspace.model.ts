import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";

interface IWorkspace {
    name: string;
    users: JSON;
    boards: JSON;
}

@Table({tableName: 'workspaces', paranoid: true})
export class Workspace extends Model<Workspace, IWorkspace> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    users: JSON;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    boards: JSON;

    @Column({type: DataType.DATE})
    created_at: Date;

    @Column({type: DataType.DATE})
    updated_at: Date;

    @Column({type: DataType.DATE})
    deleted_at: Date;
}