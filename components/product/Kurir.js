/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
import { FaCircle, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const Kurir = ({ show, toggleModal }) => (
  <div>
    <div className={show ? 'fixed z-10 inset-0 overflow-y-auto' : 'hidden'} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" aria-hidden="true" />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-end">
              <button type="button" onClick={toggleModal}>
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="text-2xl leading-6 font-bold text-gray-700" id="modal-title">
                    Simulasi pengiriman
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-5 gap-10">
                  <div className="col-span-2 rounded-lg border p-4 h-48">
                    <p className="text-sm text-gray-500">Berat barang</p>
                    <p className="font-semibold text-gray-600">300 gram</p>
                    <div className="flex flex-col">
                      <div className="flex mt-4 items-start">
                        <FaMapMarkerAlt className="text-gray-500 text-sm" />
                        <div className="flex flex-col ml-2">
                          <p className="text-xs text-gray-400">Dikirim dari</p>
                          <p className="text-sm text-gray-600 font-semibold">Kota Administrasi Jakarta Barat</p>
                        </div>
                      </div>
                      <div className="flex mt-6 items-start">
                        <FaMapMarkerAlt className="text-gray-500 text-sm" />
                        <div className="flex flex-col ml-2">
                          <p className="text-xs text-gray-400">Dikirim ke</p>
                          <p className="text-sm text-gray-600 font-semibold">Kota Depok</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col max-h-100 pr-4 overflow-y-scroll">
                    <div className="flex flex-col">
                      <p className="text-gray-600 font-semibold">Next day</p>
                      <div className="flex flex-col">
                        <div className="mt-2 flex items-center">
                          <FaCircle className="text-gray-500" style={{ fontSize: '8px' }} />
                          <div className="flex justify-between text-sm w-full ml-2 text-gray-500">
                            <p className="font-semibold">Sicepat</p>
                            <p>Rp 10.000</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 ml-5">Estimasi tiba besok - 19 Aug</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="mt-2 flex items-center">
                          <FaCircle className="text-gray-500 text-xs" style={{ fontSize: '8px' }} />
                          <div className="flex justify-between text-sm w-full ml-2 text-gray-500">
                            <p className="font-semibold">AnterAja</p>
                            <p>Rp 10.000</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 ml-5">Estimasi tiba besok - 19 Aug</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="mt-2 flex items-center">
                          <FaCircle className="text-gray-500 text-xs" style={{ fontSize: '8px' }} />
                          <div className="flex justify-between text-sm w-full ml-2 text-gray-500">
                            <p className="font-semibold">JNE</p>
                            <p>Rp 10.000</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 ml-5">Estimasi tiba besok - 19 Aug</p>
                      </div>
                    </div>

                    <div className="flex flex-col mt-6">
                      <p className="text-gray-600 font-semibold">Reguler</p>
                      <div className="flex flex-col">
                        <div className="mt-2 flex items-center">
                          <FaCircle className="text-gray-500 text-xs" style={{ fontSize: '8px' }} />
                          <div className="flex justify-between text-sm w-full ml-2 text-gray-500">
                            <p className="font-semibold">Sicepat Reg</p>
                            <p>Rp 10.000</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 ml-5">Estimasi tiba besok - 19 Aug</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="mt-2 flex items-center">
                          <FaCircle className="text-gray-500 text-xs" style={{ fontSize: '8px' }} />
                          <div className="flex justify-between text-sm w-full ml-2 text-gray-500">
                            <p className="font-semibold">AnterAja</p>
                            <p>Rp 10.000</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 ml-5">Estimasi tiba besok - 19 Aug</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="mt-2 flex items-center">
                          <FaCircle className="text-gray-500 text-xs" style={{ fontSize: '8px' }} />
                          <div className="flex justify-between text-sm w-full ml-2 text-gray-500">
                            <p className="font-semibold">JNE</p>
                            <p>Rp 10.000</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 ml-5">Estimasi tiba besok - 19 Aug</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Kurir;
