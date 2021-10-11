/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Head from 'next/head';
import Login from '../../components/Login';
import { LoginContext } from '../../context/LoginContext';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function index() {
  const { modal, toggleModalLogin } = useContext(LoginContext);

  return (
    <div>
      <Head>
        <title>Keranjang</title>
      </Head>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <main className="px-4 sm:px-10 md:px-16 mx-auto max-w-screen-2xl mt-24" style={{ minHeight: '60vh' }}>
        <div className="flex space-x-4">
          <div className="w-3/4 my-8 flex flex-col space-y-4">
            <p className="text-gray-700 font-semibold text-base md:text-lg lg:text-xl">Keranjang</p>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <label className="text-gray-600">Pilih Semua</label>
              </div>
              <hr />
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <input type="checkbox" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <p className="font-medium text-xs">Abc official</p>
                      <p className="text-xs text-gray-500">Jakarta Selatan</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2">
                        <img src="/product/123.png" alt="Product" className="w-24" />
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-gray-600 font-medium">Kamera Mirrorless cannon</p>
                          <p className="text-sm text-gray-500">Hitam</p>
                          <p className="text-sm text-gray-700 font-medium">Rp 7.999.9000</p>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex">
                          <button type="button" className="border rounded-full border-gray-600 my-auto flex items-center">
                            <i className="material-icons">add</i>
                          </button>
                          <input type="text" className="border-b w-20 outline-none px-2" />
                          <button type="button" className="border rounded-full border-gray-600 my-auto flex items-center">
                            <i className="material-icons">remove</i>
                          </button>
                        </div>
                        <button type="button" className="my-auto flex items-center">
                          <i className="material-icons">delete</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex space-x-4">
                  <input type="checkbox" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-col">
                      <p className="font-medium text-xs">Abc official</p>
                      <p className="text-xs text-gray-500">Jakarta Selatan</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-2">
                        <img src="/product/123.png" alt="Product" className="w-24" />
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm text-gray-600 font-medium">Kamera Mirrorless cannon</p>
                          <p className="text-sm text-gray-500">Hitam</p>
                          <p className="text-sm text-gray-700 font-medium">Rp 7.999.9000</p>
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex">
                          <button type="button" className="border rounded-full border-gray-600 my-auto flex items-center">
                            <i className="material-icons">add</i>
                          </button>
                          <input type="text" className="border-b w-20 outline-none px-2" />
                          <button type="button" className="border rounded-full border-gray-600 my-auto flex items-center">
                            <i className="material-icons">remove</i>
                          </button>
                        </div>
                        <button type="button" className="my-auto flex items-center">
                          <i className="material-icons">delete</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-8 flex h-full">
            <div className="bg-white shadow border p-4 rounded-md w-full flex flex-col space-y-4">
              <div className="flex flex-col">
                <p className="font-semibold text-gray-600">Total Harga</p>
                <p className="text-lg font-semibold text-gray-500">Rp 20.000.000</p>
              </div>
              <div className="flex space-x-4 border rounded-md p-2">
                <i className="material-icons">paid</i>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Promo</p>
                  <p className="text-xs text-gray-500">Pilih berbagai voucher diskon</p>
                </div>
              </div>
              <button type="button" className="bg-green-400 hover:bg-green-500 text-white py-2 font-medium rounded-md">Checkout</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
