import React from "react";
import { Link } from "react-router";
import image from "../assets/2.png";
import { toast } from "react-hot-toast";
import { useNavigate} from "react-router"


import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";


const Register = () => {
  const [showPass, setshowPass] = useState(true);
  const navigate = useNavigate();
  const { setLoading, createEmailUser, userInfoUpdate, googleUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, url, email, password,);
    const userInfo = {
      displayName: name,
      photoURL: url,
    };
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain a lowercase letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
       toast.error("Password must contain an uppercase letter");
      return;
    }
    createEmailUser(email, password)
      .then((user) => {
        console.log(user);
        userInfoUpdate(userInfo)
          .then(() => {
            setLoading(false);
            toast.success("Profile Updated Successfully");
            navigate("/");
          })
          .catch((e) => {
            toast.error("Failed to Update Profile");
            console.log(e);
          });
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
        //
        // alert(e.message);
      });
  };

  const handleGoogleSignup = () => {
    googleUser()
      .then((user) => {
        setLoading(false);
        navigate("/");
        toast.success("Google Sign Up Successful");
      })
      .catch((e) => {
        toast.error("Google Sign Up Failed");
        console.log(e);
      });
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen flex flex-col">

      {/* Main */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left Image */}
            <div className="hidden lg:block lg:w-1/2 xl:w-5/12">
              <img
                className="w-full h-full object-cover rounded-xl shadow-lg"
                src={image}
                alt="Modern living room with decor"
              />
            </div>

            {/* Right Form */}
            <div className="w-full max-w-md lg:w-1/2 xl:w-auto xl:flex-1 xl:max-w-lg">
              <div className="bg-gray-100 dark:bg-form-bg-dark p-8 md:p-10 rounded-xl shadow-lg">
                <div className="text-center md:text-left mb-8">
                  <h1 className="text-2xl md:text-4xl font-black tracking-tight text-text-light dark:text-text-dark">
                    Create Your HomeNest Account
                  </h1>
                  <p className="mt-2 text-base text-gray-500 text-text-muted-light dark:text-text-muted-dark">
                    Find your next home with us.
                  </p>
                </div>

                <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
                  <label className="flex flex-col">
                    <p className="text-sm font-medium pb-2">Full Name</p>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your full name"
                        className="form-input flex w-full resize-none overflow-hidden rounded-lg text-neutral-text-light dark:text-neutral-text-darkfocus:ring-2 border  border-gray-300 dark:border-gray-300 bg-white dark:bg-background-dark h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal"
                  />
                  </label>

                  <label className="flex flex-col">
                    <p className="text-sm font-medium pb-2">Email Address</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                       className="form-input flex w-full resize-none overflow-hidden rounded-lg text-neutral-text-light dark:text-neutral-text-darkfocus:ring-2 border  border-gray-300 dark:border-gray-300 bg-white dark:bg-background-dark h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal"
                  />
                  </label>

                  <label className="flex flex-col">
                    <p className="text-sm font-medium pb-2">
                      Profile Photo URL{" "}
                      <span className="text-text-muted-light dark:text-text-muted-dark">
                        (Optional)
                      </span>
                    </p>
                    <input
                      type="url"
                      name="url"
                      placeholder="https://..."
                     className="form-input flex w-full resize-none overflow-hidden rounded-lg text-neutral-text-light dark:text-neutral-text-darkfocus:ring-2 border  border-gray-300 dark:border-gray-300 bg-white dark:bg-background-dark h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal"
                  />
                  </label>

                  <label className="flex flex-col">
                    <p className="text-sm font-medium pb-2">Password</p>
                    <div className="relative">
                      <input
                        type={showPass ? "password" : "text"}
                        name="password"
                        placeholder="Enter your password"
                           className="form-input flex w-full resize-none overflow-hidden rounded-lg text-neutral-text-light dark:text-neutral-text-darkfocus:ring-2 border  border-gray-300 dark:border-gray-300 bg-white dark:bg-background-dark h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal"
                  />
                      <button type="button" onClick={() => setshowPass(!showPass)}>
                        {!showPass ? (
                          <FaRegEyeSlash className="absolute right-5 top-4.5 sm:right-10   cursor-pointer text-gray-400" />
                        ) : (
                          <FaRegEye className="absolute right-5 top-4.5 sm:right-10  cursor-pointer text-gray-400" />
                        )}
                      </button>
                    </div>
                  </label>

                  {/* Password Hints */}
                  {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-1 text-xs text-text-muted-light dark:text-text-muted-dark">
                    <div className="flex items-center gap-2 text-success">
                      <span className="material-symbols-outlined text-base">
                        check_circle
                      </span>
                      <span>One lowercase character</span>
                    </div>
                    <div className="flex items-center gap-2 text-success">
                      <span className="material-symbols-outlined text-base">
                        check_circle
                      </span>
                      <span>One uppercase character</span>
                    </div>
                    <div className="flex items-center gap-2 text-error">
                      <span className="material-symbols-outlined text-base">
                        cancel
                      </span>
                      <span>6 characters minimum</span>
                    </div>
                  </div> */}

                  <button
                    type="submit"
                    
                    className="mt-4 w-full rounded-lg h-12 px-4 bg-violet-500 text-white text-base font-bold hover:bg-primary/90 transition-colors hover:cursor-pointer hover:bg-violet-600 "
                  >
                    Create Account
                  </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                  <hr className="w-full border-gray-300 dark:border-gray-300" />
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    OR
                  </span>
                  <hr className="w-full border-gray-300 dark:border-gray-300" />
                </div>

                {/* Google Button */}
                <button 
                onClick={handleGoogleSignup}
                className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-4 bg-white dark:bg-background-dark border border-gray-300 dark:border-gray-300 text-text-light dark:text-text-dark text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hover:cursor-pointer hover:text-white ">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5777 12.2592C22.5777 11.4593 22.5152 10.6865 22.3831 9.94055H12.2471V14.2882H18.1736C17.9231 15.8236 17.113 17.1162 15.8423 17.9734V20.7222H19.5546C21.4988 18.9482 22.5777 15.903 22.5777 12.2592Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12.2471 23.0001C15.4744 23.0001 18.2059 21.932 20.149 20.013L16.4367 17.2642C15.3676 17.9735 13.9486 18.3976 12.2471 18.3976C9.17294 18.3976 6.55171 16.3835 5.61333 13.6618H1.78271V16.4913C3.70233 20.2524 7.64136 23.0001 12.2471 23.0001Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.6133 13.6618C5.38911 12.9806 5.25928 12.2592 5.25928 11.5C5.25928 10.741 5.38911 10.0194 5.6133 9.33823V6.50879H1.78271C0.947266 8.20964 0.5 10.063 0.5 11.5C0.5 12.9371 0.947266 14.7904 1.78271 16.4913L5.6133 13.6618Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12.2471 4.60254C13.974 4.60254 15.2977 5.24886 15.8858 5.81422L18.7915 3.03845C16.9298 1.33759 14.8055 0 12.2471 0C7.64136 0 3.70233 2.74768 1.78271 6.50878L5.61333 9.33822C6.55171 6.61655 9.17294 4.60254 12.2471 4.60254Z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <p className="mt-8 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
                  Already have an account?{" "}
                  <Link to={"/login"} className="font-bold text-primary hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
