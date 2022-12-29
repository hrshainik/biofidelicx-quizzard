import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Header } from "../components";
import { auth } from "../services/firebase";

const LogIn = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success("Successfully signed up.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
      router.back();
    } catch (err) {
      toast.error("Authentication failed.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
    }
  };
  const signInWithGoogleHandler = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      toast.success("Successfully signed up.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
      router.back();
    } catch (err) {
      toast.error("Authentication failed.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
    }
  };
  const signInWithFBHandler = async () => {
    try {
      const res = await signInWithPopup(auth, fbProvider);
      toast.success("Successfully signed up.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
      router.back();
    } catch (err) {
      toast.error("Authentication failed.", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
    }
  };
  return (
    <>
      <Head>
        <title>Sign up - biofidelicX</title>
      </Head>
      <Header title="Welcome Back" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="page-details">
          <div className="page-shadow"></div>
          <h3 className="title">Log In</h3>
          <p className="para">
            Hey, Enter your details to get sign up to your new account
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <label className="input relative">
              <input
                className="font-t block input__field w-full border border-midnight-500 bg-transparent py-3 px-3 rounded-none focus:outline-0"
                type="email"
                placeholder=" "
                {...register("email", { required: true })}
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
            <label className="input relative">
              <input
                className="font-t block input__field w-full border border-midnight-500 bg-transparent py-3 px-3 rounded-none focus:outline-0"
                type="password"
                placeholder=" "
                {...register("password", { required: true })}
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
                className="absolute top-1/2 right-3 -translate-y-1/2"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  fill="currentColor"
                />
              </svg>
            </label>
            <input
              className="btn-outline w-full cursor-pointer"
              type="submit"
              value="Log In"
            />
          </form>
          <div className="flex flex-col gap-6 items-center mt-6">
            <span>- Or Log In with -</span>
            <div className="flex gap-4 justify-center">
              <button onClick={signInWithGoogleHandler}>Google</button>
              <button onClick={signInWithFBHandler}>Facebook</button>
            </div>
            <span>
              Already have an account? <Link href="/sign-up">Sign Up now</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
