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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let ProductsService = class ProductsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.prismaService = prismaService;
    }
    getAllExtended() {
        return this.prismaService.product.findMany({ include: { orders: true, photos: true } });
    }
    getAll() {
        return this.prismaService.product.findMany();
    }
    getByIdExtended(id) {
        return this.prismaService.product.findUnique({
            where: { id },
            include: { orders: true, photos: true }
        });
    }
    getByPhraseExtended(searchPhrase) {
        return this.prismaService.product.findMany({
            where: { OR: [{ description: { contains: searchPhrase } }, { title: { contains: searchPhrase } }] },
            include: { photos: true }
        });
    }
    getById(id) {
        return this.prismaService.product.findUnique({
            where: { id },
        });
    }
    deleteById(id) {
        return this.prismaService.product.delete({
            where: { id },
        });
    }
    create(productData) {
        return this.prismaService.product.create({
            data: productData,
        });
    }
    updateById(id, productData) {
        return this.prismaService.product.update({
            where: { id },
            data: productData,
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map