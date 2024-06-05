import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { Product } from '@prisma/client';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllExtended(): Promise<Product[]>;
    getAll(): Promise<Product[]>;
    getByIdExtended(id: string): Promise<Product | null>;
    getByPhraseExtended(searchPhrase: string): Promise<Product[] | null>;
    getById(id: string): Promise<Product | null>;
    create(productData: CreateProductDTO): Promise<Product>;
    update(id: string, productData: UpdateProductDTO): Promise<Product>;
    deleteById(id: string): Promise<Product>;
}
