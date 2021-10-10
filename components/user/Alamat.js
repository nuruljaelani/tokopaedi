/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';

const Alamat = () => (
  <>
    <button type="button" className="bg-green-500 py-2 px-4 text-sm rounded font-semibold text-white hover:bg-green-600">Tambah Alamat Baru</button>
    <div className="flex flex-col my-4">
      <div className="flex border border-green-300 rounded-md shadow p-4">
        <div className="flex flex-col space-y-4 w-3/4 items-start">
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus praesentium maxime iste nam dolorem officia, enim velit consequuntur quasi dicta.</p>
          <button type="button" className="text-green-500 font-semibold text-sm">Ubah Alamat</button>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
            <i className="material-icons text-green-500">check</i>
            <p className="text-sm text-green-500 font-semibold">Alamat Utama</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Alamat;
