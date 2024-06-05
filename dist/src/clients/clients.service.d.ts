import { Client } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ClientsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Client[]>;
    getById(id: Client['id']): Promise<Client | null>;
    getByEmail(email: Client['email']): Promise<Client | null>;
    deleteById(id: Client['id']): Promise<Client>;
    create(clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Promise<Client>;
    updateById(id: Client['id'], clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>): Promise<Client>;
}
