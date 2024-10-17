import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateOrderCustomerItemDTO {
  @IsNumber()
  @IsNotEmpty({ message: 'Id is required' })
  id_product: number;

  @IsString()
  @IsNotEmpty({ message: 'name product is required' })
  name: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Qty is required' })
  qty: number;
}
