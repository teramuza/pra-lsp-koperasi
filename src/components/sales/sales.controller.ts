import {Request, Response} from 'express';
import db from '@model';

export const SalesController = {
    async create(req: Request, res: Response) {
        try {
            const {tgl_sales, id_customer, transactions} = req.body;
            if (!tgl_sales) return res.status(400).json({message: 'Tanggal sales wajib diisi'});

            const sales = await db.Sales.create({tgl_sales, id_customer});

            if (transactions && Array.isArray(transactions)) {
                const trxData = transactions.map((trx: any) => ({
                    ...trx,
                    id_sales: sales.id,
                    amount: trx.quantity * trx.price
                }));
                await db.Transaction.bulkCreate(trxData);
            }

            const createdSales = await db.Sales.findByPk(sales.id, {
                include: [
                    {model: db.Customer, as: 'customer'},
                    {model: db.Transaction, include: [{model: db.Item, as: 'Items'}]}
                ]
            });

            res.status(201).json({message: 'Sales berhasil dibuat', data: createdSales});
        } catch (error: any) {
            res.status(500).json({message: 'Error creating sales', error: error.message});
        }
    },

    // GET ALL SALES
    async getAll(req: Request, res: Response) {
        try {
            const sales = await db.Sales.findAll({
                include: [
                    {model: db.Customer, as: 'customer'},
                    {model: db.Transaction, include: [{model: db.Item, as: 'Items'}]}
                ],
                order: [['tgl_sales', 'DESC']]
            });
            res.json(sales.map(s => s.getSalesData()));
        } catch (error: any) {
            res.status(500).json({message: 'Error fetching sales', error: error.message});
        }
    },

    // GET SALES BY ID
    async getById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const sales = await db.Sales.findByPk(id, {
                include: [
                    {model: db.Customer, as: 'customer'},
                    {model: db.Transaction, include: [{model: db.Item, as: 'Items'}]}
                ]
            });
            if (!sales) return res.status(404).json({message: 'Sales tidak ditemukan'});
            res.json(sales.getSalesData());
        } catch (error: any) {
            res.status(500).json({message: 'Error fetching sales', error: error.message});
        }
    },

    async update(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const {tgl_sales, id_customer} = req.body;
            const sales = await db.Sales.findByPk(id);
            if (!sales) return res.status(404).json({message: 'Sales tidak ditemukan'});

            await sales.update({tgl_sales, id_customer});
            res.json({message: 'Sales updated', data: sales});
        } catch (error: any) {
            res.status(500).json({message: 'Error updating sales', error: error.message});
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const sales = await db.Sales.findByPk(id);
            if (!sales) return res.status(404).json({message: 'Sales tidak ditemukan'});

            await sales.destroy();
            res.json({message: 'Sales deleted'});
        } catch (error: any) {
            res.status(500).json({message: 'Error deleting sales', error: error.message});
        }
    },

    async addTransactions(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const {id_item, quantity, price} = req.body;

            if (!id_item || !quantity || !price) {
                return res.status(400).json({message: 'item_id, quantity, dan price wajib diisi'});
            }

            const sales = await db.Sales.findByPk(id);
            if (!sales) return res.status(404).json({message: 'Sales tidak ditemukan'});

            const amount = quantity * price;

            const transaction = await db.Transaction.create({
                id_sales: Number(id),
                id_item,
                quantity,
                price,
                amount
            });

            res.status(201).json({message: 'Transaksi berhasil ditambahkan', data: transaction});
        } catch (error: any) {
            res.status(500).json({message: 'Error adding transaction', error: error.message});
        }
    },

    async updateTransaction(req: Request, res: Response) {
        try {
            const {id, trxId} = req.params;
            const {quantity, price} = req.body;

            const trx = await db.Transaction.findOne({where: {id: trxId, id_sales: id}});
            if (!trx) return res.status(404).json({message: 'Transaksi tidak ditemukan'});

            const amount = quantity && price ? quantity * price : trx.amount;
            await trx.update({quantity, price, amount});

            res.json({message: 'Transaksi updated', data: trx});
        } catch (error: any) {
            res.status(500).json({message: 'Error updating transaction', error: error.message});
        }
    },

    async deleteTransaction(req: Request, res: Response) {
        try {
            const {id, trxId} = req.params;
            const trx = await db.Transaction.findOne({where: {id: trxId, id_sales: id}});
            if (!trx) return res.status(404).json({message: 'Transaksi tidak ditemukan'});

            await trx.destroy();
            res.json({message: 'Transaksi deleted'});
        } catch (error: any) {
            res.status(500).json({message: 'Error deleting transaction', error: error.message});
        }
    }
};
