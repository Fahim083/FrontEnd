import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiLocationOn } from "react-icons/ci";
import { Link,useParams } from "react-router";
import { useState,useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";

const PropertyDetails = () => {
      const {user}  = useAuth();
      const {id} = useParams();
      // console.log(id);
      const[reviewText,setReviewText] = useState('');
      const [rating, setRating] = useState(0);
      const [property, setProperty] = useState(null);
      useEffect(() => {
        // Fetch property details from API or data source
        const fetchPropertyDetails = async () => {
          // Simulate an API call
          const response = await fetch(`https://back-end-henna-six.vercel.app/property-details/${id}`); // Replace with actual property ID
          const data = await response.json();
          setProperty(data);
        }
        fetchPropertyDetails();
      }, []);

      const handleRivewSubmit = async (e) => {
        e.preventDefault();
        // Handle review submission logic here
        const reviewData = {

          rating: rating,
          review : reviewText,
          reviewerName: user?.displayName,
          reviewerEmail: user?.email,
          PropertyName: property?.PropertyName,
          Description:property?.Description,
          ImageLink: property?.ImageLink,
          Category: property?.Category,
          Location: property?.Location,
          Price: property?.Price,
          Date: new Date().toISOString().split("T")[0],

        };
        console.log("Review submitted:", reviewData); 
        
       try {
         const response = await fetch(`https://back-end-henna-six.vercel.app/create-review`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(reviewData),
         });
         const result = await response.json();
         setRating(0);
         setReviewText('');
          toast.success("Review submitted successfully");
        //  console.log('Server response:', result);
       } catch (error) {
          toast.error("Failed to submit review");
        // console.error('Error submitting review:', error);
        
       }

      }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-bg-gray-100 dark:bg-gray-100 font-display text-[#111418] dark:text-gray-300">
   

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-5 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-6xl">
         

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-4">
            {/* Left Column - Gallery */}
            <div className="lg:col-span-3">
              <div
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80"
                style={{
                  backgroundImage:
                    `url(${property?.ImageLink})`,
                  minHeight: "555px",
                }}
              ></div>

            
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-white p-6 rounded-xl shadow-sm border border-gray-300 dark:border-gray-300">
                <p className="text-[#111418] dark:text-black text-3xl font-bold">
                 {property?.PropertyName}
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 mt-1">
                 <CiLocationOn/>
                  <p className="text-sm">
                    { property?.Location }
                  </p>
                </div>
                <p className="text-blue-400 text-2xl font-bold mt-2">
                  {
                    property ? (property.Category === 'Rent' ? '$' + property.Price + '/mo' : '$' + property.Price) : ''
                  } 
                </p>

                <div className="flex gap-2 flex-wrap mt-4 border-t border-gray-300 dark:border-gray-300  pt-4">
               
                      <div
                        className={`flex h-8 items-center justify-center gap-x-2 rounded-full px-3 bg-gray-800 dark:bg-gray-800 text-gray-300 dark:text-gray-300 text-sm font-medium
                        `}
                      >
                        <p>
                          {property ? property.Category : ''}
                        </p>
                      </div>
                  
                </div>

                {/* Description */}
                <div className="mt-4 space-y-4">
                  <h3 className="text-lg font-bold text-black dark:text-black">
                    Description
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                    {property ? property.Description : ''}
                  </p>
                </div>

                {/* Agent */}
                <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-300">
                  <p className="text-sm font-semibold mb-3 text-[#111418] dark:text-black">
                    Posted By
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZuStmN_oUMclcjUmY61B24OP1hQ-0Py6v6MyI2o8QZLkCPFHRH_HKkdnpCLjiQL7a_qvBMPJbuzLlhqM6ozKaqtOochVEkPfwLpcWGTbs9630cJi24WsDi2usfUtDVN_fTDA5ahgYuMnVl7wEVoRDubJwp1nW6RoMri0upF_DnkP06K6c4iPi_U7aqgXArfrOnZBjsInfD86t1vxndKv9l_1L4Txxky_HOR0ju8np13AiNc7tfoxwq2EEcWd3de2G080GuzPLU10"
                      alt="Jane Doe"
                    />
                    <div>
                      <p className="font-bold text-[#111418] dark:text-black">
                        {property ? property.UserName : ''}
                      </p>
                      <Link
                        className="text-sm text-blue-500 hover:underline"
                       
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>

             
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#111418] dark:text-black">
              Ratings & Reviews
            </h2>
               <div className="bg-white dark:bg-background-dark/80 p-6 rounded-xl shadow-sm border border-gray-300 dark:border-gray-300">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center pb-6 border-b border-gray-300 dark:border-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-black">4.8</span>
                  <Rating style={{ maxWidth: 120 }} value={4.0} readOnly />
                </div>
                <p className="text-[#617589] dark:text-gray-400">
                  based on 24 reviews
                </p>
              </div>

              {/* Review Form */}
              <div className="my-6">
                <h3 className="font-bold mb-2 text-black">Leave a Review</h3>
                <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
      isRequired
    />
                <textarea
                  className="w-full rounded-lg border-gray-300 dark:border-gray-300 bg-gray-100 dark:bg-gray-100 p-3 focus:ring-primary focus:border-primary text-sm text-gray-700 dark:text-gray-700 mt-4 min-h-24" 
                  placeholder="Share your experience..."
                  name="review"
                  required
                  value={reviewText}
                  onChange={(e)=> setReviewText(e.target.value)}
                ></textarea>
                <button onClick={handleRivewSubmit} className="mt-3 h-10 px-4 rounded-lg text-[15px] bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors hover:cursor-pointer">
                  Submit Review
                </button>
              </div>
            {/* </div> */}

            {/* Example Review */}
            {/* <div className="bg-white dark:bg-background-dark/80 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800"> */}
              {/* <div className="flex gap-4">
                <img
                  className="h-10 w-10 rounded-full object-cover mt-1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmnAt8VW3lHbk1lwRzB0SlTwKnwXzI2ZC0EaKFbQThG3ZgKUQmxAPPc2n41t5pW1ZWJLd70TtiB33JQU0oe2iyHmrAzwK4hEszi_fNMN02SuZzWxISXfV54OkrPK59Diw517PzGxK_sXcX3vn4yw8ib73YR220R_K78VPR2Q98LzaWthZSUvJE5S_HAqf70N934OLbXJ5rOwjn1NnYBHL5-vU5O023BOQvBtqETJbEUBAQbyYgtxiF5CBonFu-FnLVaNfw7ZcbJSQ"
                  alt="John Smith"
                />
                <div>
                  <p className="font-bold text-[#111418] dark:text-white">
                    John Smith
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    2 weeks ago
                  </p>
                  <p className="mt-2 text-sm text-[#617589] dark:text-gray-400">
                    Absolutely loved my stay here. Clean, modern, and
                    well-located. Highly recommend!
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>

   
    </div>
  );
};

export default PropertyDetails;
