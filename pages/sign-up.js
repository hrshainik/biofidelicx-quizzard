import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import { Header } from "../components";
import { useAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordCShown, setPasswordCShown] = useState(false);
  const { signup, loginWithGoogle, loginWithFacebook } = useAuth();

  const router = useRouter();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordC = () => {
    setPasswordCShown(!passwordCShown);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      const res = signup(data.email, data.password, data.name);
      reset();
    } catch (err) {
      toast.error("Authentication failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      reset();
    }
  };
  const signInWithGoogleHandler = () => {
    try {
      const res = loginWithGoogle();
    } catch (err) {
      toast.error("Authentication failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };
  const signInWithFBHandler = () => {
    try {
      const res = loginWithFacebook();
    } catch (err) {
      toast.error("Authentication failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Sign up - biofidelicX</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="biofidelicX quizzard is the ideal place to start if you're studying for an exam, trying to increase your knowledge of bio-science, or just seeking for a fun and engaging method to learn."
        />
        <meta
          name="keywords"
          content="biofidelicx quizzard, biofidelicx academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </Head>
      <Header title="Hi There, Welcome" imageUrl="/hero-img.jpg" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="page-details !max-w-screen-lg">
          <div className="page-shadow"></div>
          <h2 className="title">Sign Up</h2>
          <p className="para">
            Hey, Enter your details to get sign up to your new account
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="input relative">
                <input
                  className="font-t block input__field w-full border border-midnight-500 bg-transparent py-3 px-3 rounded-none focus:outline-0"
                  type="text"
                  placeholder=" "
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z]+([\ A-Za-z]+)*/,
                      message: "Name doesn't contain number",
                    },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                <span className="input__label py-[6px] cursor-text font-h absolute left-0 top-0 bg-white-500 px-3 my-[7px] mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left">
                  Name
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              {errors.name && (
                <p role="alert" className="text-rose-500">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div>
              <label className="input relative">
                <input
                  className="font-t block input__field w-full border border-midnight-500 bg-transparent py-3 px-3 rounded-none focus:outline-0"
                  type="email"
                  placeholder=" "
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email address",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <span className="input__label py-[6px] cursor-text font-h absolute left-0 top-0 bg-white-500 px-3 my-[7px] mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left">
                  Email
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                    fill="currentColor"
                  />
                </svg>
              </label>
              {errors.email && (
                <p role="alert" className="text-rose-500">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label className="input relative">
                <input
                  className="font-t block input__field w-full border border-midnight-500 bg-transparent py-3 px-3 rounded-none focus:outline-0"
                  type={passwordShown ? "text" : "password"}
                  placeholder=" "
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message:
                        "Password must contain uppercase, lowercase, special character, number, eight characters or more",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                <span className="input__label py-[6px] cursor-text font-h absolute left-0 top-0 bg-white-500 px-3 my-[7px] mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left">
                  Password
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={togglePassword}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                    fill="currentColor"
                  />
                  <line
                    x1="3"
                    y1="21"
                    x2="21"
                    y2="3"
                    strokeWidth="2"
                    className={`stroke-midnight-900 ${
                      passwordShown ? "block" : "hidden"
                    }`}
                  />
                </svg>
              </label>
              {errors.password && (
                <p role="alert" className="text-rose-500">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div>
              <label className="input relative">
                <input
                  className="font-t block input__field w-full border border-midnight-500 bg-transparent py-3 px-3 rounded-none focus:outline-0"
                  type={passwordCShown ? "text" : "password"}
                  placeholder=" "
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                <span className="input__label py-[6px] cursor-text font-h absolute left-0 top-0 bg-white-500 px-3 my-[7px] mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left">
                  Confirm Password
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordC}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                    fill="currentColor"
                  />
                  <line
                    x1="3"
                    y1="21"
                    x2="21"
                    y2="3"
                    strokeWidth="2"
                    className={`stroke-midnight-900 ${
                      passwordCShown ? "block" : "hidden"
                    }`}
                  />
                </svg>
              </label>
              {errors.confirmPassword && (
                <p role="alert" className="text-rose-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <button className="btn-outline cursor-pointer self-end mt-2">
              <input
                type="submit"
                value="Sign Up"
                className="uppercase cursor-pointer font-bold"
              />
            </button>
          </form>
          <div className="flex flex-col gap-6 items-center mt-6">
            <span>- or Sign Up with -</span>
            <div className="flex gap-4 justify-center">
              <button onClick={signInWithGoogleHandler} className="btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-4 h-4 mr-1"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                Google
              </button>
              {/* <button onClick={signInWithFBHandler}>Facebook</button> */}
            </div>
            <span>
              Already have an account?{" "}
              <Link href="/log-in">
                <a className="text-aquamarine-900">Login </a>
              </Link>
              now
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
