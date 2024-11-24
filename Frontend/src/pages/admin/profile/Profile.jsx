import React from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";

const ProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-4">
        <Header />

        <div className="bg-white rounded-lg shadow-md p-8 mt-4 mx-4 relative">
          <div className="flex justify-center mb-6">
            <img
              src="images/user-36-06.jpg"
              alt="Profile"
              className="w-24 h-24 object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
            {/* Left Section */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center md:text-left">
                Jonner Marpaung
              </h2>
              <p className="text-gray-500">Telepon</p>
              <p className="text-gray-700 mb-4">+6248065650633</p>

              <p className="text-gray-500">Alamat</p>
              <p className="text-gray-700 mb-4">
                Jalan Sitoluama, Laguboti, Sumatera Utara
              </p>

              <p className="text-gray-500">Umur</p>
              <p className="text-gray-700 mb-4">24 tahun</p>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <p className="text-gray-500">Email</p>
              <p className="text-gray-700 mb-4">admin@gmail.com</p>

              <p className="text-gray-500">Jenis Kelamin</p>
              <p className="text-gray-700 mb-4">Laki-laki</p>

              <p className="text-gray-500">Tanggal Bergabung</p>
              <p className="text-gray-700 mb-4">12 Oktober 2024</p>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-[#7AB434] text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
