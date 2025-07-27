import { Router } from 'express';
import { CustomerController } from './customer.controller';

const router = Router();

router.post('/', CustomerController.create);
router.get('/', CustomerController.getAll);
router.get('/:id', CustomerController.getById);
router.put('/:id', CustomerController.update);
router.delete('/:id', CustomerController.delete);

export default router;
