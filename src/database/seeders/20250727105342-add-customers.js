'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        nama: 'PT. Maju Bersama Indonesia',
        alamat: 'Jl. Sudirman No. 123, Jakarta Pusat',
        telp: '021-5234567',
        fax: '021-5234568',
        email: 'purchasing@majubersama.co.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'CV. Karya Mandiri',
        alamat: 'Jl. Ahmad Yani No. 45, Surabaya',
        telp: '031-7654321',
        fax: '031-7654322',
        email: 'admin@karyamandiri.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Koperasi Pegawai Negeri',
        alamat: 'Jl. Diponegoro No. 67, Bandung',
        telp: '022-4567890',
        fax: '022-4567891',
        email: 'koperasi@pegawainegeri.org',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'SD Negeri 05 Jakarta',
        alamat: 'Jl. Cendrawasih No. 12, Jakarta Timur',
        telp: '021-8765432',
        fax: '021-8765433',
        email: 'sdn05@kemdikbud.go.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Rumah Sakit Umum Harapan',
        alamat: 'Jl. Veteran No. 89, Yogyakarta',
        telp: '0274-123456',
        fax: '0274-123457',
        email: 'purchasing@rsuharapan.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nama: 'Toko Serba Ada Rejeki',
        alamat: 'Jl. Pasar Minggu No. 34, Jakarta Selatan',
        telp: '021-9876543',
        fax: null,
        email: 'tokorejeki@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Warung Pak Budi',
        alamat: 'Jl. Raya Bogor No. 78, Depok',
        telp: '021-8524691',
        fax: null,
        email: 'warungpakbudi@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Kantin Universitas Merdeka',
        alamat: 'Kampus Universitas Merdeka, Malang',
        telp: '0341-567890',
        fax: null,
        email: 'kantin@unmer.ac.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Ibu Sari Wulandari',
        alamat: 'Perumahan Griya Asri Blok C-15, Bekasi',
        telp: '021-8234567',
        fax: null,
        email: 'sari.wulandari@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bapak Ahmad Fauzi',
        alamat: 'Jl. Melati No. 23, Tangerang',
        telp: '021-5678901',
        fax: null,
        email: 'ahmad.fauzi@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Ibu Rina Hartini',
        alamat: 'Komplek Villa Indah No. 56, Bogor',
        telp: '0251-234567',
        fax: null,
        email: 'rina.hartini@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Bapak Joko Susilo',
        alamat: 'Jl. Kenanga No. 78, Semarang',
        telp: '024-7654321',
        fax: null,
        email: 'joko.susilo@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'RT 05 RW 03 Kelurahan Cipinang',
        alamat: 'Kelurahan Cipinang, Jakarta Timur',
        telp: '021-4567123',
        fax: null,
        email: 'rt05rw03@kelcipinang.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Masjid Al-Ikhlas',
        alamat: 'Jl. Masjid No. 45, Bekasi',
        telp: '021-8765123',
        fax: null,
        email: 'masjidalikhlas@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Karang Taruna Harapan Jaya',
        alamat: 'Kelurahan Harapan Jaya, Bekasi Utara',
        telp: '021-3456789',
        fax: null,
        email: 'karangtaruna.hj@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Distributor Alat Tulis Sejahtera',
        alamat: 'Jl. Gajah Mada No. 234, Jakarta Barat',
        telp: '021-6234567',
        fax: '021-6234568',
        email: 'sales@distributorsejahtera.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Agen Perlengkapan Rumah Tangga',
        alamat: 'Pasar Induk Kramat Jati Blok A-12, Jakarta Timur',
        telp: '021-8094567',
        fax: null,
        email: 'agen.rt@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Supplier Elektronik Murah',
        alamat: 'Glodok Plaza Lt.2 No.45, Jakarta Barat',
        telp: '021-6543210',
        fax: '021-6543211',
        email: 'elektronikmurah@supplier.co.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'EO Sukses Bersama',
        alamat: 'Jl. Thamrin No. 98, Jakarta Pusat',
        telp: '021-3123456',
        fax: '021-3123457',
        email: 'event@suksesbersama.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Catering Bu Indira',
        alamat: 'Jl. Anggrek No. 67, Depok',
        telp: '021-7534681',
        fax: null,
        email: 'cateringbuindira@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
