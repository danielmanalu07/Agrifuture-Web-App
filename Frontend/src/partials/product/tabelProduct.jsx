import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiEye, FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Mengimpor ikon panah kiri dan kanan

// Data produk contoh
const products = [
  { id: 1, image: "/images/pupuk1.png", name: "Ecofert", category: "Fashion", price: "Rp50.000", stock: 5, views: 10, likes: 15, sales: 50 },
  { id: 2, image: "/images/pupuk1.png", name: "Ecofert", category: "Accessories", price: "Rp100.000", stock: 2, views: 8, likes: 5, sales: 20 },
  { id: 3, image: "/images/pupuk1.png", name: "Ecofert", category: "Fashion", price: "Rp75.000", stock: 13, views: 25, likes: 30, sales: 100 },
  { id: 4, image: "/images/pupuk1.png", name: "Ecofert", category: "Electronics", price: "Rp100.000", stock: 10, views: 50, likes: 60, sales: 150 },
  { id: 5, image: "/images/pupuk1.png", name: "Ecofert", category: "Fashion", price: "Rp50.000", stock: 20, views: 60, likes: 25, sales: 75 },
  { id: 6, image: "/images/pupuk1.png", name: "Ecofert", category: "Fashion", price: "Rp200.000", stock: 10, views: 45, likes: 35, sales: 110 },
  { id: 7, image: "/images/pupuk1.png", name: "Ecofert", category: "Electronics", price: "Rp120.000", stock: 8, views: 30, likes: 40, sales: 90 },
  { id: 8, image: "/images/pupuk1.png", name: "Ecofert", category: "Fashion", price: "Rp55.000", stock: 3, views: 20, likes: 10, sales: 60 },
  { id: 9, image: "/images/pupuk1.png", name: "Ecofert", category: "Accessories", price: "Rp45.000", stock: 18, views: 18, likes: 22, sales: 85 },
  { id: 10, image: "/images/pupuk1.png", name: "Ecofert", category: "Electronics", price: "Rp95.000", stock: 6, views: 12, likes: 5, sales: 30 },
  { id: 11, image: "/images/pupuk1.png", name: "Ecofert", category: "Fashion", price: "Rp150.000", stock: 12, views: 40, likes: 10, sales: 70 },
  { id: 12, image: "/images/pupuk1.png", name: "Ecofert", category: "Accessories", price: "Rp80.000", stock: 7, views: 50, likes: 45, sales: 120 }
];

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1); // Menyimpan halaman yang aktif
  const itemsPerPage = 10;

  // Menghitung produk yang akan ditampilkan berdasarkan halaman
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(products.length / itemsPerPage); // Menghitung total halaman

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Pindah ke halaman berikutnya
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Kembali ke halaman sebelumnya
    }
  };

  return (
    <div className="container">
      <div className="search-bar">
        <h2>Daftar Produk</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Cari Produk"
        />
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <NavLink
            to={`/produk/detail`}
            key={product.id}
            className="product-card"
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="p-4">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-stock">Stok: {product.stock}</p>
              <div className="product-stats">
                <div className="stat">
                  <FiEye /> {product.views}
                </div>
                <div className="stat">
                  <FiHeart /> {product.likes}
                </div>
                <span>{product.sales} Penjualan</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      {/* Navigasi untuk berpindah antar halaman */}
      <div className="pagination">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          <FiChevronLeft /> {/* Ikon panah kiri */}
        </button>

        <span>
          Halaman {currentPage} dari {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          <FiChevronRight /> {/* Ikon panah kanan */}
        </button>
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
          background-color: #f9fafb;
          min-height: 100vh;
        }

        .search-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .search-input {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db;
          width: 300px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr); /* 5 kolom pada desktop */
          gap: 1rem;
        }

        .product-card {
          background-color: white;
          border-radius: 0.375rem;
          padding: 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 0.375rem;
        }

        .product-name {
          font-weight: 600;
          margin-top: 1rem;
          color: #333;
        }

        .product-price {
          color: #7AB434;
          font-weight: bold;
          margin-top: 0.5rem;
        }

        .product-stock {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        .product-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .stat {
          display: flex;
          align-items: center;
        }

        .stat svg {
          margin-right: 0.5rem;
        }

        /* Responsif: 3 kolom pada tablet, 2 kolom pada ponsel */
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Style pagination */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }

        .pagination-btn {
          padding: 0.5rem 1rem;
          background-color: #4caf50;
          border: none;
          color: white;
          font-size: 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .pagination-btn:disabled {
          background-color: #d1d5db;
          cursor: not-allowed;
        }

        .pagination-btn:hover:not(:disabled) {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default ProductTable;
