import { Injectable, BadRequestException } from '@nestjs/common';
import { Photo } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class PhotosService {
    constructor(private prismaService: PrismaService) {
        this.prismaService = prismaService;
    }
    public async create(
    photoData: Omit<Photo, 'id' | 'createdAt' | 'updatedAt'>,
    ): Promise<Photo> {
        const { productId, ...otherData } = photoData;
        try {
            return await this.prismaService.photo.create({
                data: {
                    ...otherData,
                    product: {
                        connect: { id: productId },
                    },
                },
            });
        } catch (error) {
            if (error.code === 'P2025')
                throw new BadRequestException("Product doesn't exist");
            throw error;
        }
    }
}
