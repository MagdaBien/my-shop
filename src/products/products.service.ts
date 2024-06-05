import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  public getAllExtended(): Promise<Product[]> {
    return this.prismaService.product.findMany({include: { orders: true, photos: true }});
  }

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getByIdExtended(id: string): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: { orders: true, photos: true  }
    });
  }  

  public getByPhraseExtended(searchPhrase: string): Promise<Product[] | null> {
    return this.prismaService.product.findMany({
      where: {  OR: [{ description: {contains: searchPhrase}}, { title: {contains: searchPhrase}}] },
      include: { photos: true  }
    });
  }    

  public getById(id: string): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }
  
  
  public deleteById(id: string): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  public create(
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.create({
      data: productData,
    });
  }

  public updateById(
    id: Product['id'],
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: { id },
      data: productData,
    });
  }
}


