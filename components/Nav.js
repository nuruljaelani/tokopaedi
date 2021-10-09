/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Nav = ({ toggleModal }) => {
  return (
    <div>
      <div className="bg-green-500 fixed top-0 w-full z-30">
        <nav className="w-full flex items-center mx-auto px-4 sm:px-10 md:px-14 py-6">
          <div className="flex space-x-2 w-1/4 md:w-1/5 items-center justify-between pr-6">
            <Link href="/">
              <a className="text-white font-bold text-xl md:text-2xl lg:text-3xl">Tokopaedi</a>
            </Link>
            <p className="text-xs md:text-base font-semibold text-white">Kategori</p>
          </div>
          <div className="flex w-3/4 md:w-3/5">
            <input type="text" className="bg-white rounded-l-xl h-10 px-4 py-3 outline-none w-full" placeholder="Cari produk disini ..." />
            <button type="button" className="bg-white rounded-r-xl p-3">
              <FaSearch />
            </button>
          </div>
          <div className="hidden md:flex space-x-0 md:space-x-2 md:w-1/5 justify-end">
            <button type="button">
              <FaShoppingCart className="text-3xl text-green-200" />
            </button>
            <button type="button" className="text-white border border-white rounded-lg hover:bg-green-300 hover:border-green-500 font-semibold py-2 px-2 lg:px-4 text-sm" onClick={toggleModal}>Login</button>
            <Link href="/daftar">
              <button type="button" className="bg-green-300 border hover:bg-green-500 text-white font-semibold rounded-lg py-2 px-2 lg:px-4 text-sm">
                <a>Daftar</a>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

// eslint-disable-next-line linebreak-style
export default Nav;
