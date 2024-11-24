import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import ProductCountCard from "../../../partials/product/productCount";
import ProductTable from "../../../partials/product/tabelProduct";

const ProductPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Contoh data produk untuk tabel
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = [
        {
          id: 1,
          name: "produk1",
          category: "Kategori 1",
          price: "100.000",
          store: "Toko A",
          stock: 50,
          image: "produk1.png",
        },
        {
          id: 2,
          name: "produk1",
          category: "Kategori 2",
          price: "200.000",
          store: "Toko B",
          stock: 30,
          image: "produk.jpg",
        },
        {
          id: 1,
          name: "produk1",
          category: "Kategori 1",
          price: "100.000",
          store: "Toko A",
          stock: 50,
          image: "produk1.png",
        },
        {
          id: 2,
          name: "produk1",
          category: "Kategori 2",
          price: "200.000",
          store: "Toko B",
          stock: 30,
          image: "produk.jpg",
        },
        {
          id: 1,
          name: "produk1",
          category: "Kategori 1",
          price: "100.000",
          store: "Toko A",
          stock: 50,
          image: "produk1.png",
        },
        {
          id: 2,
          name: "produk1",
          category: "Kategori 2",
          price: "200.000",
          store: "Toko B",
          stock: 30,
          image: "produk.jpg",
        },
        {
          id: 1,
          name: "produk1",
          category: "Kategori 1",
          price: "100.000",
          store: "Toko A",
          stock: 50,
          image: "produk1.png",
        },
        {
          id: 2,
          name: "produk1",
          category: "Kategori 2",
          price: "200.000",
          store: "Toko B",
          stock: 30,
          image: "produk.jpg",
        },
        // Tambahkan produk lainnya sesuai kebutuhan
      ];
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden dark:bg-gray-900 dark:text-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page title */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Product
                </h1>
              </div>
              <button className="bg-[#7AB434] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors">
                <NavLink to="/tambah-produk">Tambah Produk</NavLink>
              </button>
            </div>

            {/* Product Count Card */}
            <div className="grid grid-cols-12 gap-6 mb-8">
              <div className="col-span-12">
                <ProductCountCard count={products.length} />
              </div>
            </div>

            {/* Product Table */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <ProductTable products={products} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
