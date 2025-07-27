--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO developer;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    nama character varying(255),
    alamat character varying(255),
    telp character varying(255),
    fax character varying(255),
    email character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.customers OWNER TO developer;

--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_id_seq OWNER TO developer;

--
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- Name: items; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public.items (
    id integer NOT NULL,
    nama_item character varying(255),
    uom character varying(255),
    harga_beli double precision,
    harga_jual double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.items OWNER TO developer;

--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.items_id_seq OWNER TO developer;

--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public.items_id_seq OWNED BY public.items.id;


--
-- Name: petugas; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public.petugas (
    id integer NOT NULL,
    name character varying(255),
    username character varying(255),
    password character varying(255),
    level integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.petugas OWNER TO developer;

--
-- Name: petugas_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public.petugas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.petugas_id_seq OWNER TO developer;

--
-- Name: petugas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public.petugas_id_seq OWNED BY public.petugas.id;


--
-- Name: sales; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public.sales (
    id integer NOT NULL,
    tgl_sales timestamp with time zone,
    id_customer integer,
    status character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.sales OWNER TO developer;

--
-- Name: sales_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public.sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_id_seq OWNER TO developer;

--
-- Name: sales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public.sales_id_seq OWNED BY public.sales.id;


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: developer
--

CREATE TABLE public.transactions (
    id integer NOT NULL,
    id_sales integer,
    id_item integer,
    quantity integer,
    price double precision,
    amount double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.transactions OWNER TO developer;

--
-- Name: transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: developer
--

CREATE SEQUENCE public.transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions_id_seq OWNER TO developer;

--
-- Name: transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: developer
--

ALTER SEQUENCE public.transactions_id_seq OWNED BY public.transactions.id;


--
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- Name: items id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);


--
-- Name: petugas id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.petugas ALTER COLUMN id SET DEFAULT nextval('public.petugas_id_seq'::regclass);


--
-- Name: sales id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.sales ALTER COLUMN id SET DEFAULT nextval('public.sales_id_seq'::regclass);


--
-- Name: transactions id; Type: DEFAULT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transactions_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public."SequelizeMeta" (name) FROM stdin;
20250727055925-create-petugas.js
20250727055934-create-item.js
20250727055939-create-customer.js
20250727055943-create-transaction.js
20250727055947-create-sales.js
20250727061000-constraints-sales.js
20250727061008-constraints-transaction.js
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public.customers (id, nama, alamat, telp, fax, email, "createdAt", "updatedAt") FROM stdin;
1	PT. Maju Bersama Indonesia	Jl. Sudirman No. 123, Jakarta Pusat	021-5234567	021-5234568	purchasing@majubersama.co.id	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
2	CV. Karya Mandiri	Jl. Ahmad Yani No. 45, Surabaya	031-7654321	031-7654322	admin@karyamandiri.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
3	Koperasi Pegawai Negeri	Jl. Diponegoro No. 67, Bandung	022-4567890	022-4567891	koperasi@pegawainegeri.org	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
4	SD Negeri 05 Jakarta	Jl. Cendrawasih No. 12, Jakarta Timur	021-8765432	021-8765433	sdn05@kemdikbud.go.id	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
5	Rumah Sakit Umum Harapan	Jl. Veteran No. 89, Yogyakarta	0274-123456	0274-123457	purchasing@rsuharapan.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
6	Toko Serba Ada Rejeki	Jl. Pasar Minggu No. 34, Jakarta Selatan	021-9876543	\N	tokorejeki@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
7	Warung Pak Budi	Jl. Raya Bogor No. 78, Depok	021-8524691	\N	warungpakbudi@yahoo.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
8	Kantin Universitas Merdeka	Kampus Universitas Merdeka, Malang	0341-567890	\N	kantin@unmer.ac.id	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
9	Ibu Sari Wulandari	Perumahan Griya Asri Blok C-15, Bekasi	021-8234567	\N	sari.wulandari@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
10	Bapak Ahmad Fauzi	Jl. Melati No. 23, Tangerang	021-5678901	\N	ahmad.fauzi@yahoo.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
11	Ibu Rina Hartini	Komplek Villa Indah No. 56, Bogor	0251-234567	\N	rina.hartini@hotmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
12	Bapak Joko Susilo	Jl. Kenanga No. 78, Semarang	024-7654321	\N	joko.susilo@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
13	RT 05 RW 03 Kelurahan Cipinang	Kelurahan Cipinang, Jakarta Timur	021-4567123	\N	rt05rw03@kelcipinang.id	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
14	Masjid Al-Ikhlas	Jl. Masjid No. 45, Bekasi	021-8765123	\N	masjidalikhlas@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
15	Karang Taruna Harapan Jaya	Kelurahan Harapan Jaya, Bekasi Utara	021-3456789	\N	karangtaruna.hj@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
16	Distributor Alat Tulis Sejahtera	Jl. Gajah Mada No. 234, Jakarta Barat	021-6234567	021-6234568	sales@distributorsejahtera.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
17	Agen Perlengkapan Rumah Tangga	Pasar Induk Kramat Jati Blok A-12, Jakarta Timur	021-8094567	\N	agen.rt@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
18	Supplier Elektronik Murah	Glodok Plaza Lt.2 No.45, Jakarta Barat	021-6543210	021-6543211	elektronikmurah@supplier.co.id	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
19	EO Sukses Bersama	Jl. Thamrin No. 98, Jakarta Pusat	021-3123456	021-3123457	event@suksesbersama.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
20	Catering Bu Indira	Jl. Anggrek No. 67, Depok	021-7534681	\N	cateringbuindira@gmail.com	2025-07-27 17:57:18.816+07	2025-07-27 17:57:18.816+07
\.


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public.items (id, nama_item, uom, harga_beli, harga_jual, "createdAt", "updatedAt") FROM stdin;
1	Pulpen Pilot BPS-GP	pcs	2500	3500	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
2	Pensil 2B Faber Castell	pcs	1800	2500	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
3	Kertas A4 80gsm	rim	45000	55000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
4	Stabilo Highlighter	pcs	8500	12000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
5	Spidol Whiteboard	pcs	15000	20000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
6	Buku Tulis 38 Lembar	pcs	3200	4500	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
7	Map Plastik L	pcs	2000	3000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
8	Klip Kertas No.3	box	5500	8000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
9	Sapu Lidi	pcs	12000	18000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
10	Pel Kain Microfiber	pcs	25000	35000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
11	Deterjen Bubuk 1kg	kg	18000	25000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
12	Sabun Cuci Piring 800ml	botol	8500	12500	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
13	Tempat Sampah 10L	pcs	35000	50000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
14	Kain Lap Microfiber	pcs	8000	12000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
15	Kabel USB Type-C 1m	pcs	15000	25000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
16	Power Bank 10000mAh	pcs	85000	125000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
17	Earphone In-Ear	pcs	25000	40000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
18	Lampu LED 12W	pcs	35000	55000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
19	Kopi Sachet 20gr	sachet	1200	2000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
20	Teh Celup Box 25pcs	box	12000	18000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
21	Biskuit Marie 300gr	pcs	8500	12000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
22	Air Mineral 600ml	botol	2000	3500	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
23	Shampoo Sachet 12ml	sachet	1500	2500	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
24	Pasta Gigi 75gr	pcs	8000	12000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
25	Sikat Gigi Dewasa	pcs	5000	8000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
26	Tissue Wajah 250 sheets	box	12000	18000	2025-07-27 17:57:18.81+07	2025-07-27 17:57:18.81+07
\.


--
-- Data for Name: petugas; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public.petugas (id, name, username, password, level, "createdAt", "updatedAt") FROM stdin;
1	Tera	admin	$2b$10$ejVv3XToIFsvTSolylycXu1MDIcG1pqz8aJ5uMMdyBd/e2njGb8Mq	2	2025-07-27 18:15:58.069+07	2025-07-27 18:15:58.069+07
2	Dandi	dandi	$2b$10$z7NkI5RzvzlvWRrjgI6fge01DLAijwjjvBY8klcC1qxO2Ej3/uM36	0	2025-07-27 18:24:19.798+07	2025-07-27 18:24:19.798+07
\.


--
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public.sales (id, tgl_sales, id_customer, status, "createdAt", "updatedAt") FROM stdin;
2	2025-07-27 17:57:18.81+07	2	\N	2025-07-27 18:06:56.129+07	2025-07-27 18:06:56.129+07
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: developer
--

COPY public.transactions (id, id_sales, id_item, quantity, price, amount, "createdAt", "updatedAt") FROM stdin;
1	2	2	23	5000	115000	2025-07-27 18:07:03.347+07	2025-07-27 18:10:06.584+07
\.


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public.customers_id_seq', 20, true);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public.items_id_seq', 26, true);


--
-- Name: petugas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public.petugas_id_seq', 2, true);


--
-- Name: sales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public.sales_id_seq', 2, true);


--
-- Name: transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: developer
--

SELECT pg_catalog.setval('public.transactions_id_seq', 1, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: petugas petugas_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.petugas
    ADD CONSTRAINT petugas_pkey PRIMARY KEY (id);


--
-- Name: sales sales_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);


--
-- Name: sales fk_customer; Type: FK CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT fk_customer FOREIGN KEY (id_customer) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: transactions fk_item_sales; Type: FK CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT fk_item_sales FOREIGN KEY (id_sales) REFERENCES public.sales(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: transactions fk_item_transaction; Type: FK CONSTRAINT; Schema: public; Owner: developer
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT fk_item_transaction FOREIGN KEY (id_item) REFERENCES public.items(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

