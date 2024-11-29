import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../../partials/SidebarAdmin";
import Header from "../../../partials/Header";

const CategoryDetailPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Category Details
  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        // 1. Cek token
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // 2. Loading state
        setLoading(true);
        setError(null);

        // 3. Konfigurasi request
        const config = {
          method: "get",
          url: `http://localhost:3000/api/kategori/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

        // 4. Fetch data dengan axios
        const response = await axios(config);

        // 5. Validasi response
        if (!response.data || !response.data.kategori) {
          throw new Error("Data kategori tidak ditemukan");
        }

        // 6. Set data kategori
        const categoryData = response.data.kategori;

        // 7. Update state
        setCategory(categoryData);
        setEditedName(categoryData.name);

        // 8. Tambahan informasi (opsional)
        console.log("Category Details:", categoryData);
      } catch (err) {
        // 9. Error handling terperinci
        console.error("Fetch Category Details Error:", err);

        // Reset state
        setCategory(null);
        setEditedName("");

        // Tangani berbagai jenis error
        if (err.response) {
          // Error dari server dengan response
          switch (err.response.status) {
            case 401:
              // Token expired atau tidak valid
              localStorage.removeItem("token");
              navigate("/login");
              break;
            case 404:
              setError("Kategori tidak ditemukan");
              break;
            default:
              setError(
                err.response.data.message || "Gagal mengambil detail kategori"
              );
          }
        } else if (err.request) {
          // Request terkirim tapi tidak ada response
          setError(
            "Tidak dapat terhubung ke server. Periksa koneksi internet."
          );
        } else {
          // Error lainnya
          setError("Terjadi kesalahan dalam memproses permintaan.");
        }
      } finally {
        // 10. Matikan loading
        setLoading(false);
      }
    };

    // Panggil fungsi fetch
    fetchCategoryDetails();
  }, [id, navigate]);

  // Handle Edit Category
  const handleEditCategory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Validasi nama kategori
      if (!editedName.trim()) {
        alert("Nama kategori tidak boleh kosong!");
        return;
      }

      const response = await axios.put(
        `http://localhost:3000/api/kategori/edit/${id}`,
        { name: editedName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Update kategori di state
      setCategory((prevCategory) => ({
        ...prevCategory,
        name: editedName,
      }));

      // Keluar dari mode edit
      setEditMode(false);
      alert("Kategori berhasil diperbarui!");
    } catch (err) {
      console.error("Edit Category Error:", err);
      if (err.response) {
        alert(err.response.data.message || "Gagal memperbarui kategori");
      } else {
        alert("Terjadi kesalahan dalam memperbarui kategori");
      }
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden dark:bg-gray-900 dark:text-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow p-6">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Detail Kategori
            </h1>

            {editMode ? (
              // Edit Mode
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="categoryName"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nama Kategori
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                  />
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handleEditCategory}
                    className="bg-[#7AB434] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={() => {
                      setEditMode(false);
                      setEditedName(category.name);
                    }}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </div>
            ) : (
              // Detail Mode
              <div>
                <div className="mb-4">
                  <label className="block text-gray-600 dark:text-gray-300 mb-2">
                    Nama Kategori
                  </label>
                  <div className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200">
                    {category?.name || "Nama Kategori Tidak Tersedia"}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-[#7AB434] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate("/kategori-admin")}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
