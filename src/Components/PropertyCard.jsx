import React from 'react'
import{MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'

const PropertyCard = ({property}) => {
  return (
     <article
                
                className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  style={{ backgroundImage: `url(${property.image})` }}
                ></div>

                <div className="flex flex-col flex-grow p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold tracking-tight">
                      {property.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider bg-secondary/20 dark:bg-secondary/30 px-2 py-1 rounded-full">
                      {property.type}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-subtext-light dark:text-subtext-dark mb-4 flex-grow">
                    <p className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        location_on
                      </span>
                      {property.location}
                    </p>
                    <p className="font-semibold text-text-light dark:text-text-dark">
                      {property.price}
                    </p>
                    <p className="text-xs">Posted on: {property.date}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <button className="flex flex-1 items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-blue-500 font-semibold hover:bg-blue-600 text-white text-sm  hover:cursor-pointer"> 
                      <span className="truncate">View Details</span>
                    </button>
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center rounded-lg hover:cursor-pointer bg-gray-200 dark:bg-gray-200 h-9 w-9  hover:bg-gray-200 hover:dark:bg-gray-300 hover::bg-gray-300 ">
                        <span className="material-symbols-outlined text-lg">
                         <MdEdit/>
                        </span>
                      </button>
                      <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-red-200 text-destructive dark:bg-red-200 hover:cursor-pointer hover:bg-red-400 dark:hover:bg-red-400">
                        <span className="material-symbols-outlined text-lg">
                          <MdDelete/>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
  )
}

export default PropertyCard
