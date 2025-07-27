import { Router } from 'express';
import {SalesController} from "@component/sales/sales.controller";

const router = Router();

router.post('/', SalesController.create);
router.get('/', SalesController.getAll);
router.get('/:id', SalesController.getById);
router.put('/:id', SalesController.update);
router.delete('/:id', SalesController.delete);

router.post('/:id/transactions', SalesController.addTransactions);
router.put('/:id/transactions/:trxId', SalesController.updateTransaction);
router.delete('/:id/transactions/:trxId', SalesController.deleteTransaction);

export default router;
