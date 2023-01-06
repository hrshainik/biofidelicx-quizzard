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
        <title>Catetories - biofidelicX quiz</title>
      </Head>
      <Header title="Categories" subText={`${categories.length} category`} />
      <div className="page-details">
        <div className="page-shadow"></div>
        <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12 -z-40">
          <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
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
