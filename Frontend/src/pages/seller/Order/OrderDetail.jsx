import React, { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import CardPembeli from "../../../partials/order/CardPembeli";
import CardProduk from "../../../partials/order/CardProduk";

const DetailPesanan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main content */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content */}
        <main className="grow px-4 sm:px-6 lg:px-8 py-8 w-full">
          <h1 className="text-2xl font-bold mb-6">Detail Pesanan</h1>
          <CardPembeli />
          <CardProduk />

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button className="bg-red-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-red-600">
              Tolak Pesanan
            </button>
            <button className="bg-[#7AB434] text-white py-2 px-6 rounded-md font-semibold hover:bg-[#6A9A2D]">
              Proses Pesanan
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailPesanan;