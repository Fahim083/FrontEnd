import React from 'react'
import { Link } from 'react-router'

const AllPropertyCard = ({property,idx}) => {
  return (
     <div
                  key={idx}
                  className="flex flex-col gap-3 rounded-xl bg-white dark:bg-background-dark shadow-sm overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                    style={{ backgroundImage: `url(${property.ImageLink})` }}
                    alt={property.PropertyName}
                  ></div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-sm font-medium text-blue-500">{property.Category}</p>
                    <p className="text-gray-900 dark:text-black text-lg font-bold leading-normal mt-1">
                      {property.PropertyName}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm font-normal leading-normal mt-1">
                      {property.Location}
                    </p>
                    <p className="text-[rgb(37,89,137)] dark:text-[rgb(37,89,137)] text-lg font-bold leading-normal mt-2">
                     {
                      property.Category === 'Rent' ? '$' + property.Price + '/mo' : '$' + property.Price
                     } 
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      {/* <p className="text-gray-500 dark:text-gray-400 text-xs">
                        Posted by {property.postedBy}
                      </p> */}
                      <Link to={`/property-details/${property._id}`} className=" text-md font-bold text-[rgb(37,89,137)]  bg-[rgb(207,221,231)] rounded-lg py-2  hover:bg-[rgb(190,210,225)] cursor-pointer w-full text-center">
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
  )
}

export default AllPropertyCard
