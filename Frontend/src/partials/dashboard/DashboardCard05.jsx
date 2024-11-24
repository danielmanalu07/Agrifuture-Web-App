import React from 'react';

import Image01 from '../../images/pupuk1.png';
import Image02 from '../../images/pupuk1.png';
import Image03 from '../../images/pupuk1.png';
import Image04 from '../../images/pupuk1.png';
import Image05 from '../../images/pupuk1.png';

function DashboardCard05() {

  const products = [
    {
      id: '0',
      image: Image01,
      name: 'Product 1',
      price: '$120.66',
      rating: 4.5,
    },
    {
      id: '1',
      image: Image02,
      name: 'Product 2',
      price: '$110.50',
      rating: 4.0,
    },
    {
      id: '2',
      image: Image03,
      name: 'Product 3',
      price: '$150.00',
      rating: 5.0,
    },
    {
      id: '3',
      image: Image04,
      name: 'Product 4',
      price: '$80.99',
      rating: 3.5,
    },
    {
      id: '4',
      image: Image05,
      name: 'Product 5',
      price: '$99.99',
      rating: 4.8,
    },
    {
      id: '5',
      image: Image05,
      name: 'Product 5',
      price: '$99.99',
      rating: 4.95,
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Products</h2>
      </header>      
      <div className="p-3">

        {/* Product List */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => {
              return (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
                  <img className="w-full h-48 object-cover rounded-t-xl" src={product.image} alt={product.name} />
                  <div className="mt-4">
                    <div className="font-medium text-gray-800 dark:text-gray-100">{product.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{product.price}</div>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill={index < product.rating ? "yellow" : "gray"}
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.32 0-.63-.128-.854-.354l-3.25-3.25a1.208 1.208 0 0 1 0-1.708l3.25-3.25a1.208 1.208 0 0 1 1.708 0l3.25 3.25a1.208 1.208 0 0 1 0 1.708l-3.25 3.25a1.208 1.208 0 0 1-.854.354z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardCard05;
