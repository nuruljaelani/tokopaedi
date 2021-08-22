/* eslint-disable linebreak-style */
import React from 'react';
import Link from 'next/link';
import { useContext } from 'react/cjs/react.development';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Nav from '../components/Nav';
import OfficialStoreSlider from '../components/OfficialStoreSlider';
import { LoginContext } from '../context/LoginContext';

const OficialStore = () => {
  const { modal, toggleModalLogin } = useContext(LoginContext);
  return (
    <div>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <main className="mt-28 px-4 md:px-32 lg:px-80">
        <div className="my-2">
          <OfficialStoreSlider />
        </div>
        <div className="flex flex-col my-8">
          <p className="text-xl text-gray-700 font-semibold">Brand Populer</p>
          <div className="grid grid-cols-6 gap-4 my-4">
            <div className="bg-gray-200 rounded-lg h-28" />
            <div className="bg-gray-200 rounded-lg h-28" />
            <div className="bg-gray-200 rounded-lg h-28" />
            <div className="bg-gray-200 rounded-lg h-28" />
            <div className="bg-gray-200 rounded-lg h-28" />
            <div className="bg-gray-200 rounded-lg h-28" />
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xl text-gray-700 font-semibold mb-4">Jangan sampai terlewat</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 rounded-lg h-60" />
            <div className="bg-gray-200 rounded-lg h-60" />
            <div className="bg-gray-200 rounded-lg h-60" />
          </div>
        </div>

        <div className="my-8 flex flex-col">
          <div className="flex justify-between mb-4">
            <p className="font-semibold text-gray-700 text-xl">Rekomendasi Untukmu</p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="shadow-md rounded-lg h-80 border">
              <Link href="/product">
                <div className="flex flex-col">
                  <img src="/product/123.png" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                  <div className="flex flex-col p-2">
                    <p className="font-semibold">Canon M50</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                  </div>
                </div>
              </Link>
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
                <img src="/product/R(1).jpg" alt="Product 1" className="w-56 h-48 object-fill mx-auto" />
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
              <Link href="/product">
                <div className="flex flex-col">
                  <img src="/product/123.png" alt="Product 1" className="w-56 h-48 object-contain mx-auto" />
                  <div className="flex flex-col p-2">
                    <p className="font-semibold">Canon M50</p>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="text-sm text-green-700 font-bold mt-4">Rp 15.000.000</p>
                  </div>
                </div>
              </Link>
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
                <img src="/product/R(1).jpg" alt="Product 1" className="w-56 h-48 object-fill mx-auto" />
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
      </main>
      <Footer />
    </div>
  );
};

export default OficialStore;
