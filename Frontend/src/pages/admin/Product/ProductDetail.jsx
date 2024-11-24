import React, { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import OrderTablePage from "../../../partials/detailProduk/OrderTabelPage";

const DetailProdukPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false); // State untuk mode edit
  const [formData, setFormData] = useState({
    namaProduk: "Ecofert",
    namaToko: "UD Marpaung",
    deskripsi:
      "Ecofert adalah pupuk hayati yang mengandung mikroorganisme yang bermanfaat untuk kesuburan tanah. Pupuk ini dapat digunakan untuk tanaman pangan, hortikultura, dan perkebunan.",
    kategori: "Organik",
    harga: "Rp 23,000.00",
    stok: "13",
  });

  // Handle perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle mode edit
  const toggleEditMode = () => {
    setIsEditable((prev) => !prev);
  };

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
                  Detail Produk
                </h1>
              </div>

              {/* Button Edit */}
              <button
                onClick={toggleEditMode}
                className="px-4 py-2 bg-[#7AB434] hover:bg-[#6AA22F] text-white rounded-lg"
              >
                {isEditable ? "Simpan" : "Edit"}
              </button>
            </div>

            {/* Section dengan Background Putih */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Kolom Kiri - Form Detail */}
                <div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Nama Produk
                      </label>
                      <input
                        type="text"
                        name="namaProduk"
                        value={formData.namaProduk}
                        readOnly={!isEditable}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Nama Toko
                      </label>
                      <input
                        type="text"
                        name="namaToko"
                        value={formData.namaToko}
                        readOnly={!isEditable}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Deskripsi
                      </label>
                      <textarea
                        name="deskripsi"
                        readOnly={!isEditable}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 mt-1"
                        rows="5"
                        value={formData.deskripsi}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Kategori
                      </label>
                      <input
                        type="text"
                        name="kategori"
                        value={formData.kategori}
                        readOnly={!isEditable}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                          Harga (/kg)
                        </label>
                        <input
                          type="text"
                          name="harga"
                          value={formData.harga}
                          readOnly={!isEditable}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                          Stok
                        </label>
                        <input
                          type="text"
                          name="stok"
                          value={formData.stok}
                          readOnly={!isEditable}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 mt-1"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Kolom Kanan - Gambar Produk */}
                <div className="flex items-center justify-center">
                  <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg w-[400px]">
                    <img
                      src="/images/pupuk1.png"
                      alt="Ecofert"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <OrderTablePage />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailProdukPage;
