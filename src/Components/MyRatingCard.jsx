import React from 'react'
import { Link } from 'react-router'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const MyRatingCard = ({card}) => {
  return (
     <div className="flex flex-col bg-white dark:bg-white md:flex-row items-stretch justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm">
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Link
                    className="text-lg font-bold hover:text-primary transition-colors"
                    to={`/property-details/${card?._id}`}
                  >
                   {card?.PropertyName}
                  </Link>
                  <div className="flex items-center gap-1 text-accent">
                              <Rating
      style={{ maxWidth: 180 }}
      value={card?.rating}
      readOnly
    />
                  </div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                    {card?.review}
                  </p>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-auto">
                  Reviewed on {card?.Date}
                </p>
              </div>

              <div
                className="w-full md:w-1/3 h-48 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    `url('${card?.ImageLink}')`,
                    minHeight: '200px'
                }}
              ></div>
            </div>

  )
}

export default MyRatingCard
