import React from "react";
import { IoIosSearch } from "react-icons/io";
import AllPropertyCard from "../Components/AllPropertyCard";

const AllProperty = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
      
       {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h1 className="text-gray-900 dark:text-black text-4xl font-black leading-tight tracking-[-0.033em]">
                Find Your Next Home
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-background-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="flex flex-col w-full h-12 flex-1">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-gray-100 dark:bg-gray-100 items-center justify-center pl-4 rounded-l-lg">
                      <IoIosSearch size={24}  />
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-black  focus:outline-0 focus:ring-0 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-100 h-full  px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      placeholder="Search by Property name..."
                      value=""
                    />
                  </div>
                </label>
                <button className="flex w-full md:w-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-500 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-400 transition-colors">
                  <span className="truncate">Search</span>
                </button>
              </div>

              {/* Filters */}

              <div className="flex flex-wrap gap-3 items-center">
                <select
                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-gray-100  px-5 hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors cursor-pointer font-medium text-sm"
                  >
                    <option className="text-sm font-medium ">Sort By </option>
                    <option className="text-sm font-medium">Newest</option>
                    <option className="text-sm font-medium">Oldest</option>

                  </select>
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  type: "For Rent",
                  title: "Modern Downtown Loft",
                  location: "San Francisco, CA",
                  price: "$2,500/mo",
                  postedBy: "Jane Doe",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAPEcZVjF8LG2WgvRTXgeoQ3_Vp5H1s-7t_E8VX7RWhsVQj_NT0OF39d9XiGijYeqJFW-rT7m0FRoMelLrbnPjJ7drQIqhjaHLvVfvrUfL1T3Xjdj0xgFF4Ku60D6naGlj_UUEdsyZuxq2S60tQxKtXYL19_7kW9hXCIYsNwGm0Bc062cxuaEsy2LKIwTjmJleczFYqv6kvhIgF5HsiyPUODyx-f5k5FSWy9lmBmIBzDA2MM17bpctN8HeVLnjHmcmPyi2G1fC1B6I",
                },
                {
                  type: "For Sale",
                  title: "Cozy Suburban House",
                  location: "Austin, TX",
                  price: "$450,000",
                  postedBy: "John Smith",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCRfXTR6J_Ab10C4Ty6TZ0NJOCpuaWCULAdfGSLjLfOm_8M7gBH4NY4rKTxtY91zZLqiFeWTlZfdclKF7pXhavQ4jeaZaLmjHkoniHrrmzPvnBQUow7BqAmJld6Uan0-cM3uh_nbDV-xn0xmhdDir0OLQSYI-HMaWjo3QvhbqHiMg5FqcsCmINnEsn_Pc1DL9mAzygZDxrsGzAmP7Yepctnwu2TzCMYcQ5u7BH1m6HpuRh62wR0yvLqj4K5_dpfCajQK98FTF6CGmY",
                },
                // Add other properties here similarly
              ].map((property, idx) => <AllPropertyCard key={idx} property={property} idx={idx} />)}
            </div>

            {/* Pagination */}
            {/* <div className="flex items-center justify-center pt-8">
              <nav aria-label="Pagination" className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center size-9 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                {[1, 2, 3, "...", 10].map((page, idx) => (
                  <button
                    key={idx}
                    className={`inline-flex items-center justify-center size-9 rounded-lg font-medium transition-colors ${
                      page === 1
                        ? "text-white bg-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="inline-flex items-center justify-center size-9 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </nav>
            </div> */}
          </div>
        </main>

      </div>
    </div>
  );
};

export default AllProperty;
