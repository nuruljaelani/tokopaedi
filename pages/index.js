/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Link from 'next/link';
import Login from '../components/Login';
import Nav from '../components/Nav';
import HomeSlider from '../components/HomeSlider';
import Footer from '../components/Footer';

export default function Home() {
  const [show, setShow] = useState(false);

  const toglleModal = () => {
    setShow(!show);
  };

  return (
    <div>
      <Login show={show} toglleModal={toglleModal} />
      <Nav showModal={toglleModal} />
      <main className="px-4 md:px-20 lg:px-76 mt-24">
        <div className="my-2">
          <HomeSlider />
        </div>
        <div className="my-6 flex flex-col">
          <div className="bg-white flex flex-col w-full border rounded-lg shadow-lg p-4">
            <div className="flex">
              <div className="w-1/2 flex flex-col">
                <p className="text-2xl font-semibold text-gray-800">Kategori</p>
                <div className="grid grid-cols-5 gap-2 mt-4">
                  <Link href="/kategori">
                    <div className="border rounded flex flex-col items-center justify-center p-2">
                      <img src="/OIP.jpg" alt="" className="w-24" />
                      <p>Makanan</p>
                    </div>
                  </Link>
                  <div className="border rounded flex flex-col items-center justify-center p-2">
                    <img src="/OIP.jpg" alt="" className="w-24" />
                    <p>Minuman</p>
                  </div>
                  <div className="border rounded flex flex-col items-center justify-center p-2">
                    <img src="/OIP.jpg" alt="" className="w-24" />
                    <p>Elektronik</p>
                  </div>
                  <div className="border rounded flex flex-col items-center justify-center p-2">
                    <img src="/OIP.jpg" alt="" className="w-24" />
                    <p>Makanan</p>
                  </div>
                  <div className="border rounded flex flex-col items-center justify-center p-2">
                    <img src="/OIP.jpg" alt="" className="w-24" />
                    <p>Makanan</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 ml-6">
                <p className="text-2xl font-semibold text-gray-800">Top Up & Tagihan</p>
                <div className="flex flex-col justify-between mt-4 w-full rounded py-2 px-4 bg-gray-100">
                  <div className="flex w-full justify-between border-b h-8">
                    <div className="text-center text-green-500 font-semibold border-b-2 border-green-500">Pulsa</div>
                    <div className="text-center text-green-500 font-semibold">Paket Data</div>
                    <div className="text-center text-green-500 font-semibold">Listrik</div>
                    <div className="text-center text-green-500 font-semibold">Tiket</div>
                  </div>
                  <div className="flex justify-between w-full items-end mt-4">
                    <div className="flex flex-col w-5/12">
                      <label className="text-sm text-gray-600 font-semibold">Nomor Telepon</label>
                      <input type="text" className="bg-white w-full rounded p-2 outline-none text-sm" />
                    </div>
                    <div className="flex flex-col w-5/12 ml-6">
                      <label className="text-sm text-gray-600 font-semibold">Nominal</label>
                      <input type="text" className="bg-gray-200 rounded p-2 outline-none text-sm" />
                    </div>
                    <div className="flex w-2/12 ml-6">
                      <button type="button" className="bg-gray-300 rounded-md py-2 px-8 text-sm">Beli</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="bg-gray-200 rounded-xl w-40 h-10" />
              <div className="bg-gray-200 rounded-xl w-60 h-10" />
              <div className="bg-gray-200 rounded-xl w-40 h-10" />
              <div className="bg-gray-200 rounded-xl w-100 h-10" />
              <div className="bg-gray-200 rounded-xl w-50 h-10" />
              <div className="bg-gray-200 rounded-xl w-60 h-10" />
              <div className="bg-gray-200 rounded-xl w-60 h-10" />
            </div>
          </div>
        </div>

        <div className="my-6 flex flex-col">
          <div className="flex justify-between mb-4">
            <p className="font-bold text-gray-800 text-2xl">Flash Sale</p>
            <p className="font-semibold text-green-500 text-lg">Lihat Semua</p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96" />
        </div>

        <div className="my-6 flex flex-col">
          <div className="flex justify-between mb-4">
            <p className="font-bold text-gray-800 text-2xl">Produk Terlaris</p>
            <p className="font-semibold text-green-500 text-lg">Lihat Semua</p>
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
          </div>
        </div>

        <div className="my-6 flex flex-col">
          <div className="flex justify-between mb-4">
            <p className="font-bold text-gray-800 text-2xl">Official Store</p>
            <Link href="/official-store">
              <a className="font-semibold text-green-500 text-lg">Lihat Semua</a>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 rounded-lg h-56" />
            <div className="bg-gray-200 rounded-lg h-56" />
            <div className="bg-gray-200 rounded-lg h-56" />
          </div>
        </div>

        <div className="my-6 flex flex-col">
          <div className="flex justify-between mb-4">
            <p className="font-bold text-gray-800 text-2xl">Cari Kategori</p>
            <p className="font-semibold text-green-500 text-lg">Lihat Semua</p>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <Link href="/kategori">
              <div className="bg-gray-200 rounded-lg h-40 flex justify-center items-center">
                <a href="#" className="font-bold">Elektronik</a>
              </div>
            </Link>
            <div className="bg-gray-200 rounded-lg h-40 flex justify-center items-center">
              <p className="font-bold">Dapur</p>
            </div>
            <div className="bg-gray-200 rounded-lg h-40 flex justify-center items-center">
              <p className="font-bold">Olahraga</p>
            </div>
            <div className="bg-gray-200 rounded-lg h-40 flex justify-center items-center">
              <p className="font-bold">Makanan & Minuman</p>
            </div>
            <div className="bg-gray-200 rounded-lg h-40 flex justify-center items-center">
              <p className="font-bold">Buku</p>
            </div>
            <div className="bg-gray-200 rounded-lg h-40 flex justify-center items-center">
              <p className="font-bold">Film & Kamera</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
