import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllExtended(): Promise<Product[]>;
    getAll(): Promise<Product[]>;
    getByIdExtended(id: string): Promise<Product | null>;
    getByPhraseExtended(searchPhrase: string): Promise<Product[] | null>;
    getById(id: string): Promise<Product | null>;
    deleteById(id: string): Promise<Product>;
    create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
    updateById(id: Product['id'], productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
}
