import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ title, image, icon, slug, quizzes, id }) => {
  return (
    <Link key={id} href={`/category/[cSlug]`} as={`/category/${slug}`}>
      <div
        className="relative ml-2 mt-2 flex h-32 cursor-pointer flex-col justify-end border-2 border-midnight-500 p-3 pb-2 text-white-500 before:absolute before:right-[2px] before:bottom-[2px] before:bg-white-500 after:bg-white-500 before:-left-[6px] before:-top-[6px] before:-z-10 before:border-2 before:border-midnight-500 after:absolute after:right-2 after:bottom-2 after:-left-[10px] after:-top-[10px] after:-z-20 after:border-2 after:border-midnight-500 bg-gradient-to-t from-midnight-900 to-transparent"
        // style={{
        //   background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), transparent), url(${image?.url}) center center / cover no-repeat`,
        // }}
      >
        <Image
          className="-z-10"
          src={image?.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <span className="text-base">
          {quizzes.length} {quizzes.length > 1 ? "quizzes" : "quiz"}
        </span>
        <h2 className="font-h text-2xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
