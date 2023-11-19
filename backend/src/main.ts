import { AppModule } from "./app.module";
import { NestFactory, Reflector } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { JwtService } from "@nestjs/jwt";
require('dotenv').config();


async function start() {
    const PORT = process.env.PORT || 4200;
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(process.env.GLOBAL_PATH || 'api');
    app.enableCors();
    // const reflector = app.get(Reflector);
    // app.useGlobalGuards(new JwtAuthGuard(reflector));

    await app.listen(PORT, () => console.log(`Server start at ${PORT}`));
}

start();