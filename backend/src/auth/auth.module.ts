import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        // {
        //     provide: APP_GUARD,
        //     useClass: AccessTokenStrategy,
        // },
        AccessTokenStrategy,
        RefreshTokenStrategy,
    ],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            
        })
    ],
    exports: [
        AuthService,
        JwtModule,
    ],
})
export class AuthModule {}