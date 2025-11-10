import { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router";
// import { useAuth } from "../Context/AuthContext";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import image from "../assets/1.png";

const LoginPage = () => {
    const [showPass, setshowPass] = useState(false);
   const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || "/";
    const { emailUserSignIn, googleUser, setLoading } = useAuth();
    const handleEmailLogin = (e) => {
      e.preventDefault();
      // console.log(from)
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);
      emailUserSignIn(email, password)
        .then((user) => {
          setLoading(false);
          // console.log(from)
          toast.success("Login Successful");
          navigate(from);

        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          // alert(error.message);
        });
    };

      const handleGooglelogin = () => {
      googleUser()
        .then((user) => {
          setLoading(false);
          toast.success("Google Login Successful");
          navigate(from);
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
        });
    };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark text-neutral-text-light dark:text-neutral-text-dark font-display">

      {/* Main Content */}
      <main className="flex-grow w-full flex items-center justify-center py-12 md:py-20 lg:py-24 px-4">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-xl shadow-lg  bg-white dark:bg-background-dark">
          {/* Login Form Section */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="w-full max-w-md mx-auto">
              <div className="flex flex-col gap-3 mb-8">
                <p className="text-neutral-text-light dark:text-neutral-text-dark text-4xl font-black tracking-tight">
                  Welcome Back
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                  Sign in to access your account and saved properties.
                </p>
              </div>
              <form className="flex flex-col gap-6" onSubmit={handleEmailLogin}>
                <label className="flex flex-col w-full">
                  <p className="text-neutral-text-light dark:text-neutral-text-dark text-sm font-medium pb-2">
                    Email Address
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-input flex w-full resize-none overflow-hidden rounded-lg text-neutral-text-light dark:text-neutral-text-darkfocus:ring-2 border  border-gray-300 dark:border-gray-300 bg-white dark:bg-background-dark h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 text-base font-normal"
                  />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-neutral-text-light dark:text-neutral-text-dark text-sm font-medium pb-2">
                    Password
                  </p>
                  <div className="relative w-full ">
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
                <div className="flex flex-col gap-4 mt-2">
                  <button
                    type="submit"
                    className="flex min-w-[84px] w-full cursor-pointer items-center bg-violet-500 justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold tracking-wide hover:bg-opacity-90"
                  >
                    <span className="truncate">Log In</span>
                  </button>
                  <button
                  onClick={handleGooglelogin}
                    type="button"
                    className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white dark:bg-background-dark text-neutral-text-light dark:text-neutral-text-dark border border-gray-300  dark:border-gray-300 text-base font-bold tracking-wide hover:bg-gray-50 dark:hover:bg-neutral-border-dark gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12
                        c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20
                        s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                        c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238
                        C44.438,36.338,48,30.656,48,24C48,22.514,47.882,21.059,47.625,19.668H43.611z"
                      />
                    </svg>
                    <span className="truncate">Log In with Google</span>
                  </button>
                </div>
                <p className="text-center text-sm mt-4">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-bold text-primary dark:text-accent hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt="A bright and modern living room with large windows, a comfortable sofa, and elegant decor, representing an ideal home."
            />
          </div>
        </div>
      </main>

    </div>
  );
};

export default LoginPage;
