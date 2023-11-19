import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";

interface IUser {
    name: string;
    email: string;
    password: string;
}

@Table({tableName: 'users', paranoid: true})
export class User extends Model<User, IUser> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    
    @Column({type: DataType.STRING, allowNull: true})
    refreshToken: string;

    @Column({type: DataType.DATE})
    created_at: Date;

    @Column({type: DataType.DATE})
    updated_at: Date;

    @Column({type: DataType.DATE})
    deleted_at: Date;
}