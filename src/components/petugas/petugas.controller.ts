import { Request, Response } from 'express';
import db from '@model';
import {comparePassword, hashPassword} from "@utils/passwordUtils";
import {generateToken} from "@utils/tokenUtils";

export const PetugasController = {
    async register(req: Request, res: Response) {
        try {
            const { name, username, password, level } = req.body;
            if (!name || !username || !password || level === undefined) {
                return res.status(400).json({ message: 'Semua field wajib diisi' });
            }

            const existing = await db.Petugas.findOne({ where: { username } });
            if (existing) {
                return res.status(400).json({ message: 'Username sudah digunakan' });
            }

            const hashedPassword = hashPassword(password);
            const petugas = await db.Petugas.create({ name, username, password: hashedPassword, level });
            res.status(201).json({ message: 'Petugas berhasil didaftarkan', data: { id: petugas.id, name: petugas.name, username: petugas.username, level: petugas.level } });
        } catch (error: any) {
            res.status(500).json({ message: 'Error register petugas', error: error.message });
        }
    },

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            if (!username || !password) return res.status(400).json({ message: 'Username dan password wajib diisi' });

            const petugas = await db.Petugas.findOne({ where: { username } });
            if (!petugas) return res.status(401).json({ message: 'Username atau password salah' });

            const validPassword = comparePassword(password, petugas.password);
            if (!validPassword) return res.status(401).json({ message: 'Username atau password salah' });

            const token = generateToken({ id: petugas.id, name: petugas.name, level: petugas.level });

            res.json({
                message: 'Login berhasil',
                token,
                user: { id: petugas.id, name: petugas.name, username: petugas.username, level: petugas.level }
            });
        } catch (error: any) {
            res.status(500).json({ message: 'Error login', error: error.message });
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const petugas = await db.Petugas.findAll({ attributes: { exclude: ['password'] } });
            res.json(petugas);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching petugas', error: error.message });
        }
    },

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const petugas = await db.Petugas.findByPk(id, { attributes: { exclude: ['password'] } });
            if (!petugas) return res.status(404).json({ message: 'Petugas tidak ditemukan' });
            res.json(petugas);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching petugas', error: error.message });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, username, password, level } = req.body;
            const petugas = await db.Petugas.findByPk(id);
            if (!petugas) return res.status(404).json({ message: 'Petugas tidak ditemukan' });

            const updateData: any = { name, username, level };
            if (password) updateData.password = hashPassword(password);

            await petugas.update(updateData);
            res.json({ message: 'Petugas updated', data: petugas });
        } catch (error: any) {
            res.status(500).json({ message: 'Error updating petugas', error: error.message });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const petugas = await db.Petugas.findByPk(id);
            if (!petugas) return res.status(404).json({ message: 'Petugas tidak ditemukan' });

            await petugas.destroy();
            res.json({ message: 'Petugas deleted' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error deleting petugas', error: error.message });
        }
    },
};
