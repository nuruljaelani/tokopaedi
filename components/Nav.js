/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
// eslint-disable-next-line linebreak-style

const Nav = ({ showModal }) => (
  <div>
    <div className="bg-green-500">
      <nav className="w-full flex items-center mx-auto px-20 py-6">
        <div className="flex w-1/5 items-center justify-between pr-6">
          <Link href="/">
            <a className="text-white font-bold text-xl md:text-2xl lg:text-3xl">Tokopaedi</a>
          </Link>
          <p className="font-semibold text-white">Kategori</p>
        </div>
        <div className="flex w-3/5">
          <input type="text" className="bg-white rounded-l-xl h-10 px-4 py-3 outline-none w-full" placeholder="Cari produk disini ..." />
          <button type="button" className="bg-white rounded-r-xl p-3">
            <FaSearch />
          </button>
        </div>
        <div className="flex w-1/5 justify-end">
          <button type="button" className="mr-4">
            <FaShoppingCart className="text-3xl text-green-200" />
          </button>
          <button type="button" className="text-white border border-white rounded-lg hover:bg-green-300 hover:border-green-500 font-semibold py-2 px-4 mx-4" onClick={showModal}>Login</button>
          <button type="button" className="bg-green-300 border hover:bg-green-500 text-white font-semibold rounded-lg py-2 px-4">
            <Link href="/daftar"><a>Daftar</a></Link>
          </button>
        </div>
      </nav>
    </div>
  </div>
);

// eslint-disable-next-line linebreak-style
export default Nav;
