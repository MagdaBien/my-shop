import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllExtended(): Promise<Order[]>;
    getAll(): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order | null>;
    getByIdExtended(id: Order['id']): Promise<Order | null>;
    deleteById(id: Order['id']): Promise<Order>;
    create(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order>;
    updateById(id: Order['id'], orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order>;
}
