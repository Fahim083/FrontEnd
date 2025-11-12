import {useState,useEffect} from "react";
import PropertyCard from "../Components/PropertyCard.jsx";
import { useAuth } from "../Context/AuthContext.jsx";
import { Link } from "react-router";

const MyProperty = () => {
  const {user}  = useAuth();
  const [myProperty, setMyProperty] = useState([]);
  
  useEffect(() => {
    // Fetch or initialize your property data here
    const fetchMyProperties = async () => {
      const response = await fetch('http://localhost:3000/my-properties?gmail='+user?.email,
      {method: 'GET',
        headers: {
        'Content-Type': 'application/json', 
      },

    });
      const data = await response.json();
      console.log(data);
      setMyProperty(data);
    };
    fetchMyProperties();
  }, []);
    // const myProperty = [
    //   {
    //     title: "Modern Downtown Loft",
    //     type: "For Rent",
    //     location: "123 Main St, Anytown, USA",
    //             price: "$2,500 / mo",
    //             date: "Oct 26, 2023",
    //             image:
    //               "https://lh3.googleusercontent.com/aida-public/AB6AXuCw8zngyDvGhfTsN4lxH7Bz6m_XPWDxBQD2mwQgpBB6n9Y5WPUIzcvwgArYcfNYvdGSXiKFCLYHHGlI1LvCLVhG6t-V-uOfDo1PtlCkHyQwvK3bkW-bKPnJvQN-aP2m3upx6CFKctvnM8GA5m49gHSG-DePJL3mD4KaitYLuAYDQo1vaFYnvu6e_iJ37BxiXKsr82fLuDJyyzFWf6O8AJXMJoMbt05UuEeij9EYKCLxQ62OKi1aYWMdjZnD-LFCINAhJiiZ_pEeUXw",
    //           },
    //           {
    //             title: "Cozy Suburban Home",
    //             type: "For Sale",
    //             location: "456 Oak Ave, Suburbia, USA",
    //             price: "$450,000",
    //             date: "Oct 22, 2023",
    //             image:
    //               "https://lh3.googleusercontent.com/aida-public/AB6AXuAdB8tsK-M9_Com77YjVzVPeJFTTZvtB2-6r5K23tcSvZyEi0VdodyUzfSPVsSLU44NfPwuZWBDCc5bOohzOiVT3238iGxuRGHse1SiDm-sZAqLoLSObtyco62C3oazQnPAe2Tk2dIEfuFiRHI43x9sawny_QjEPWE3iMYWHNKMUYK8PJl9j3E0UnFuc2yc8k-uAsSVtrZwRG65Pb9j9htCgpep6yoTvAjI7wyyi_baYJdmcNAlzsLenZ9gF8ev-poMr2yEy6iToMs",
    //           },
    //           {
    //             title: "Sunny Beachfront Condo",
    //             type: "For Rent",
    //             location: "789 Ocean Dr, Sunnydale, USA",
    //             price: "$3,200 / mo",
    //             date: "Oct 15, 2023",
    //             image:
    //               "https://lh3.googleusercontent.com/aida-public/AB6AXuDFdOuDdGIM7PE9fvmc13Ah_09l2IommrRS1MDvnnFSAqkeZbBGo2aTdo1UM2qNWf32umAZtus-fD7jLRD8_Za-iUB4LGf-U-oext_gJr_KYt7z4PhZ7_lxeAVRvqEfc6231KBc-4b6cPuMo9x1M9Uv9BWV4UfO3cMjU-hN6gIaRhuqvTZjN0y8qXo7YWatzZmJPW9434-6uZ7j1AWCpGa-eTNepB-uevHNS-gm6kQMaHrS3r6UdjEKWz0OUblaMEGet6zee82PT64",
    //           },
    //           {
    //             title: "Rustic Mountain Cabin",
    //             type: "For Sale",
    //             location: "101 Pine Rd, Mountaintop, USA",
    //             price: "$375,000",
    //             date: "Sep 28, 2023",
    //             image:
    //               "https://lh3.googleusercontent.com/aida-public/AB6AXuDYO5L8KwXgNlLAUsyBVx3-e8SLimDOtb5oswPNfQwyYfCgV1tofYWXcBjWAfv_cyo6y5l5xJKPBL8tIsXdy8SpMd4yLc93JiPNG0f4LcRxXF1XRuoJ316C7-AUc3cyIhEVS_xiNB6H4w6FiuI_hlX3bysF0rsftPKMTrQTM0uLtb8hcT_qSIoOsCS5E_arhQdor9aq845kPuTYgcOD3B2JpmlGYnhUSdB0OrQ7Yhvp3JTRJU3nmllWdFRxXPST8HZcbuQqhhwTfcI",
    //           },
    //         ];
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">

      {/* Main */}
      <main className="flex w-full flex-1 justify-center py-8 sm:py-12">
        <div className="flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-black tracking-tighter">
                My Properties
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark text-base font-normal">
                You have {myProperty.length} active listings.
              </p>
            </div>
            <Link to="/add-property" className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-blue-500 text-white text-sm font-bold shadow-sm hover:bg-blue-600 hover:cursor-pointer">

              <span className="truncate">Add New Property</span>
            </Link>
          </div>

          {/* Property Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myProperty.map((property, index) => (
              <PropertyCard key={index} property={property} />
              // <article
              //   key={index}
              //   className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-white shadow-md transition-shadow hover:shadow-lg"
              // >
              //   <div
              //     className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              //     style={{ backgroundImage: `url(${property.image})` }}
              //   ></div>

              //   <div className="flex flex-col flex-grow p-4">
              //     <div className="flex items-center justify-between mb-2">
              //       <h3 className="text-lg font-bold tracking-tight">
              //         {property.title}
              //       </h3>
              //       <span className="text-xs font-bold uppercase tracking-wider bg-secondary/20 dark:bg-secondary/30 px-2 py-1 rounded-full">
              //         {property.type}
              //       </span>
              //     </div>

              //     <div className="flex flex-col gap-1 text-sm text-subtext-light dark:text-subtext-dark mb-4 flex-grow">
              //       <p className="flex items-center gap-1">
              //         <span className="material-symbols-outlined text-base">
              //           location_on
              //         </span>
              //         {property.location}
              //       </p>
              //       <p className="font-semibold text-text-light dark:text-text-dark">
              //         {property.price}
              //       </p>
              //       <p className="text-xs">Posted on: {property.date}</p>
              //     </div>

              //     <div className="mt-auto flex items-center justify-between gap-2">
              //       <button className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90">
              //         <span className="truncate">View Details</span>
              //       </button>
              //       <div className="flex gap-2">
              //         <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              //           <span className="material-symbols-outlined text-lg">
              //             edit
              //           </span>
              //         </button>
              //         <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-destructive/10 text-destructive dark:bg-destructive/20 hover:bg-destructive/20 dark:hover:bg-destructive/30">
              //           <span className="material-symbols-outlined text-lg">
              //             delete
              //           </span>
              //         </button>
              //       </div>
              //     </div>
              //   </div>
              // </article>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default MyProperty;

