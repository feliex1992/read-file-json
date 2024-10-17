import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { CreateOrderCustomerDTO } from '../dtos/create-order-customer.dto';
import { validate } from 'class-validator';
import { CreateOrderCustomer } from '../use-case/create-order-customer';

export default class OrderCustomer {
  private createOrderCustomerUseCase: CreateOrderCustomer;

  constructor(createOrderCustomer: CreateOrderCustomer) {
    this.createOrderCustomerUseCase = createOrderCustomer;
  }

  public async createOrderCustomer(req: Request, res: Response): Promise<any> {
    const createOrderCustomerDTO = plainToInstance(CreateOrderCustomerDTO, req.body);

    const errors = await validate(createOrderCustomerDTO);
    if (errors.length > 0) {
      return res.status(400).json({ errors});
    }

    try {
      const result = await this.createOrderCustomerUseCase.execute(createOrderCustomerDTO);
      return res.status(201).json({
        message: "Success"
      });
    } catch (e: any) {
      if (typeof e === 'string') {
        return res.status(400).json({
          error: {
            message: e
          }
        });
      } else {
        return res.status(400).json({
          error: {
            message: e.message
          }
        });
      }
    }
  }
}