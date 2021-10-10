/* eslint-disable linebreak-style */
import React from 'react';

const Notifikasi = () => (
  <>
    <div className="flex flex-col p-4">
      <div className="flex items-center text-sm font-medium justify-between p-4">
        <p>Pesanan Masuk</p>
        <input type="checkbox" className="border border-green-400" />
      </div>
      <hr />
      <div className="flex items-center text-sm font-medium justify-between p-4">
        <p>Pesanan Diproses</p>
        <input type="checkbox" className="border border-green-400" />
      </div>
      <hr />
      <div className="flex items-center text-sm font-medium justify-between p-4">
        <p>Pesanan Dikirim</p>
        <input type="checkbox" className="border border-green-400" />
      </div>
      <hr />
      <div className="flex items-center text-sm font-medium justify-between p-4">
        <p>Pesanan Tiba</p>
        <input type="checkbox" className="border border-green-400" />
      </div>
      <div className="flex items-center text-sm font-medium justify-between p-4">
        <p>Newsletter</p>
        <input type="checkbox" className="border border-green-400" />
      </div>
      <hr />
      <hr />
    </div>
  </>
);

export default Notifikasi;
