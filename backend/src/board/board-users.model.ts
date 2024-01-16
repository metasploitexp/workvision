import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";

interface IBoard {
    user_id: number;
    board_id: number;
    role: number;
    favorite: boolean;
}

@Table({tableName: 'board_users', paranoid: true})
export class BoardUsers extends Model<BoardUsers, IBoard> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    user_id: number;

    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    board_id: number;

    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    role: number;

    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false})
    favorite: boolean;

    @Column({type: DataType.DATE})
    created_at: Date;

    @Column({type: DataType.DATE})
    updated_at: Date;

    @Column({type: DataType.DATE})
    deleted_at: Date;
}