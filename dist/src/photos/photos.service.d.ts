import { Photo } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class PhotosService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(photoData: Omit<Photo, 'id' | 'createdAt' | 'updatedAt'>): Promise<Photo>;
}
