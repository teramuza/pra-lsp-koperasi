'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        nama_item: 'Pulpen Pilot BPS-GP',
        uom: 'pcs',
        harga_beli: 2500,
        harga_jual: 3500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Pensil 2B Faber Castell',
        uom: 'pcs',
        harga_beli: 1800,
        harga_jual: 2500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Kertas A4 80gsm',
        uom: 'rim',
        harga_beli: 45000,
        harga_jual: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Stabilo Highlighter',
        uom: 'pcs',
        harga_beli: 8500,
        harga_jual: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Spidol Whiteboard',
        uom: 'pcs',
        harga_beli: 15000,
        harga_jual: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Buku Tulis 38 Lembar',
        uom: 'pcs',
        harga_beli: 3200,
        harga_jual: 4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Map Plastik L',
        uom: 'pcs',
        harga_beli: 2000,
        harga_jual: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Klip Kertas No.3',
        uom: 'box',
        harga_beli: 5500,
        harga_jual: 8000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Sapu Lidi',
        uom: 'pcs',
        harga_beli: 12000,
        harga_jual: 18000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Pel Kain Microfiber',
        uom: 'pcs',
        harga_beli: 25000,
        harga_jual: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Deterjen Bubuk 1kg',
        uom: 'kg',
        harga_beli: 18000,
        harga_jual: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Sabun Cuci Piring 800ml',
        uom: 'botol',
        harga_beli: 8500,
        harga_jual: 12500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Tempat Sampah 10L',
        uom: 'pcs',
        harga_beli: 35000,
        harga_jual: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Kain Lap Microfiber',
        uom: 'pcs',
        harga_beli: 8000,
        harga_jual: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Kategori: Elektronik & Aksesoris
      {
        nama_item: 'Kabel USB Type-C 1m',
        uom: 'pcs',
        harga_beli: 15000,
        harga_jual: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Power Bank 10000mAh',
        uom: 'pcs',
        harga_beli: 85000,
        harga_jual: 125000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Earphone In-Ear',
        uom: 'pcs',
        harga_beli: 25000,
        harga_jual: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Lampu LED 12W',
        uom: 'pcs',
        harga_beli: 35000,
        harga_jual: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Kopi Sachet 20gr',
        uom: 'sachet',
        harga_beli: 1200,
        harga_jual: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Teh Celup Box 25pcs',
        uom: 'box',
        harga_beli: 12000,
        harga_jual: 18000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Biskuit Marie 300gr',
        uom: 'pcs',
        harga_beli: 8500,
        harga_jual: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Air Mineral 600ml',
        uom: 'botol',
        harga_beli: 2000,
        harga_jual: 3500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Shampoo Sachet 12ml',
        uom: 'sachet',
        harga_beli: 1500,
        harga_jual: 2500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Pasta Gigi 75gr',
        uom: 'pcs',
        harga_beli: 8000,
        harga_jual: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Sikat Gigi Dewasa',
        uom: 'pcs',
        harga_beli: 5000,
        harga_jual: 8000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_item: 'Tissue Wajah 250 sheets',
        uom: 'box',
        harga_beli: 12000,
        harga_jual: 18000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  }
};
