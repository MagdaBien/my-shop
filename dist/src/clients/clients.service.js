"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let ClientsService = class ClientsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.client.findMany();
    }
    getById(id) {
        return this.prismaService.client.findUnique({
            where: { id },
        });
    }
    getByEmail(email) {
        return this.prismaService.client.findFirst({
            where: { email },
        });
    }
    deleteById(id) {
        return this.prismaService.client.delete({
            where: { id },
        });
    }
    create(clientData) {
        return this.prismaService.client.create({
            data: clientData,
        });
    }
    updateById(id, clientData) {
        return this.prismaService.client.update({
            where: { id },
            data: clientData,
        });
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map