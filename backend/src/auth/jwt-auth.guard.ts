import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "src/decorators/public.decorators";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly reflector: Reflector, private jwtService: JwtService) {
        
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'Пользователь не авторизован', success: false})
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        } catch (e) {
            console.log(e);
            throw new UnauthorizedException({message: 'Пользователь не авторизован', success: false})
        }
    }

}