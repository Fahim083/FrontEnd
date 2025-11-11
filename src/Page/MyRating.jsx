
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import MyRatingCard from "../Components/MyRatingCard";



const MyRating = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden text-text-primary-light dark:text-text-primary-dark font-display bg-gray-100 dark:bg-gray-100">
      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-10 flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-4xl mx-auto flex-1">
          <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
            <h1 className="text-4xl font-black tracking-[-0.033em]">
              My Ratings & Feedback
            </h1>
          </div>

          <div className="flex flex-col gap-6 p-4">
          
            {/* Card 2 */}
            <div className="flex bg-white dark:bg-white flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm">
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <a
                    className="text-lg font-bold hover:text-primary transition-colors"
                    href="#"
                  >
                    Cozy Suburban House
                  </a>
                  <div className="flex items-center gap-1">
              <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    />
                  </div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                    The house has a lovely garden and a spacious interior. It's
                    a quiet neighborhood, perfect for a family. Some of the
                    appliances were a bit dated, but overall, it was a positive
                    experience.
                  </p>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-auto">
                  Reviewed on Sep 15, 2023
                </p>
              </div>

              <div
                className="w-full md:w-1/3 h-48 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALnr8D7eouWpN98Yy6FhK6ReQQ_3P6P7i5scwdrLOIxvmLS6oECDoA7WrIkWiyIpai25WOFvjgBmRf6lkBi-XjGsNQ6OE1-RlrHsPLN0ZTU_oAvV_D-8RqB9uzg-jaR-lTNtoYlMgUjAI_dIl8qKHqxjHpfOZwq0urvbWf5DG9Gx1NNNLo9nwfPtcy4Gg6BzXOz1cguiZkfuuMNuJEPh8rGTZZBBDGZm-LBTbZWdtAKio6AVpc26HgPXDxV8CtRgI9QDVkZD_8NSE')",
                }}
              ></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm">
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <a
                    className="text-lg font-bold hover:text-primary transition-colors"
                    href="#"
                  >
                    Sunny Beachfront Condo
                  </a>
                  <div className="flex items-center gap-1">
                    <Rating style={{ maxWidth: 180 }} value={3} readOnly />
                  </div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
                    Waking up to the sound of the ocean was incredible. The
                    condo was clean and bright, though a bit smaller than
                    expected. The view from the balcony is absolutely worth it.
                  </p>
                </div>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs mt-auto">
                  Reviewed on Aug 02, 2023
                </p>
              </div>

              <div
                className="w-full md:w-1/3 h-48 md:h-auto bg-center bg-no-repeat bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4rvQgKuL9VERAUlrpYBsG3ABJcSkvEkWmkA6RxprXVXpB0Ku85JdnrEF_nUgWe3tZpfPxKH8Tznm8aZD-ZrKtkSua1UEuPWy_7-A5LGFuOJ0yL_j82vaqXNeU_c70XjFSZv35caM332M6Z3GB5DMsUwl8k5up6uh6ohBs9nIw5BvKULOTrqHV37AUf4OmDcN_u86FKCuM118v4Hikg9U8qhvKHaJn19sZA8VErUuJ-U4hhH-R2xoiNep8VUeklN9diZZ94g5tQRw')",
                }}
              ></div>
            </div>

      
            <MyRatingCard/>    
            

            {/* Empty State */}
            <div className="flex flex-col bg-white dark:bg-white items-center justify-center gap-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-300 bg-card-light dark:bg-card-dark p-12 text-center mt-6">
              {/* <div className="p-3 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">
                  rate_review
                </span>
              </div> */}
              <h3 className="text-xl font-bold">
                You Haven't Left Any Feedback Yet
              </h3>
              <p className="max-w-md text-text-secondary-light dark:text-text-secondary-dark text-sm">
                Once you've stayed at or visited a property, you can share your
                experience with the community. Your feedback helps everyone make
                better decisions.
              </p>
              <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-green-600 hover:cursor-pointer text-white text-sm font-bold hover:opacity-90 transition-opacity mt-2 ">
                Browse Properties
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyRating;
