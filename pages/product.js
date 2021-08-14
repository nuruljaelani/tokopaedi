import React, { useState } from 'react'
import { FaStar, FaMinusCircle, FaPlusCircle, FaEdit, FaPencilAlt, FaPlus, FaComment, FaHeart, FaShareAlt } from 'react-icons/fa'
import Login from '../components/Login'
import Nav from '../components/Nav'

const Product = () => {

    const [catatan, setCatatan] = useState(false)

    const toggleCatatan = () => {
        setCatatan(!catatan)
    }

    return (
        <div>
            <Login/>
            <Nav/>
            <main>
                <div className="my-10 flex flex-col px-2 md:px-36 lg:px-72">
                    <div className="flex">
                        <div className="shadow-md border h-80 rounded-lg w-4/12 overflow-hidden px-4 items-center flex">
                            <img src="/product/123.png" alt="Product" className="object-contain" />
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
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur fuga ex, doloremque nobis molestiae doloribus repellendus error, assumenda illo, hic quidem est voluptate esse sed vel adipisci quas deleniti reiciendis expedita neque itaque. Suscipit est temporibus libero officiis officia labore!
                            </p>
                        </div>
                        <div className="bg-white shadow border ml-6 w-3/12 rounded-lg">
                            <div className="flex flex-col p-4">
                                <p className="text-gray-700 font-bold">Atur jumlah dan catatan</p>
                                <div className="flex mt-3 items-center">
                                    <FaMinusCircle className="text-green-400 text-lg" />
                                    <input type="number" min="1" className="w-20 appearance-none outline-none border-b" />
                                    <FaPlusCircle className="text-green-400 text-lg" />
                                    <p className="ml-4">Stok <b>50</b></p>
                                </div>
                                <div className="flex flex-col mt-6">
                                    <div className={catatan ? "block mb-2": 'hidden'}>
                                        <input type="text" className="outline-none w-full border border-gray-200 focus:border-green-500 rounded-lg p-2" placeholder="Contoh: warna putih, size M" />
                                    </div>
                                    <button className="text-green-400 flex text-sm" onClick={toggleCatatan}>
                                        <FaPencilAlt className={catatan ? 'hidden':'block'} />
                                        <p className="ml-2 font-bold">{catatan ? 'Batalkan Catatan':'Tambahkan catatan'}</p>
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
                </div>
            </main>
        </div>
    )
}

export default Product
