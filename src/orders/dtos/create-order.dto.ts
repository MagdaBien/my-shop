import { IsNotEmpty, IsString, IsUUID, IsInt, Min } from 'class-validator';
//import { Transform } from 'class-transformer';


export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;

  @IsString()
  comment: string;

}


