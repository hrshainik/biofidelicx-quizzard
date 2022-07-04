import Head from "next/head";
import { Categories, Header } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>biofidelicX quiz</title>
        <meta
          name="description"
          content="Here you can check your knowledge about bio-science related subjects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories />
      {/* Popular quizzes */}
    </>
  );
}
