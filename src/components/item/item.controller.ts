import { Request, Response } from 'express';
import db from '@model';

export const ItemController = {
    async create(req: Request, res: Response) {
        try {
            const { nama_item, uom, harga_beli, harga_jual } = req.body;

            if (!nama_item || !harga_beli || !harga_jual) {
                return res.status(400).json({ message: 'Nama item, harga beli, dan harga jual wajib diisi' });
            }

            const item = await db.Item.create({ nama_item, uom, harga_beli, harga_jual });
            res.status(201).json({ message: 'Item created', data: item });
        } catch (error: any) {
            res.status(500).json({ message: 'Error creating item', error: error.message });
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const items = await db.Item.findAll();
            res.json(items);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching items', error: error.message });
        }
    },

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const item = await db.Item.findByPk(id);
            if (!item) return res.status(404).json({ message: 'Item not found' });
            res.json(item);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching item', error: error.message });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nama_item, uom, harga_beli, harga_jual } = req.body;

            const item = await db.Item.findByPk(id);
            if (!item) return res.status(404).json({ message: 'Item not found' });

            await item.update({ nama_item, uom, harga_beli, harga_jual });
            res.json({ message: 'Item updated', data: item });
        } catch (error: any) {
            res.status(500).json({ message: 'Error updating item', error: error.message });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const item = await db.Item.findByPk(id);
            if (!item) return res.status(404).json({ message: 'Item not found' });

            await item.destroy();
            res.json({ message: 'Item deleted' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error deleting item', error: error.message });
        }
    }
};
