import Head from "next/head";
import React from "react";
import { Header } from "../components";

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>Internal Server Error - biofidelicX</title>
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
      <Header title="Ooops! Page Not Found." imageUrl={"/hero-img.jpg"} />
      <div className="mx-auto mb-8 px-2 md:px-5">
        <div className="post-details flex !max-w-screen-lg flex-col items-center">
          <div className="post-shadow"></div>
          <h2 className="title">Something Went Wrong!</h2>
          <p className="para">This page does not exist or was removed!</p>
          <p className="para">We suggest you back to home page.</p>
          <button className="btn-outline">Back to home</button>
        </div>
      </div>
    </>
  );
};

export default Custom500;
