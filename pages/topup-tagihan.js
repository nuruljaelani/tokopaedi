/* eslint-disable linebreak-style */
import React from 'react';
import { useContext } from 'react/cjs/react.development';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Nav from '../components/Nav';
import TopupBanner from '../components/TopupBanner';
import { LoginContext } from '../context/LoginContext';

const TopupTagihan = () => {
  const { modal, toggleModalLogin } = useContext(LoginContext);

  return (
    <div>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <main className="px-4 md:px-32 lg:px-80 mt-28">
        <TopupBanner />

        <div className="flex flex-col mt-16">
          <p className="text-gray-700 font-semibold text-2xl">Transaksi lagi yuk !</p>
          <div className="grid grid-cols-5 mt-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Listrik PLN</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Air PDAM</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Uang Elektronik</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <p className="text-gray-700 font-semibold text-2xl">Prabayar & Pascabayar</p>
          <div className="grid grid-cols-5 mt-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-16 w-16 shadow-lg" />
              <p>Roaming</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <p className="text-gray-700 font-semibold text-2xl">Bayar</p>
          <div className="grid grid-cols-6 grid-rows-3 gap-8 mt-6 w-4/5">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <p className="text-gray-700 font-semibold text-2xl">Isi Ulang</p>
          <div className="grid grid-cols-6 gap-8 mt-6 w-4/5">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Paket Data</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Roaming</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <p className="text-gray-700 font-semibold text-2xl">Donasi & Zakat</p>
          <div className="grid grid-cols-6 gap-8 mt-6 w-4/5">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pascabayar</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Pulsa</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-2xl h-10 w-10 shadow" />
              <p>Paket Data</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TopupTagihan;
