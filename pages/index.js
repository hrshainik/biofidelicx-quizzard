import Head from "next/head";
import { Categories, Header } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>biofidelicX quiz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Here you find bio-science related quizzes."
        />
        <meta name="keywords" content="biofidelicx quiz, biofidelicx academy" />
        <meta name="author" content="Habibur Rahman" />
      </Head>
      <Header />
      <Categories />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8"></div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-20"></div>
        </div>
      </div>
      {/* Popular quizzes */}
    </>
  );
}
