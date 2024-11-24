// SellerCard.js
import React from "react";

const SellerCard = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 mb-6">
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        {/* Photo */}
        <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
          <img
            src="/images/user-36-05.jpg" // Replace with actual seller's image
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Name and Shop Name */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Jonner Marpaung
          </h2>
          <p className="text-gray-600 dark:text-gray-400">UD Marpaung</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column (Telepon, Alamat, Umur) */}
        <div>
          <p className="text-gray-600 dark:text-gray-400">Telepon</p>
          <p className="text-gray-800 dark:text-gray-100">+628065650633</p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Alamat</p>
          <p className="text-gray-800 dark:text-gray-100">
            Jalan Sitoluama, Laguboti, Sumatera Utara
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Umur</p>
          <p className="text-gray-800 dark:text-gray-100">28 tahun</p>
        </div>

        {/* Right Column (Email, Jenis Kelamin, Tanggal Lahir) */}
        <div>
          <p className="text-gray-600 dark:text-gray-400">Email</p>
          <p className="text-gray-800 dark:text-gray-100">jonner@gmail.com</p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Jenis Kelamin</p>
          <p className="text-gray-800 dark:text-gray-100">Laki-laki</p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Tanggal Lahir</p>
          <p className="text-gray-800 dark:text-gray-100">15 Agustus 1996</p>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
