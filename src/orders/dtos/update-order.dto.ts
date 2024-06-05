import { IsNotEmpty, IsString, IsUUID, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';


export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return Number(value);
  })
  amount: number;
}
