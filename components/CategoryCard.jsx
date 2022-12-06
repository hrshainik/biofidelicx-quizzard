import Link from "next/link";
import React from "react";

const CategoryCard = ({ title, image, icon, slug, quizzes, id }) => {
  return (
    <Link key={id} href={`/category/${slug}`}>
      <div
        className="relative ml-2 mt-2 flex h-32 cursor-pointer flex-col justify-end border-2 border-midnight-500 p-3 pb-2 text-white-500 before:absolute before:right-[2px] before:bottom-[2px] before:bg-white-500 after:bg-white-500 before:-left-[6px] before:-top-[6px] before:-z-10 before:border-2 before:border-midnight-500 after:absolute after:right-2 after:bottom-2 after:-left-[10px] after:-top-[10px] after:-z-20 after:border-2 after:border-midnight-500"
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), transparent), url(${image.url})`,
        }}
      >
        <span className="text-base">
          {quizzes.length} {quizzes.length > 1 ? "quizzes" : "quiz"}
        </span>
        <h3 className="font-h text-2xl font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
