import React, { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// Data dummy seller dengan 15 entri
const sellers = [
  { name: "Janet Adebayo", shopName: "Adebayo Store", email: "janet@gmail.com", phone: "+6284085650633", status: "Active" },
  { name: "John Doe", shopName: "Doe Mart", email: "john@gmail.com", phone: "+6284012345678", status: "Inactive" },
  // ... (data seller lainnya)
];

const ITEMS_PER_PAGE = 10;

const SellerTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan pencarian
  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase()) ||
    seller.shopName.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredSellers.length / ITEMS_PER_PAGE);
  const paginatedSellers = filteredSellers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      {/* Search Bar */}
      <div className="mb-4 flex justify-end items-center">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Search by Seller or Shop"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute top-3 left-3 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      {/* Tabel */}
      <table className="w-full bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-300">
        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="p-3 text-left">Nama Seller <FiFilter className="inline ml-1 text-gray-500" /></th>
            <th className="p-3 text-left">Nama Toko <FiFilter className="inline ml-1 text-gray-500" /></th>
            <th className="p-3 text-left">Email <FiFilter className="inline ml-1 text-gray-500" /></th>
            <th className="p-3 text-left">Telepon <FiFilter className="inline ml-1 text-gray-500" /></th>
            <th className="p-3 text-left">Status <FiFilter className="inline ml-1 text-gray-500" /></th>
          </tr>
        </thead>
        <tbody>
          {paginatedSellers.map((seller, index) => (
            <tr
              key={index}
              className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300"
            >
              <NavLink to={`/seller/detail`} className="contents">
                <td className="p-3 text-gray-800 dark:text-gray-300">{seller.name}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{seller.shopName}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{seller.email}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{seller.phone}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${seller.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"}`}>
                    {seller.status}
                  </span>
                </td>
              </NavLink>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-gray-700 dark:text-gray-300">
        <div>
          Items per page: {ITEMS_PER_PAGE}
        </div>
        <div>
          <button
            className="px-3 py-1 border rounded-l-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 border rounded-r-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerTable;
