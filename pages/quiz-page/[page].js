import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Categories, Header, QuizCard, RecentQuizzes } from "../../components";
import { getQuizzes, getTotalQuizNumber } from "../../services";

const limit = 10;

const PaginatedHome = ({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  quizzesInfo,
}) => {
  // if (!hasNextPage && !hasPreviousPage) {
  //   return null;
  // }
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes(quizzesInfo);
  }, [quizzesInfo]);

  return (
    <>
      <Head>
        <title>biofidelicX quizzard</title>
        <link rel="icon" href="/favicon.ico" />
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
      <Header
        title="Unlock Your Potential in Bio-Science: Learn, Explore, Discover"
        imageUrl="/hero-img.jpg"
      />
      <Categories />
      <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
        <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8 content-start">
          {quizzes?.map(({ node: quiz }) => (
            <QuizCard key={quiz.id} {...quiz} />
          ))}
          <div className="pagination">
            {hasPreviousPage ? (
              <Link
                href={`${
                  currentPageNumber === 2
                    ? "/"
                    : `/post-page/${currentPageNumber - 1}`
                }`}
              >
                <a className="btn-outline cursor-pointer font-t text-xs font-bold tracking-sm">
                  &larr; Prev
                </a>
              </Link>
            ) : (
              <Link
                href={`/post-page/[page]`}
                as={`/post-page/${currentPageNumber - 1}`}
              >
                <a
                  className="btn-outline cursor-not-allowed font-t text-xs font-bold tracking-sm opacity-50"
                  onClick={(e) => e.preventDefault()}
                >
                  &larr; Prev
                </a>
              </Link>
            )}

            {hasNextPage ? (
              <Link
                href={`/post-page/[page]`}
                as={`/post-page/${currentPageNumber + 1}`}
              >
                <a className="btn-outline font-t text-xs font-bold tracking-sm">
                  Next &rarr;
                </a>
              </Link>
            ) : (
              <Link
                href={`/post-page/[page]`}
                as={`/post-page/${currentPageNumber + 1}`}
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

export default PaginatedHome;

export async function getStaticPaths() {
  const { aggregate } = await getTotalQuizNumber();

  function* numberOfPages({ total, limit }) {
    let page = 1;
    let offset = 0;

    while (offset < total) {
      yield page;

      page++;
      offset += limit;
    }
  }

  const paths = [
    ...numberOfPages({
      total: aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const offset = Number((params.page - 1) * limit);

  const { edges: quizzesInfo, pageInfo } = await getQuizzes(limit, offset);

  if (!quizzesInfo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      currentPageNumber: Number(params.page) || null,
      quizzesInfo,
      ...pageInfo,
    },
  };
}
