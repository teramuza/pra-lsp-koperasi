import { Router } from 'express';
import { ItemController } from './item.controller';

const router = Router();

router.get('/', ItemController.getAll);
router.get('/:id', ItemController.getById);
router.post('/', ItemController.create);
router.put('/:id', ItemController.update);
router.delete('/:id', ItemController.delete);

export default router;
