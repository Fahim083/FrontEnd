import React from "react";

// components
import Header from "../Components/Header";
import Footer from "../Components/Footer.jsx";
import AllPropertyCard from "../Components/AllPropertyCard.jsx";
import HeroSection from "../Components/HeroSection.jsx";

// icons
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdOutlineFilterAlt } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

// photos
import property1 from "../assets/category1.png";
import property2 from "../assets/category2.png";
import property3 from "../assets/category3.png";
import property4 from "../assets/category4.png";
import Person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import { Link } from "react-router";

const HomePage = () => {
  return (<>
  {/* <Header/> */}
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HeroSection with Slider */}
          {/* <div className="relative w-full mt-5 md:mt-8  lg:mt-10 xl:mt-16 h-[500px] md:h-[600px] my-5 rounded-xl overflow-hidden">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALOpmpvpEKxRxzWHuTUAOsnwJKrAjmXa8nfUktQoINvRs1QbC4puCdfl_2Ixw80mbDE97uKBTqmjjRZnpi6ELEIDCU6dQ5wrpgtA0_Ztblk48wyVzpPmz4Zlco6j23jB-5zPS5XW4_pkH8rLOZ6hBurZbJyadybMwwj9w_gtaZpVKRvO54UQVK3ZEx6g2DcrsPbyTITz9vZkzb8-2WAllEOEDQpWL-4hZC6fKEc9qpRZxyCekGw4r1uwmVhipJO7FvYSy4PvjlC8A")',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
                  The Key to Your New Home
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl font-normal drop-shadow-md">
                  Effortless listings, endless possibilities. Discover a place you'll
                  love to live.
                </p>
                <div className="mt-8 w-full max-w-3xl bg-background-light/90 dark:bg-background-dark/90 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-3">
                  <div className="flex-1 w-full flex items-center bg-secondary dark:bg-slate-700 rounded-md">
                    <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark pl-3">
                      search
                    </span>
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark"
                      placeholder="Enter Location, City..."
                      type="text"
                    />
                  </div>
                  <div className="flex-1 w-full flex items-center bg-secondary dark:bg-slate-700 rounded-md">
                    <span className="material-symbols-outlined text-text-muted-light dark:text-text-muted-dark pl-3">
                      category
                    </span>
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark"
                      placeholder="Property Type"
                      type="text"
                    />
                  </div>
                  <button className="w-full md:w-auto flex-shrink-0 cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-opacity-90 transition-colors">
                    <span className="truncate">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <HeroSection />

         {/* Featured Real Estate Section */}
<section className="py-10">
  <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight">
    Featured Real Estate
  </h2>
  <p className="text-text-muted-light dark:text-text-muted-dark mt-2">
    Explore our handpicked selection of the finest properties available.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {/* Repeat each property card */}
    {[
      {
        type: "For Sale",
        title: "Modern City Apartment",
        location: "New York, NY",
        price: "$850,000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHnEv2YkKt2K3L2arx77bcTmwn5HwIXDs0VUQw5MMlK-CosJkUq-IRyZGP_YTKyIkD1aBWTwig28MS9bni3040vEpnU2COBWohfz3plD5-ZDLKhNtQvlW2UVZXoj-4xtb-UKjdIvc8x3WKhp9xTi3LGizAGq2ytuNX4sA2d2wAHPFBK7N8ngVmGOkz-5ya_9FNoJoY8jRxLMVqwvhEHCXFs5orn0JKDyJr0uYMlnvkzPENDSHq6Br67ArisMchLWaGT9mOs42GqZE",
      },
      {
        type: "For Rent",
        title: "Cozy Suburban House",
        location: "Austin, TX",
        price: "$3,200/mo",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc8AfwXXeOEIuzFv-RjuH_wbulO_n0FVt1HLBT9GMzrq32zR9WS_qZ7BcaF0wlSWQMkxqSsW61hbz1D_LkcjMNgnKWFqYrRLyEgonSMf37x428sAuLw7DnIjq62MiA4diCIQLJWUxodzaIpa47wuiivmBEul2H2K7Mt_Pf4p5kGG0ldoUIDTCBPskbQNxqw2aF6jPkfkfs31zOHcygLuGA021OywCwC9QWiTQeknS7v-NraWAVYsuF7jZOIXxyjN3TJxb-nZ4aRQ0",
      },
      {
        type: "For Sale",
        title: "Luxury Beachfront Villa",
        location: "Miami, FL",
        price: "$3,500,000",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwGrteulyv6949VBde9xebqAtqTxTWbfl7rE6P2Dr1fUKsJnZ6oKwnNv6IEybNP790STOVTwjZwmqIAHzKOrU_O3m0yXwxRoorOepD7UwC13-LER_C8RULrb7LLVJHz42Yxq-qslh2zRqaztbjCfN-1rtAywolXjoqe-Ckz0faF_SOW_AsGy3ev_6hzkn7oDqHdBAcejUwc97TeaKFakCLh8Sv1jYkdVRUbI86VStz-LX3pFCuiBkRc_KmnqT2-rPc5yJ20b6wz5E",
      },
    ].map((property, idx) => <AllPropertyCard key={idx} property={property} idx={idx} />)}
      
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-16 my-10 bg-slate-200 dark:bg-slate-200 rounded-xl">
  <div className="flex flex-col gap-10 px-4 md:px-10">
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight max-w-2xl mx-auto">Why Choose HomeNest?</h1>
      <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal max-w-2xl mx-auto">
        We provide a seamless and trustworthy experience for finding your next home. Our platform is built with you in mind.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   
        <div className="flex flex-1 gap-4 rounded-lg bg-white dark:bg-white p-6 flex-col items-center text-center">
          <div className="text-primary flex items-center justify-center h-12 w-12 rounded-full bg-slate-300">
            <span className="material-symbols-outlined"><MdOutlineVerifiedUser size={22}/></span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Verified Listings</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Every property is carefully reviewed by our team to ensure quality and accuracy.</p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-lg bg-white dark:bg-white p-6 flex-col items-center text-center">
          <div className="text-primary flex items-center justify-center h-12 w-12 rounded-full bg-slate-300">
            <span className="material-symbols-outlined"><MdOutlineFilterAlt size={22}/></span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Advanced Search Filters</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Easily narrow down your options with powerful filters for price, size, and amenities.</p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-lg bg-white dark:bg-white p-6 flex-col items-center text-center">
          <div className="text-primary flex items-center justify-center h-12 w-12 rounded-full bg-slate-200">
            <span className="material-symbols-outlined"><MdSupportAgent size={22}/></span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Expert Support</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">Our dedicated team is here to assist you every step of the way, from search to signing.</p>
          </div>
        </div>
      {/* ))} */}
    </div>
  </div>
</section>

{/* Explore by Category */}
<section className="py-10">
  <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight text-center">Explore by Category</h2>
  <p className="text-text-muted-light dark:text-text-muted-dark mt-2 text-center max-w-2xl mx-auto">
    Find the right type of property that fits your lifestyle and needs.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
  
      <Link  to="/" className="relative rounded-lg overflow-hidden h-64 group">
        <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${property1})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Apartments</h3>
      </Link>
      <Link  to="/" className="relative rounded-lg overflow-hidden h-64 group">
        <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${property2})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Family Homes</h3>
      </Link>
      <Link  to="/" className="relative rounded-lg overflow-hidden h-64 group">
        <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${property3})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Luxury Villas</h3>
      </Link>
      <Link  to="/" className="relative rounded-lg overflow-hidden h-64 group">
        <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${property4})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Commercial</h3>
      </Link>
  
  </div>
</section>

{/* Testimonials Section */}
<section className="py-16">
  <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-tight text-center">What Our Clients Say</h2>
  <p className="text-text-muted-light dark:text-text-muted-dark mt-2 text-center max-w-2xl mx-auto">
    We're proud to have helped so many people find their perfect home.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
  
      <div className="bg-slate-100 dark:bg-slate-100 p-6 rounded-lg flex flex-col items-center text-center">
        <img alt={"testimonialImage"} className="w-16 h-16 rounded-full" src={person3} />
        <p className="text-text-muted-light dark:text-text-muted-dark italic mt-4">HomeNest made finding our dream home so easy! The platform is intuitive and the verified listings gave us peace of mind.</p>
        <p className="text-text-light dark:text-text-dark font-bold mt-4">- Jane Doe</p>
      </div>
      <div className="bg-slate-100 dark:bg-slate-100 p-6 rounded-lg flex flex-col items-center text-center">
        <img alt={"testimonialImage"} className="w-16 h-16 rounded-full" src={Person1} />
        <p className="text-text-muted-light dark:text-text-muted-dark italic mt-4">The best real estate site I\'ve used. The advanced search filters are a game-changer for narrowing down exactly what you want.</p>
        <p className="text-text-light dark:text-text-dark font-bold mt-4">- John Smith</p>
      </div>
      <div className="bg-slate-100 dark:bg-slate-100 p-6 rounded-lg flex flex-col items-center text-center">
        <img alt={"testimonialImage"} className="w-16 h-16 rounded-full" src={person2}/>
        <p className="text-text-muted-light dark:text-text-muted-dark italic mt-4">I listed my property and had offers within a week. The process was smooth and the support team was incredibly helpful.</p>
        <p className="text-text-light dark:text-text-dark font-bold mt-4">- Emily Johnson</p>
      </div>
 
  </div>
</section>

        </main>
      </div>

  {/* <Footer/> */}
     
    </div>
    </>
  );
};

export default HomePage;
