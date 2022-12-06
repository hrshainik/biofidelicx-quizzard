import Head from "next/head";
import React from "react";
import { Header } from "../components";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found - biofidelicX</title>
      </Head>
      <Header title="Ooops! Page Not Found." />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="page-details flex flex-col items-center">
          <div className="page-shadow"></div>
          <h2 className="title">Something Went Wrong!</h2>
          <p className="para">This page does not exist or was removed!</p>
          <p className="para">We suggest you back to home page.</p>
          <button className="btn-outline">Back to home</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
