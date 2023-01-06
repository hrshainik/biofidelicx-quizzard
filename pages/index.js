import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Categories, Header, QuizCard, RecentQuizzes } from "../components";
import { getQuizzes } from "../services";

export async function getStaticProps() {
  const limit = 5;
  const offset = 0;

  // const { edges: categoriesInfo } = await getCategories();
  const { edges: quizzesInfo, pageInfo } = await getQuizzes(limit, offset);
  return {
    props: { quizzesInfo, currentPageNumber: 1, pageInfo },
  };
}

const HomePage = ({
  // categoriesInfo,
  quizzesInfo,
  pageInfo,
  currentPageNumber,
}) => {
  // const [categories, setCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // setCategories(categoriesInfo);
    setQuizzes(quizzesInfo);
  }, [quizzesInfo]);

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
      <Header title="Quiz App" imageUrl="/hero-img.jpg" />
      <Categories />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
          {quizzes?.map(({ node: quiz }) => (
            <QuizCard key={quiz.id} {...quiz} />
          ))}
          <div className="pagination">
            {pageInfo.hasPreviousPage ? (
              <Link
                href={`/quiz-page/[page]`}
                as={`/quiz-page/${currentPageNumber - 1}`}
              >
                <a className="btn-outline cursor-pointer font-t text-xs font-bold tracking-sm">
                  &larr; Prev
                </a>
              </Link>
            ) : (
              <Link
                href={`/quiz-page/[page]`}
                as={`/quiz-page/${currentPageNumber - 1}`}
              >
                <a
                  className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                  onClick={(e) => e.preventDefault()}
                >
                  &larr; Prev
                </a>
              </Link>
            )}

            {pageInfo.hasNextPage ? (
              <Link
                href={`/quiz-page/[page]`}
                as={`/quiz-page/${currentPageNumber + 1}`}
              >
                <a className="btn-outline font-t text-xs font-bold tracking-sm">
                  Next &rarr;
                </a>
              </Link>
            ) : (
              <Link
                href={`/quiz-page/[page]`}
                as={`/quiz-page/${currentPageNumber + 1}`}
              >
                <a
                  className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                  onClick={(e) => e.preventDefault()}
                >
                  Next &rarr;
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-20">
            <RecentQuizzes />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
