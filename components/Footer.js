/* eslint-disable linebreak-style */
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => (
  <div>
    <footer className="mt-20 bg-gray-50 w-full px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-72">
      <div className="grid grid-cols-4 gap-6 px-4 pt-16 pb-20">
        <div className="flex flex-col">
          <p className="font-semibold text-gray-700">Tokopaedi</p>
          <div className="flex flex-col text-sm mt-2">
            <p className="text-gray-500 mb-2">Tentang Tokopaedi</p>
            <p className="text-gray-500 mb-2">Hak kekayaan intelektual</p>
            <p className="text-gray-500 mb-2">Karir</p>
            <p className="text-gray-500 mb-2">Blog</p>
            <p className="text-gray-500 mb-2">Mitra blog</p>
            <p className="text-gray-500 mb-2">Toko Point</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-gray-700">Beli</p>
          <div className="flex flex-col text-sm mb-4 mt-2">
            <p className="text-gray-500 mb-2">Tagihan & Topup</p>
            <p className="text-gray-500 mb-2">Tukar tambah Handphone</p>
            <p className="text-gray-500 mb-2">Tokopaedi COD</p>
          </div>
          <p className="font-semibold text-gray-700">Jual</p>
          <div className="flex flex-col text-sm mt-2">
            <p className="text-gray-500 mb-2">Pusat Edukasi Seller</p>
            <p className="text-gray-500 mb-2">Mitra</p>
            <p className="text-gray-500 mb-2">Daftar Official Store</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-gray-700">Bantuan dan Panduan</p>
          <div className="flex flex-col text-sm mt-2">
            <p className="text-gray-500 mb-2">Tokopaedi Care</p>
            <p className="text-gray-500 mb-2">Syarat dan Ketentuan</p>
            <p className="text-gray-500 mb-2">Kebujakan Privasi</p>
          </div>
          <p className="font-semibold text-gray-700 mt-4">Ikuti Kami</p>
          <div className="flex space-x-4 text-sm mt-2">
            <FaInstagram className="text-xl" />
            <FaFacebook className="text-xl" />
            <FaTwitter className="text-xl" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex mb-6">
            <div className="mr-2">
              <Image src="/google-play-logo.png" alt="Logo Google play store" width="200" height="60" />
            </div>
            <div>
              <Image src="/iphone-app-store.jpg" alt="Logo App store" width="200" height="60" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">&copy;2020 -2021, PT. Tokopaedi</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
