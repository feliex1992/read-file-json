import { Router } from 'express';
import OrderCustomer from '../controller/order-customer';
import { CreateOrderCustomer } from '../use-case/create-order-customer';

const router = Router();

const createOrderCustomer = new CreateOrderCustomer();
const orderCustomer = new OrderCustomer(createOrderCustomer);

router.post('/order-customer', (req, res) => orderCustomer.createOrderCustomer(req, res));

export default router;