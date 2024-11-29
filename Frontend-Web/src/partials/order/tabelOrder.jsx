// src/components/OrderTable.jsx
import React, { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const OrderTable = ({ orders }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter orders based on search
  const filteredOrders = orders.filter((order) =>
    order.buyerName.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4">
      {/* Search Bar and Filter Button */}
      <div className="mb-4 flex justify-between items-center">
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
        <button className="ml-2 px-4 py-2 bg-gray-200 rounded-md text-gray-700 flex items-center hover:bg-gray-300 transition">
          <FiFilter className="mr-2" />
          Filter
        </button>
      </div>

      {/* Order Table */}
      <table className="w-full bg-white dark:bg-gray-900 border rounded-lg shadow-sm">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-3 text-left">Pembeli</th>
            <th className="p-3 text-left">Produk</th>
            <th className="p-3 text-left">Jumlah</th>
            <th className="p-3 text-left">Total Harga</th>
            <th className="p-3 text-left">Status Pembayaran</th>
            <th className="p-3 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order, index) => (
            <tr
              key={index}
              className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            >
              <td className="p-3 flex items-center space-x-3">
                <img
                  src='/images/user-36-09.jpg'
                  alt={order.buyerName}
                  className="w-10 h-10 rounded-full"
                />
                <span>{order.buyerName}</span>
              </td>
              <td className="p-3">{order.product}</td>
              <td className="p-3">{order.quantity}</td>
              <td className="p-3">{order.totalPrice}</td>
              <td className="p-3">{order.paymentStatus}</td>
              <td className="p-3">
                <NavLink
                  to={`/order/detail`}
                  className="bg-[#7AB434] text-white px-3 py-1 rounded-lg shadow-md hover:bg-green-600 transition-colors"
                >
                  Detail
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
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
  );
};

export default OrderTable;
