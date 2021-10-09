/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useContext } from 'react';
import Login from '../../components/Login';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { LoginContext } from '../../context/LoginContext';

export default function Home() {
  const { modal, toggleModalLogin } = useContext(LoginContext);

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <Login modal={modal} setModal={toggleModalLogin} />
      <Nav toggleModal={toggleModalLogin} />
      <main className="px-4 md:px-32 lg:px-80 mt-24">
        <div className="flex">
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded shadow flex flex-col">
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
                <div className="flex flex-col px-4">
                  <p className="font-semibold text-sm text-gray-700">Kotak Masuk</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
