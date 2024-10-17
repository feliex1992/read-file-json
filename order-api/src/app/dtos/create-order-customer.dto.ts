import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { CreateOrderCustomerItemDTO } from "./create-order-customer-item.dto";

export class CreateOrderCustomerDTO {
  @IsString()
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @IsString()
  @IsNotEmpty({ message: 'Payment Types is required' })
  payment_type: string;


  @IsArray()
  items: CreateOrderCustomerItemDTO[];
}
