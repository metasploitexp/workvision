import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
require('dotenv').config();


async function start() {
    const PORT = process.env.PORT || 4200;
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(process.env.GLOBAL_PATH || 'api');

    await app.listen(PORT, () => console.log(`Server start at ${PORT}`));
}

start();