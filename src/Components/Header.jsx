import React,{useState} from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../Context/AuthContext.jsx";
import {  toast } from "react-hot-toast";
import { HiMenu, HiX } from 'react-icons/hi';



const Header = () => {
  const { user,userSignOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  const { setLoading } = useAuth();
  const NavberLinks = [
            { to: "/home", label: "Home" },
            { to: "/all-property", label: "All Properties" },
            { to: "/add-property", label: "Add Property" },
            { to: "/my-property", label: "My Properties" },
            { to: "/my-ratings", label: "My Ratings" },
          ]

   const handleSignOut = () => {
    userSignOut()
      .then((res) => {
        toast.success("Logged out successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to log out");
        setLoading(false);
        console.log(err);
      });
    }

  return (
    <div className="block w-full mb-16">
     <header
  className="
    fixed top-0 z-50 w-full
    flex items-center justify-center
    whitespace-nowrap
    border-b border-solid border-gray-100 dark:border-gray-100
 
    backdrop-blur-sm shadow-lg
  "
>
        <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <div className="flex items-center justify-center gap-1 lg:gap-2">
            <div className="hidden lg:block text-primary size-7 text-[rgb(37,89,137)]">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"></path>
              </svg>
            </div>
                   <div className='lg:hidden flex-shrink-0'>
          <button onClick={toggleMenu} className='text-black text-3xl'>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

            <h2 className="text-xl font-bold tracking-tight">
              HomeNest
            </h2>
          </div>
          </div>
          <div className="flex flex-1 justify-end gap-8">
     
              <nav className="hidden lg:flex items-center gap-6">
              {NavberLinks.map((item) => (
                  <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[rgb(37,89,137)] font-semibold"
                    : "text-black dark:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      {isOpen && (
  <div
    className="
      fixed top-16 left-0 w-full
      flex flex-col items-center py-4 space-y-4
      z-40 lg:hidden dark:border-gray-100
      bg-white/90 dark:bg-white/90
      backdrop-blur-lg shadow-lg
      transition-all duration-300 ease-in-out
    "
  >
    {NavberLinks.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `text-lg font-medium transition-colors ${
            isActive
              ? "text-[rgb(37,89,137)] font-semibold"
              : "text-black dark:text-black"
          }`
        }
        onClick={toggleMenu}
      >
        {item.label}
      </NavLink>
    ))}
  </div>
)}


            {
               user ? (
               <div className="flex gap-2 ">
                <button
                  onClick={handleSignOut}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 text-text-light dark:bg-slate-100 dark:text-text-dark text-sm font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-slate-200 transition-colors"
                >
                  <span className="truncate">Log out</span>
                </button>
                <div className="relative">
                  <div className="group">
                    <div to="/">
                    <img
                      src={
                        user?.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.displayName
                        )}&background=0D8ABC&color=fff`
                      }
                      alt={user.displayName}
                      className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                      title={user.displayName} // simple native fallback
                      />
                      </div>
                    {/* Tooltip: visible on hover/focus */}
                    <div className="pointer-events-none absolute right-1/2 translate-x-1/2 -bottom-10 transform opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100">
                      <div className="bg-neutral-900 text-white text-[14px] px-3 py-1 rounded-md shadow-md whitespace-nowrap">
                        {user.displayName}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              ) : (
                 <div className="flex items-center gap-2">
              <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-2 md:px-4 bg-slate-100 text-text-light dark:bg-slate-100 dark:text-text-dark text-sm font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-slate-200 transition-colors">
                <span className="truncate">Login</span>
              </Link>
              <Link to="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-2 md:px-4 bg-[rgb(37,89,137)] text-white text-sm font-bold tracking-wide hover:bg-[rgb(42,100,154)] transition-colors">
                <span className="truncate">Signup</span>
              </Link>
            </div>
              )

            }
           
          </div>
          {/* <div className="hidden">
              <button className="p-2 rounded-md hover:bg-secondary dark:hover:bg-slate-700">
                <span className="material-symbols-outlined">menu</span>
              </button> 
            </div>*/}
        </div>
      </header>
    </div>
  );
};

export default Header;
