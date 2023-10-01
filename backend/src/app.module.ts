import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { ConfigModule } from "@nestjs/config";

@Module({
    controllers: [],
    providers: [],
    imports: [
        UsersModule,
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true,
            sync: {
                alter: true,
            },
            define: {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: 'deleted_at',
            }
        }),
    ],
})

export class AppModule {}