import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";

interface IBoard {
    name: string;
    owner_id: number;
}

@Table({tableName: 'boards', paranoid: true})
export class Board extends Model<Board, IBoard> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    owner_id: number;

    @Column({type: DataType.DATE})
    created_at: Date;

    @Column({type: DataType.DATE})
    updated_at: Date;

    @Column({type: DataType.DATE})
    deleted_at: Date;
}