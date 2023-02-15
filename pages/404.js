import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Header } from "../components";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found - biofidelicX</title>
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
      <Header title="Ooops! Page Not Found." imageUrl="/hero-img.jpg" />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="page-details flex flex-col items-center !max-w-screen-lg">
          <div className="page-shadow"></div>
          <h2 className="title">Something Went Wrong!</h2>
          <p className="para">This page does not exist or was removed!</p>
          <p className="para">We suggest you back to home page.</p>
          <Link href="/">
            <button className="btn-outline">Back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
