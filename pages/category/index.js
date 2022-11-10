import Head from "next/head";
import React from "react";
import { CategoryCard, Header } from "../../components";

export async function getStaticProps() {
  const categoriesInfo = await getCategories();
  return {
    props: { categoriesInfo },
  };
}

const Category = ({ categoriesInfo }) => {
  const { data: categories } = categoriesInfo;
  console.log(categories);

  return (
    <>
      <Head>
        <title>Catetories</title>
      </Head>
      <Header />
      <div className="page-details">
        <div className="page-shadow"></div>
        <div className="z-50 bg-white-500">
          <div className="container mx-auto grid grid-cols-1 gap-12 p-5 sm:p-0 lg:grid-cols-12">
            <div className="col-span-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {categories.map(({ attributes: category, id }) => (
                <CategoryCard key={id} {...category} id={id} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
