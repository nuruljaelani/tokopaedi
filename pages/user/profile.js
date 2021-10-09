/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useContext } from 'react';
import Login from '../../components/Login';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { LoginContext } from '../../context/LoginContext';
import ProfileTab from '../../components/user/ProfileTab';

export default function Home() {
  const { modal, toggleModalLogin } = useContext(LoginContext);

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <main className="px-4 sm:px-10 md:px-16 mx-auto max-w-screen-2xl mt-24">
        <div className="flex space-x-4 lg:space-x-10">
          <div className="w-full md:w-1/4 my-4 lg:my-6">
            <div className="bg-white rounded shadow flex flex-col pb-2">
              <div className="flex space-x-2 p-2 md:p-4">
                <img src="/woman-covering-her-face-frowning.jpg" alt="Profile" className="rounded-full w-10 h-10" />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">Heyley William</p>
                  <p className="text-xs text-gray-500">Verified Account</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col space-y-4">
                <p className="font-semibold text-gray-500 text-sm p-4">Member Silver</p>
                <div className="flex flex-col space-y-2">
                  <p className="font-semibold text-sm text-gray-600 px-4">Chat</p>
                  <p className="font-semibold text-sm text-gray-600 px-4">Diskusi Produk</p>
                  <p className="font-semibold text-sm text-gray-600 px-4">Komplain</p>
                  <p className="font-semibold text-sm text-gray-600 px-4">Ulasan</p>
                </div>
                <hr />
                <div className="flex flex-col space-y-2">
                  <p className="font-semibold text-sm text-gray-600 px-4">Daftar Transaksi</p>
                  <p className="font-semibold text-sm text-gray-600 px-4">Wishlist</p>
                  <p className="font-semibold text-sm text-gray-600 px-4">Pengaturan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 my-4 lg:my-6">
            <ProfileTab />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
