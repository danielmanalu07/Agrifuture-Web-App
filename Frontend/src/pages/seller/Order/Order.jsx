import React, { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import OrderTable from "../../../partials/order/tabelOrder";

const ordersData = [
  {
    buyerName: "Alex Johnson",
    buyerProfile: "buyer1.jpg",
    product: "Produk X",
    quantity: 2,
    totalPrice: "Rp 50.000",
    paymentStatus: "Completed",
  },
  {
    buyerName: "Sarah Williams",
    buyerProfile: "buyer2.jpg",
    product: "Produk Y",
    quantity: 1,
    totalPrice: "Rp 20.000",
    paymentStatus: "Pending",
  },
  // Tambahkan data pesanan lain jika diperlukan
];

const Order = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main content */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Main content area */}
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Pesanan</h1>
            </div>

            {/* Order Table */}
            <OrderTable orders={ordersData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Order;
