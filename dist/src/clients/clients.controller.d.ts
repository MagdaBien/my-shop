import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dtos/create-client.dto';
import { UpdateClientDTO } from './dtos/update-client.dto';
import { Client } from '@prisma/client';
export declare class ClientsController {
    private clientsService;
    constructor(clientsService: ClientsService);
    getAll(): Promise<Client[]>;
    getByEmail(email: string): Promise<Client | null>;
    getById(id: string): Promise<Client | null>;
    create(clientData: CreateClientDTO): Promise<Client>;
    update(id: string, clientData: UpdateClientDTO): Promise<Client>;
    deleteById(id: string): Promise<Client>;
}
