import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
       <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-gray-100 dark:border-gray-100 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-lg">
          <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
              <div className="text-primary size-7 text-[rgb(37,89,137)]">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight">HomeNest</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-8">
              <nav className="flex items-center gap-6">
                <a
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  All Properties
                </a>
                <a
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  Add Property
                </a>
                <a
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  My Properties
                </a>
                <a
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  My Ratings
                </a>
              </nav>
              <div className="flex items-center gap-2">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 text-text-light dark:bg-slate-100 dark:text-text-dark text-sm font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-slate-200 transition-colors">
                  <span className="truncate">Login</span>
                </button>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[rgb(37,89,137)] text-white text-sm font-bold tracking-wide hover:bg-[rgb(42,100,154)] transition-colors">
                  <span className="truncate">Signup</span>
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-md hover:bg-secondary dark:hover:bg-slate-700">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
