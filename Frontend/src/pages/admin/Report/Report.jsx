import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import ReportTable from "../../../partials/report/ReportTableAdmin";

const sellers = [
  // Data contoh seller dengan 15 entri
  { sellerName: "Janet Adebayo", sellerCode: "S001", totalSales: 1500000, storeName: "Janet Store" },
  { sellerName: "John Doe", sellerCode: "S002", totalSales: 1200000, storeName: "Doe Mart" },
  { sellerName: "Jane Smith", sellerCode: "S003", totalSales: 900000, storeName: "Jane's Goods" },
  { sellerName: "Alice Johnson", sellerCode: "S004", totalSales: 500000, storeName: "Alice's Market" },
  // ... data lainnya
];

const ITEMS_PER_PAGE = 10;

const Report = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan pencarian
  const filteredSellers = sellers.filter((seller) =>
    seller.sellerName.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredSellers.length / ITEMS_PER_PAGE);
  const paginatedSellers = filteredSellers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex h-screen overflow-hidden dark:bg-gray-900 dark:text-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Laporan Penjualan
                </h1>
              </div>
              <button
                className="bg-[#7AB434] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors"
                onClick={() => alert('Export Laporan')}
              >
                Export Laporan
              </button>
            </div>
            <div className="flex justify-end items-center mb-8">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <FiSearch className="absolute top-3 left-3 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <ReportTable sellers={paginatedSellers} />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>Items per page: {ITEMS_PER_PAGE}</div>
              <div>
                <button
                  className="px-3 py-1 border rounded-l-md"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span className="px-4">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="px-3 py-1 border rounded-r-md"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Report;
