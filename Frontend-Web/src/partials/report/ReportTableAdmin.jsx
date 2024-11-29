// ReportTable.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FiFilter } from "react-icons/fi";

const ReportTable = ({ sellers }) => {
  return (
    <table className="w-full bg-white dark:bg-gray-900 border rounded-lg shadow-sm">
      <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
        <tr>
          <th className="p-3 text-left">
            Nama Seller <FiFilter className="inline ml-1 text-gray-500" />
          </th>
          <th className="p-3 text-left">
            Kode Seller <FiFilter className="inline ml-1 text-gray-500" />
          </th>
          <th className="p-3 text-left">
            Total Penjualan <FiFilter className="inline ml-1 text-gray-500" />
          </th>
          <th className="p-3 text-left">
            Nama Toko <FiFilter className="inline ml-1 text-gray-500" />
          </th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {sellers.map((seller, index) => (
          <tr
            key={index}
            className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <td className="p-3">{seller.sellerName}</td>
            <td className="p-3">{seller.sellerCode}</td>
            <td className="p-3">Rp {seller.totalSales.toLocaleString("id-ID")}</td>
            <td className="p-3">{seller.storeName}</td>
            <td className="p-3">
              <NavLink to="/laporan/detail" className="text-blue-500 hover:underline">
                Detail
              </NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
