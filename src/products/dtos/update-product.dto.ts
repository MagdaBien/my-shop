import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @Length(10, 20)
 title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return Number(value);
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  shortDescription: string;
}