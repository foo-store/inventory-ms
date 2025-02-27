import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  productId: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  quantity: number;
}
