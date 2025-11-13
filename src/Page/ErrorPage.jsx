import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 items-center justify-center py-10 sm:py-20">
          <div className="layout-content-container flex w-full max-w-xl flex-col items-center">
            
            {/* Icons */}
            {/* <div className="flex items-center justify-center px-4 py-3 text-[#FFC107]">
              <span className="material-symbols-outlined text-8xl">house</span>
              <span className="material-symbols-outlined -ml-4 -mt-6 text-5xl text-primary dark:text-white">
                help
              </span>
            </div> */}

            {/* Error Code */}
            <h1 className="text-[rgb(37,89,137)] dark:text-[rgb(37,89,137)] text-8xl font-black leading-tight text-center pb-3 pt-4">
              404
            </h1>

            {/* Error Message */}
            <div className="flex flex-wrap justify-between gap-3 p-4 text-center">
              <div className="flex w-full flex-col items-center gap-3">
                <p className="text-gray-900 dark:text-black text-3xl font-bold leading-tight tracking-tight">
                  Oops! We can't find that page.
                </p>
                <p className="text-[#6C757D] dark:text-gray-600 text-base font-normal leading-normal max-w-md">
                  Sorry, the page you are looking for doesn't exist. The link
                  may be broken, or the page may have been moved.
                </p>
              </div>
            </div>

            {/* Go to Homepage Button */}
            <div className="flex w-full max-w-sm px-4 py-3 justify-center">
              <Link to="/"
               
                className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[rgb(37,89,137)] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Go to Homepage</span>
              </Link>
            </div>

            {/* Search Input */}
            {/* <div className="w-full max-w-sm px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#6C757D] dark:text-gray-400 flex border-none bg-white dark:bg-background-dark/50 items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for a city, address, or neighborhood..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white dark:bg-background-dark/50 h-full placeholder:text-[#6C757D] dark:placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div> */}

          </div>
        </main>
      </div>
    </div>
  );
};

export default ErrorPage;
