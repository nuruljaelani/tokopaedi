import React from 'react';

const Biodata = () => (
  <>
    <div className="flex space-x-6 w-full">
      <div className="w-1/4 shadow p-2 border rounded-md">
        <img src="/woman-covering-her-face-frowning.jpg" alt="Profile" />
        <div className="flex flex-col my-4 space-y-2">
            <button type="button" className="border rounded-md text-sm text-gray-500 py-2">Ubah Foto</button>
            <p className="text-xs text-gray-500">Besar file maksimum 1MB</p>
        </div>
      </div>
      <div className="w-3/4">
            <p className="text-gray-600 font-semibold">Ubah Biodata</p>
      </div>
    </div>
  </>
);

export default Biodata;
