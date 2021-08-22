/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useContext, useState } from 'react';
import {
  FaStar,
  FaMinusCircle,
  FaPlusCircle,
  FaPencilAlt,
  FaPlus,
  FaComment,
  FaHeart,
  FaShareAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTruck,
  FaThumbsUp,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Nav from '../components/Nav';
import Kurir from '../components/product/Kurir';
import { LoginContext } from '../context/LoginContext';

const Product = () => {
  const { modal, toggleModalLogin } = useContext(LoginContext);
  const [catatan, setCatatan] = useState(false);
  const [modalKurir, setModalKurir] = useState(false);

  const toggleCatatanInput = () => {
    setCatatan(!catatan);
  };

  const toggleModalKurir = () => {
    setModalKurir(!modalKurir);
  };

  return (
    <div>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <Kurir show={modalKurir} toggleModal={toggleModalKurir} />
      <main className="mt-28 px-2 md:px-32 lg:px-80">
        <div className="my-10 flex flex-col">
          <div className="flex">
            <div className="flex flex-col w-4/12">
              <div className="flex flex-col">
                <div className="shadow-md border h-80 rounded-lg overflow-hidden px-4 items-center flex">
                  <img src="/product/123.png" alt="Product" className="object-contain" />
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="border rounded">
                    <img src="/product/123.png" alt="Product" className="object-contain" />
                  </div>
                  <div className="border rounded">
                    <img src="/product/123.png" alt="Product" className="object-contain" />
                  </div>
                  <div className="border rounded">
                    <img src="/product/123.png" alt="Product" className="object-contain" />
                  </div>
                  <div className="border rounded">
                    <img src="/product/123.png" alt="Product" className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-20">
                <p className="text-gray-700 font-semibold">ULASAN (2060)</p>
                <p className="my-4 text-gray-500">Kamera Mirorless M50 murah 2 Ribuan</p>
                <div className="flex space-x-4">
                  <div className="flex flex-col w-1/3 justify-center items-center">
                    <div className="flex items-end">
                      <p className="text-6xl text-gray-700">4.5</p>
                      <p className="text-gray-600">/5</p>
                    </div>
                    <div className="flex text-yellow-400 text-xl space-x-1 my-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-500 text-sm">(2065) ulasan</p>
                  </div>
                  <div className="flex flex-col w-2/3 justify-between">
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <p className="text-xs">5</p>
                      <div className="w-44">
                        <div className="rounded bg-green-400 h-2 w-32" />
                      </div>
                      <p className="text-xs">1898</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <p className="text-xs">4</p>
                      <div className="w-44">
                        <div className="rounded bg-green-400 h-2 w-4" />
                      </div>
                      <p className="text-xs">94</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <p className="text-xs">3</p>
                      <div className="w-44">
                        <div className="rounded bg-green-400 h-2 w-1" />
                      </div>
                      <p className="text-xs">4</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <p className="text-xs">2</p>
                      <div className="w-44">
                        <div className="rounded bg-green-400 h-2 w-0" />
                      </div>
                      <p className="text-xs">0</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />
                      <p className="text-xs">1</p>
                      <div className="w-44">
                        <div className="rounded bg-green-400 h-2 w-0" />
                      </div>
                      <p className="text-xs">0</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-10">
                  <p className="text-gray-500 text-xs font-semibold">FOTO DARI PEMBELI (4)</p>
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    <div className="border rounded">
                      <img src="/product/123.png" alt="Product" className="object-contain" />
                    </div>
                    <div className="border rounded">
                      <img src="/product/123.png" alt="Product" className="object-contain" />
                    </div>
                    <div className="border rounded">
                      <img src="/product/123.png" alt="Product" className="object-contain" />
                    </div>
                    <div className="border rounded">
                      <img src="/product/123.png" alt="Product" className="object-contain" />
                    </div>
                    <div className="border rounded">
                      <img src="/product/123.png" alt="Product" className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-6 w-5/12">
              <p className="text-xl font-bold text-gray-800">Kamera Mirorless M50 murah 2 Ribuan</p>
              <div className="flex items-center">
                <p className="text-gray-600 mr-4">Terjual 235</p>
                <FaStar className="text-yellow-500" />
                <p className="ml-2">4.8</p>
                <p className="ml-2 text-gray-500">(100 Ulasan)</p>
                <p className="ml-4 text-gray-500"> Diskusi (5)</p>
              </div>
              <p className="text-gray-800 text-3xl font-bold mt-4">Rp 8.000.000</p>
              <div className="flex mb-4">
                <p className="text-red-500 bg-red-200 rounded">10%</p>
                <p className="text-gray-500 line-through ml-2">Rp 8.799.000</p>
              </div>
              <hr />
              <div className="flex border-b">
                <button className="text-green-400 py-3 font-semibold text-sm border-b-2 w-20 border-green-500">
                  Detail
                </button>
                <button className="text-green-400 py-3 font-semibold text-sm w-20">
                  Info Penting
                </button>
              </div>
              <div className="flex">
                <div className="flex flex-col my-4">
                  <p className="text-gray-500">&nbsp;Kondisi :</p>
                  <p className="text-gray-500">&nbsp;Berat :</p>
                  <p className="text-gray-500">&nbsp;Kategori :</p>
                  <p className="text-gray-500">&nbsp;Etalase :</p>
                </div>
                <div className="flex flex-col my-4">
                  <p className="text-gray-500">&nbsp;Baru</p>
                  <p className="text-gray-500">&nbsp;16.000 Gram</p>
                  <p className="text-green-500 font-semibold">&nbsp;Kamera Mirorless</p>
                  <p className="text-green-500 font-semibold">&nbsp;Kamera</p>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <p className="text-sm text-gray-500 tracking-wider">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur fuga ex, doloremque nobis molestiae doloribus repellendus error, assumenda illo, hic quidem est voluptate esse sed vel adipisci quas deleniti reiciendis expedita neque itaque. Suscipit est temporibus libero officiis officia labore!
                </p>
                <br />
                <p className="text-sm text-gray-500 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur delectus, error perspiciatis molestiae aspernatur! Unde natus esse mollitia incidunt ab quam pariatur explicabo quas voluptatem officia eligendi atque autem inventore repellat at, fuga nihil illum aliquam cupiditate provident! Excepturi a illum similique, sit enim necessitatibus omnis aspernatur quidem beatae?</p>
              </div>
              <hr />

              <div className="flex flex-col mt-2">
                <div className="flex items-start justify-between mt-4">
                  <div className="flex items-start">
                    <img src="/OIP.jpg" alt="Toko" className="h-12" />
                    <div className="flex flex-col ml-2">
                      <p className="font-bold text-lg text-gray-700">Store</p>
                      <p className="text-gray-400 text-sm">Online 10 menit lalu</p>
                      <div className="flex items-center mt-2">
                        <FaStar className="text-gray-500" />
                        <p className="text-gray-600 ml-2">4.8</p>
                        <p className="text-gray-600 text-xs ml-2">rata-rata ulasan</p>
                        <p className="text-gray-600 text-xs ml-2">|</p>
                        <FaClock className="text-gray-500 ml-2" />
                        <p className="text-gray-600 text-xs ml-2">11 jam pesanan diproses</p>
                      </div>
                    </div>
                  </div>
                  <button className="border border-green-400 hover:bg-green-100 rounded-md text-green-400 h-8 px-6 text-xs font-semibold">Follow</button>
                </div>
              </div>

              <div className="flex flex-col mt-10 mb-4">
                <p className="text-gray-700 font-semibold">Pengiriman</p>
                <div className="flex items-start text-gray-500 mt-3">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <div className="flex flex-col text-sm ml-4">
                    <p>
                      Dilayani oleh
                      <b>Tokopaedi</b>
                    </p>
                    <p className="text-gray-400">Barang dikirim dari gudang terdekat dari alamatmu</p>
                  </div>
                </div>
                <div className="flex items-start text-gray-500 mt-3">
                  <FaTruck className="text-gray-500" />
                  <div className="flex flex-col text-sm ml-4">
                    <p>Ongkir reguler 9 ribu</p>
                    <p className="text-gray-400">Estimasi tiba besok - 18 Aug</p>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <p className="text-gray-600 ml-8">Kurir lainya :</p>
                  <button type="button" className="text-green-500 font-semibold" onClick={toggleModalKurir}>Lihat pilihan kurir</button>
                </div>
              </div>
              <hr />

              <div className="flex flex-col my-4">
                <p className="text-gray-700 font-semibold">Promo</p>
                <div className="flex mt-2">
                  <div className="bg-green-100 rounded-sm p-2">
                    <p className="text-gray-600 text-xs">Cashback</p>
                    <p className="text-gray-700 font-semibold">5 Ribu</p>
                    <p className="text-gray-500 text-xs">min pemblian 200 ribu</p>
                  </div>
                  <div className="bg-red-100 rounded-sm p-2 ml-4">
                    <p className="text-gray-600 text-xs">Gratis ongkir</p>
                    <p className="text-gray-700 font-semibold">15 Ribu</p>
                    <p className="text-gray-500 text-xs">min pemblian 30 ribu</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* Right Content */}
            <div className="bg-white shadow border ml-6 w-2/12 rounded-lg h-92 fixed right-64 mr-4 top-32">
              <div className="flex flex-col p-4">
                <p className="text-gray-700 font-bold">Atur jumlah dan catatan</p>
                <div className="flex mt-3 items-center">
                  <FaMinusCircle className="text-green-400 text-lg" />
                  <input type="number" min="1" className="w-20 appearance-none outline-none border-b" />
                  <FaPlusCircle className="text-green-400 text-lg" />
                  <p className="ml-4">
                    Stok
                    <b className="ml-2">50</b>
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  <div className={catatan ? 'block mb-2' : 'hidden'}>
                    <input type="text" className="outline-none w-full border border-gray-200 focus:border-green-500 rounded-lg p-2" placeholder="Contoh: warna putih, size M" />
                  </div>
                  <button className="text-green-400 flex text-sm" onClick={toggleCatatanInput}>
                    <FaPencilAlt className={catatan ? 'hidden' : 'block'} />
                    <p className="ml-2 font-bold">{catatan ? 'Batalkan Catatan' : 'Tambahkan catatan'}</p>
                  </button>
                </div>
                <div className="flex flex-col mt-4">
                  <p className="line-through text-right text-sm text-gray-500">Rp 9.000.000</p>
                  <div className="flex justify-between">
                    <p className="text-left text-gray-500">Subtotal</p>
                    <p className="text-right font-bold text-xl text-gray-800">Rp 8.000.000</p>
                  </div>
                  <button className="flex bg-green-400 hover:bg-green-500 rounded-md py-3 text-white text-sm font-semibold justify-center items-center mt-4">
                    <FaPlus className="mr-2" />
                    Keranjang
                  </button>
                  <button className="flex bg-white border border-green-300 hover:bg-green-100 rounded-md py-3 text-green-500 text-sm font-semibold justify-center items-center mt-4">
                    Keranjang
                  </button>
                </div>
                <div className="flex mt-4 justify-between px-8">
                  <div className="flex text-xs items-center text-gray-500">
                    <FaComment />
                    <p className="font-bold ml-2">Chat</p>
                  </div>
                  <p>|</p>
                  <div className="flex text-xs items-center text-gray-500">
                    <FaHeart />
                    <p className="font-bold ml-2">Wishlist</p>
                  </div>
                  <p>|</p>
                  <div className="flex text-xs items-center text-gray-500">
                    <FaShareAlt />
                    <p className="font-bold ml-2">Share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-6 w-3/4">
            <div className="flex items-center">
              <p className="text-gray-600 mr-12">Filter</p>
              <div className="flex space-x-2">
                <div className="border rounded-2xl space-x-1 border-green-400 bg-green-100 p-2">
                  <p className="text-sm text-green-500">Semua (2098)</p>
                </div>
                <div className="flex border rounded-2xl space-x-1 border-gray-200 p-2">
                  <p className="text-sm text-gray-500">Dengan foto (8)</p>
                </div>
                <div className="border flex rounded-2xl space-x-1 border-gray-200 p-2">
                  <FaStar className="text-yellow-400 text-lg" />
                  <p className="text-sm text-gray-500">4</p>
                </div>
                <div className="border flex rounded-2xl space-x-1 border-gray-200 p-2">
                  <FaStar className="text-yellow-400 text-lg" />
                  <p className="text-sm text-gray-500">1</p>
                </div>
                <div className="border flex rounded-2xl space-x-1 border-gray-200 p-2">
                  <FaStar className="text-yellow-400 text-lg" />
                  <p className="text-sm text-gray-500">0</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-xs font-semibold mt-8 mb-4">SEMUA ULASAN</p>
            <div className="flex items-start my-4">
              <div className="flex items-center w-2/12 space-x-4">
                <div className="bg-gray-300 rounded-full h-10 w-10" />
                <div>
                  <p className="text-xs text-green-500 font-semibold">Chelsea Islan</p>
                  <p className="text-xs text-gray-300">Hari ini</p>
                </div>
              </div>
              <div className="flex flex-col items-start w-10/12">
                <div className="flex">
                  <div>
                    <div className="flex mb-2">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ut laudantium maxime voluptatibus non atque provident quidem debitis rerum ipsum.</p>
                  </div>
                  <div className="border border-gray-300 rounded-xl p-2 h-10 w-16 flex justify-center">
                    <FaThumbsUp />
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 my-4">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-200 rounded-full h-6 w-6" />
                      <div>
                        <p className="text-xs text-green-500 font-semibold">AB Store</p>
                        <p className="text-xs text-gray-400">Hari ini</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 ml-10 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non qui sapiente obcaecati necessitatibus velit facere alias culpa pariatur magni.</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
