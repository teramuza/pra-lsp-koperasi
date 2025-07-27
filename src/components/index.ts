import express, { Router } from 'express';
import Customer from './customer';
import Item from './item';
import Petugas from './petugas';
import Sales from './sales';

const router: Router = express.Router();
router.use('/customer', Customer);
router.use('/item', Item);
router.use('/petugas', Petugas);
router.use('/sales', Sales);

export default router;
