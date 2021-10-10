/* eslint-disable linebreak-style */
import React from 'react';

const Biodata = () => (
  <>
    <div className="flex space-x-6 w-full">
      <div className="w-1/4 shadow p-2 border rounded-md">
        <img src="/woman-covering-her-face-frowning.jpg" alt="Profile" />
        <div className="flex flex-col my-4 space-y-2">
          <button type="button" className="border rounded-md text-sm text-gray-500 py-2">Ubah Foto</button>
          <p className="text-xs text-gray-500">Besar file maksimum 1MB</p>
          <p className="text-xs text-gray-500">Ekstensi yang diizinkan : JPG, JPEG, PNG</p>
        </div>
      </div>
      <div className="w-3/4 flex flex-col space-y-4">
        <p className="text-gray-500 font-semibold">Ubah Biodata</p>
        <div className="flex">
          <div className="flex flex-col w-1/4 space-y-3 text-gray-500">
            <p className="text-sm">Nama</p>
            <p className="text-sm">Tanggal Lahir</p>
            <p className="text-sm">Jenis kelamin</p>
          </div>
          <div className="flex flex-col w-3/4 space-y-3 text-gray-500">
            <p className="text-sm">Heley William</p>
            <p className="text-sm">20 Januari 2000</p>
            <p className="text-sm">Perempuan</p>
          </div>
        </div>
        <p className="text-gray-500 font-semibold">Ubah Kontak</p>
        <div className="flex">
          <div className="flex flex-col w-1/4 space-y-3 text-gray-500">
            <p className="text-sm">Email</p>
            <p className="text-sm">Nomor Hp</p>
          </div>
          <div className="flex flex-col w-3/4 space-y-3 text-gray-500">
            <p className="text-sm">Heleywilliam@gmail.com</p>
            <p className="text-sm">08937738261</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Biodata;
