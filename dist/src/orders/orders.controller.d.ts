import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { Order } from '@prisma/client';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAllExtended(): Promise<Order[]>;
    getAll(): Promise<Order[]>;
    getByIdExtended(id: string): Promise<Order | null>;
    getById(id: string): Promise<Order | null>;
    create(orderData: CreateOrderDTO): Promise<Order>;
    update(id: string, orderData: Order): Promise<Order>;
    deleteById(id: string): Promise<Order>;
}
