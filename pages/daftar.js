/* eslint-disable linebreak-style */
import React from 'react';
import Link from 'next/link'
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Daftar = () => (
  <div>
    <Link href="/">
      <p className="text-center text-green-500 font-semibold text-4xl my-6">tokopaedi</p>
    </Link>
    <div className="grid grid-cols-2 gap-32 container mx-auto px-4 md:px-52 lg:px-60 my-24">
      <div className="flex flex-col">
        <div className="px-10">
          <img src="/register_new.png" alt="register" className="h-full" />
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600 text-2xl font-medium">Jual Beli Mudah Hanya di Tokopaedi</p>
          <p className="text-sm text-gray-500">Gabung dan rasakan kemudahan bertransaksi di Tokopaedi</p>
        </div>
      </div>
      <div className="bg-white shadow-lg border py-6 rounded-md">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold text-gray-700">Daftar Sekarang</p>
          <div className="flex text-sm my-2">
            <p className="text-gray-400">Sudah Punya Akun Tokopaedi ?</p>
            <p className="text-green-500"> &nbsp;Masuk</p>
          </div>
          <div className="flex my-4">
            <button type="button" className="border flex items-center rounded-md py-2 px-10">
              <FaFacebook />
              <p className="font-semibold ml-4">Facebook</p>
            </button>
            <button type="button" className="border flex items-center rounded-md py-2 px-10 ml-4">
              <FaGoogle />
              <p className="font-semibold ml-4">Google</p>
            </button>
          </div>
          <p className="text-xs text-gray-400">atau daftar dengan</p>
          <form className="w-full px-10 my-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Nomor Hp / Email</label>
              <input type="text" className="bg-white w-full outline-none border border-gray-300 focus:border-green-500 rounded-lg py-2 px-3" />
            </div>
            <p className="text-xs text-gray-400">Contoh : Email@tokopaedi.com</p>
            <button className="bg-gray-200 w-full mt-4 hover:bg-gray-300 rounded-md font-bold text-gray-400 hover:text-gray-500 py-2">Daftar</button>
          </form>
          <div className="text-xs text-center">
            <p className="text-gray-400">Dengan mendaftar, saya menyetujui</p>
            <div className="flex">
              <p className="text-green-400">Syarat dan ketentuan&nbsp;</p>
              <p className="text-gray-400">serta</p>
              <p className="text-green-400">&nbsp;Kebujakan Privasi</p>
            </div>
          </div>

        </div>
      </div>
      <div className="flex items-center justify-center col-span-2">
        <p>&copy;</p>
        <p className="text-gray-500 text-sm">2009 - 2021, PT Tokopaedi</p>
        <p className="mx-4 text-gray-500">|</p>
        <p className="text-green-500 font-semibold">Tokopaedi Care</p>
      </div>
    </div>
  </div>
);

export default Daftar;
