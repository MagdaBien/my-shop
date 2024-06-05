"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.setGlobalPrefix('api');
    app.useStaticAssets((0, path_1.resolve)('./public/uploads'), { prefix: '/uploads' });
    await app.enableShutdownHooks();
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map