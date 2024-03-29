import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Header, QuizCard, RecentQuizzes } from "../../../components";
import { getCategories, getCategory } from "../../../services";

export async function getStaticProps({ params }) {
  const categoryInfo = await getCategory(params.cSlug);

  if (!categoryInfo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categoryInfo,
    },
  };
}

export async function getStaticPaths() {
  const { edges: categories } = await getCategories();
  const paths = categories.map(({ node: category }) => ({
    params: { cSlug: `${category.slug}` },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

const SpecificCategoryPage = ({ categoryInfo }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryInfo.edges[0].node);
  }, [categoryInfo]);

  return (
    <>
      <Head>
        <title>{category?.title} - biofidelicX quizzard</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={category?.description} />
        <meta
          name="keywords"
          content="biofidelicX quizzard, biofidelicX academy"
        />
        <meta name="author" content="dynamic text" />
        <meta
          property="og:url"
          content={`https://biofidelicx-quiz.vercel.app/post/dynamic-text`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dynamic text" />
        <meta property="og:description" content="dynamic text" />
        <meta property="og:image" content="dynamic text" />
      </Head>
      <Header
        title={category?.title}
        subText={`${category?.quizzes?.length} quiz`}
        imageUrl={category?.image?.url}
        color={category?.categoryColor?.hex}
      />
      <div className="mx-auto mb-8 px-2">
        <div
          className="page-details"
          style={{ borderTop: `3px solid ${category?.categoryColor?.hex}` }}
        >
          <div className="page-shadow !top-[calc(4rem_-_3px)]"></div>
          <div className="z-50 container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8 content-start">
              {category?.quizzes?.map((quiz) => (
                <QuizCard key={quiz.id} {...quiz} category={category} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20">
                <RecentQuizzes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificCategoryPage;
