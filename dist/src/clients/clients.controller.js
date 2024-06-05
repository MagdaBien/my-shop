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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("./clients.service");
const create_client_dto_1 = require("./dtos/create-client.dto");
const update_client_dto_1 = require("./dtos/update-client.dto");
const common_2 = require("@nestjs/common");
let ClientsController = class ClientsController {
    constructor(clientsService) {
        this.clientsService = clientsService;
        this.clientsService = clientsService;
    }
    getAll() {
        return this.clientsService.getAll();
    }
    async getByEmail(email) {
        const client = await this.clientsService.getByEmail(email);
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        return client;
    }
    async getById(id) {
        const client = await this.clientsService.getById(id);
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        return client;
    }
    create(clientData) {
        return this.clientsService.create(clientData);
    }
    async update(id, clientData) {
        if (!(await this.clientsService.getById(id))) {
            throw new common_1.NotFoundException('Client not found');
        }
        return await this.clientsService.updateById(id, clientData);
    }
    async deleteById(id) {
        if (!(await this.clientsService.getById(id))) {
            throw new common_1.NotFoundException('Client not found');
        }
        return await this.clientsService.deleteById(id);
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "getByEmail", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDTO]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_dto_1.UpdateClientDTO]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "deleteById", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map