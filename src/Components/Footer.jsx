import React from 'react'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
       <footer className="bg-slate-900 text-white mt-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="text-white size-7">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">HomeNest</h2>
              </div>
              <p className="mt-4 text-slate-400 text-sm">
                Find your next home with confidence.
              </p>
              <div className="mt-4">
                <p className="text-sm text-slate-400">contact@homenest.com</p>
                <p className="text-sm text-slate-400">(555) 123-4567</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase">Quick Links</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link className="text-slate-400 hover:text-white text-sm" to="/">
                 Home
                </Link>
                <Link className="text-slate-400 hover:text-white text-sm" to="/all-property">
                  All Property
                </Link>
                <Link className="text-slate-400 hover:text-white text-sm" to="/add-property">
                  Add Property
                </Link>
                <Link className="text-slate-400 hover:text-white text-sm" to="/my-property">
                 My Property
                </Link>
                
              </nav>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase">Legal</h3>
              <nav className="mt-4 flex flex-col gap-2">
                <Link className="text-slate-400 hover:text-white text-sm" to="/">
                  Terms &amp; Conditions
                </Link>
                <Link className="text-slate-400 hover:text-white text-sm" to="/">
                  Privacy Policy
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase">Follow Us</h3>
              <div className="flex gap-4 mt-4">
                {/* Social icons */}
                <FaSquareXTwitter size={20} className="hover:text-white text-slate-400 cursor-pointer"/>
                <FaFacebookF size={20} className="hover:text-white text-slate-400 cursor-pointer"/>
                <FaInstagram size={20} className="hover:text-red-500 text-slate-400 cursor-pointer"/>
                <FaYoutube size={22} className="hover:text-red-500 text-slate-400 cursor-pointer"/>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            © 2024 HomeNest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
