/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import KategoriBanner from '../../components/KategoriBanner';
import Login from '../../components/Login';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { LoginContext } from '../../context/LoginContext';

const Elektronik = () => {
  const { modal, toggleModalLogin } = useContext(LoginContext);

  return (
    <div>
      <Head>
        <title>Kategori</title>
      </Head>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <main className="px-20 mt-24">
        <div className="px-4 md:px-36 lg:px-72 my-2">
          <KategoriBanner />
        </div>
        <div className="my-10 flex flex-col px-2 md:px-36 lg:px-72">
          <div className="grid grid-cols-7 gap-4">
            <Link href="/kategori">
              <div className="rounded-lg border shadow-md h-40 flex flex-col justify-center items-center">
                <img src="/kategori/BLSTMG-W00-013-1.jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
                <p className="text-sm font-medium text-gray-600">Elektronik</p>
              </div>
            </Link>
            <div className="border shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
              <img src="/kategori/kamera-cctv-outdoor-waterproof-palsu-black-1.jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
              <p className="text-sm font-medium text-gray-600">Kamera CCTV</p>
            </div>
            <div className="border shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
              <img src="/kategori/R(1).jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
              <p className="text-sm font-medium text-gray-600">TV</p>
            </div>
            <div className="border shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
              <img src="/kategori/R.jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
              <p className="text-sm font-medium text-gray-600">Audio</p>
            </div>
            <div className="border shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
              <img src="/kategori/BLSTMG-W00-013-1.jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
              <p className="text-sm font-medium text-gray-600">Elektronik Dapur</p>
            </div>
            <div className="border shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
              <img src="/kategori/BLSTMG-W00-013-1.jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
              <p className="text-sm font-medium text-gray-600">Elektronik Dapur</p>
            </div>
            <div className="border shadow-md rounded-lg h-40 flex flex-col justify-center items-center">
              <img src="/kategori/kamera-cctv-outdoor-waterproof-palsu-black-1.jpg" alt="Kategori Elektronik" className="h-28 w-52 object-contain mx-auto" />
              <p className="text-sm font-medium text-gray-600">Kamera CCTV</p>
            </div>
          </div>
        </div>

        <div className="my-6 flex flex-col px-2 md:px-36 lg:px-72">
          <div className="flex items-end justify-start mb-4">
            <p className="font-bold text-gray-600 text-xl">Produk Terlaris</p>
            <p className="text-gray-500 text-sm ml-4">Elektronik yang lagi hits</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <Link href="product">
              <div className="shadow-md rounded-lg h-80 border">
                <div className="flex flex-col">
                  <img src="/product/123.png" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                  <div className="flex flex-col p-2">
                    <p className="font-semibold">Canon M50</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/960x0.jpg" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Iphone 12</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/1234.jpg" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Lenovo Thinkpad</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 9.000.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/R(1).jpg" alt="Product 1" className="w-56 h-48 rounded-lg object-fill mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Masker medis</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 20.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/123.png" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Canon M50</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/123.png" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Canon M50</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/960x0.jpg" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Iphone 12</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/1234.jpg" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Lenovo Thinkpad</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 9.000.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/R(1).jpg" alt="Product 1" className="w-56 h-48 rounded-lg object-fill mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Masker medis</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 20.000</p>
                </div>
              </div>
            </div>
            <div className="shadow-md rounded-lg h-80 border">
              <div className="flex flex-col">
                <img src="/product/123.png" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                <div className="flex flex-col p-2">
                  <p className="font-semibold">Canon M50</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 flex flex-col px-2 md:px-36 lg:px-72">
          <p className="text-gray-700 text-xl font-bold">Brands</p>
          <div className="grid grid-cols-6 gap-2 my-4">
            <Link href="/kategori">
              <div className="rounded-lg border shadow-xl h-20 flex flex-col justify-center items-center">
                <img src="/logo/logo-sony-4096.png" alt="Kategori Elektronik" className="h-16 object-contain mx-auto" />
              </div>
            </Link>
            <div className="border shadow-md rounded-xl h-20 flex flex-col justify-center items-center">
              <img src="/logo/R(1).jpg" alt="Kategori Elektronik" className="h-16 object-contain mx-auto" />
            </div>
            <div className="border shadow-md rounded-xl h-20 flex flex-col justify-center items-center">
              <img src="/logo/R.jpg" alt="Kategori Elektronik" className="h-16 object-contain mx-auto" />
            </div>
            <div className="border shadow-md rounded-xl h-20 flex flex-col justify-center items-center">
              <img src="/logo/R.png" alt="Kategori Elektronik" className="h-16 object-contain mx-auto" />
            </div>
            <div className="border shadow-md rounded-xl h-20 flex flex-col justify-center items-center">
              <img src="/logo/R(1).jpg" alt="Kategori Elektronik" className="h-16 object-contain mx-auto" />
            </div>
            <Link href="/kategori">
              <div className="rounded-lg border shadow-xl h-20 flex flex-col justify-center items-center">
                <img src="/logo/logo-sony-4096.png" alt="Kategori Elektronik" className="h-16 object-contain mx-auto" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Elektronik;
