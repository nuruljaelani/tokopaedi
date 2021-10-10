/* eslint-disable linebreak-style */
import React from 'react';

const Bank = () => (
  <>
    <div className="flex flex-col my-4">
      <div className="flex border border-green-300 rounded-md shadow p-4">
        <div className="flex flex-col space-y-2 w-3/4 items-start">
          <p className="uppercase text-gray-500">PT. bank rakyat indonesia</p>
          <p className="uppercase text-gray-500 font-semibold">0993837726233</p>
          <div className="text-gray-500 flex">
            a.n &nbsp;
            <p className="font-semibold">Heyley William</p>
          </div>
        </div>
        <div className="w-1/4">
          <button type="button" className="flex items-center border border-green-400 p-2 hover:bg-green-50 rounded-md">
            <i className="material-icons md-16 text-green-500">edit</i>
            <p className="text-sm text-green-500 font-semibold">Ubah Rekening</p>
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Bank;
