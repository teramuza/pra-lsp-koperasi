import {Request, Response} from 'express';
import db from '../../database/models';

export const CustomerController = {
    async create(req: Request, res: Response) {
        try {
            const {nama, alamat, telp, fax, email} = req.body;
            const customer = await db.Customer.create({nama, alamat, telp, fax, email});
            res.status(201).json({message: 'Customer created', data: customer});
        } catch (error: any) {
            res.status(500).json({message: 'Error creating customer', error: error.message});
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const customers = await db.Customer.findAll();
            res.json(customers);
        } catch (error: any) {
            res.status(500).json({message: 'Error fetching customers', error: error.message});
        }
    },

    async getById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const customer = await db.Customer.findByPk(id);
            if (!customer) return res.status(404).json({message: 'Customer not found'});
            res.json(customer);
        } catch (error: any) {
            res.status(500).json({message: 'Error fetching customer', error: error.message});
        }
    },

    async update(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const {nama, alamat, telp, fax, email} = req.body;
            const customer = await db.Customer.findByPk(id);
            if (!customer) return res.status(404).json({message: 'Customer not found'});

            await customer.update({nama, alamat, telp, fax, email});
            res.json({message: 'Customer updated', data: customer});
        } catch (error: any) {
            res.status(500).json({message: 'Error updating customer', error: error.message});
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const customer = await db.Customer.findByPk(id);
            if (!customer) return res.status(404).json({message: 'Customer not found'});

            await customer.destroy();
            res.json({message: 'Customer deleted'});
        } catch (error: any) {
            res.status(500).json({message: 'Error deleting customer', error: error.message});
        }
    }
};
