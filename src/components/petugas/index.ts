import {Router} from 'express';
import {PetugasController} from './petugas.controller';

const router = Router();

router.post('/register', PetugasController.register);
router.post('/login', PetugasController.login);
router.get('/', PetugasController.getAll);
router.get('/:id', PetugasController.getById);
router.put('/:id', PetugasController.update);
router.delete('/:id', PetugasController.delete);

export default router;
