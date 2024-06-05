import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePhotoDTO {
  @IsNotEmpty()
  @IsString()
  prodImg: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;
}