import Head from "next/head";
import React, { useEffect, useState } from "react";
import { CategoryCard, Header, RecentQuizzes } from "../../components";
import { getCategories } from "../../services";

export async function getStaticProps() {
  const categoriesInfo = await getCategories();
  return {
    props: { categoriesInfo },
  };
}

const CategoryPage = ({ categoriesInfo }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesInfo.edges);
  }, [categoriesInfo]);

  return (
    <>
      <Head>
        <title>Catetories - biofidelicX quizzard</title>
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
        title="Categories"
        subText={`${categories.length} category`}
        imageUrl="/hero-img.jpg"
      />
      <div className="page-details">
        <div className="page-shadow"></div>
        <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12 -z-40">
          <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8 content-start">
            {categories.map(({ node: category }) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-20">
              <RecentQuizzes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
