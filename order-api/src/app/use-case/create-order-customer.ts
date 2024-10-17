import { CreateOrderCustomerDTO } from "../dtos/create-order-customer.dto";
import * as fs from 'fs';
import * as path from 'path';

export class CreateOrderCustomer {
  public async execute(createOrderCustomerDTO: CreateOrderCustomerDTO): Promise<any> {
    const fullPathCustomer = path.resolve(__dirname, `../../../${process.env.DATA_PATH}`, "customer.json");

    try {
      const customer = await fs.readFileSync(fullPathCustomer);
      console.log(customer);
    } catch (e: any) {
      throw new Error(e)
    }
  }
}