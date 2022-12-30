import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import { Header } from "../components";
import { auth } from "../services/firebase";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordCShown, setPasswordCShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordC = () => {
    setPasswordCShown(!passwordCShown);
  };
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success("Successfully loged in", {
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
      router.back();
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
  const signInWithGoogleHandler = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      toast.success("Successfully loged in", {
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
      router.back();
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
  const signInWithFBHandler = async () => {
    try {
      const res = await signInWithPopup(auth, fbProvider);
      toast.success("Successfully loged in", {
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
      router.back();
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
      </Head>
      <Header title="Hi There, Welcome" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="page-details">
          <div className="page-shadow"></div>
          <h3 className="title">Sign Up</h3>
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
                <span
                  className="input__label cursor-text font-h absolute left-0 top-0 bg-white-500 py-[6px] px-3 my-[7px]
              mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left"
                >
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
                    required: "Email Address is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Invalid email address",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <span
                  className="input__label cursor-text font-h absolute left-0 top-0 bg-white-500 py-[6px] px-3 my-[7px]
                mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left"
                >
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
                      message: "Password must be strong",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                <span
                  className="input__label cursor-text font-h absolute left-0 top-0 bg-white-500 py-[6px] px-3 my-[7px]
                mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left"
                >
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
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                <span
                  className="input__label cursor-text font-h absolute left-0 top-0 bg-white-500 py-[6px] px-3 my-[7px]
              mx-1 whitespace-nowrap translate-x-0 translate-y-0 origin-top-left"
                >
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
            <button className="btn-outline">
              <input type="submit" value="Sign Up" />
            </button>
          </form>
          <div className="flex flex-col gap-6 items-center mt-6">
            <span>- Or Sign Up with -</span>
            <div className="flex gap-4 justify-center">
              <button onClick={signInWithGoogleHandler}>Google</button>
              <button onClick={signInWithFBHandler}>Facebook</button>
            </div>
            <span>
              Already have an account? <Link href="/log-in">Log In now</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
