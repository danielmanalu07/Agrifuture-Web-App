import React from "react";
import { Icon } from "@iconify/react";

function DashboardCard02() {
  // Data penjualan
  const userAmount = "678";

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-4 pb-4">
        <header className="flex items-center mb-2">
          <Icon
            icon="mdi:user-outline"
            className="w-12 h-12 text-gray-800 dark:text-gray-100 mr-2"
          />
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase">
            Pengguna
          </div>
        </header>
        <div className="flex items-center justify-between pt-8">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {userAmount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
