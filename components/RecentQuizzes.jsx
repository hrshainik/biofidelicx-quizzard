import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRecentQuizzes } from "../services";

const RecentQuizzes = () => {
  const [recentQuizzes, setRecentQuizzes] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getRecentQuizzes().then((data) => setRecentQuizzes(data));

    if (recentQuizzes) {
      setTimeout(() => {
        setDataLoaded(true);
      }, 1500);
    }
  }, []);

  if (!dataLoaded) {
    return (
      <fieldset className="border border-midnight-100">
        <legend className="mx-auto px-3 font-h text-3xl font-bold">
          Recent Quizzes
        </legend>
        <div className="p-5 pt-4 lg:p-8 flex flex-col gap-3">
          <div className="mb-4 flex  animate-pulse items-start last:mb-0 ">
            <div className="flex h-16 w-16 flex-none items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="ml-2 flex-grow sm:ml-4">
              <div className="mb-2 h-2 w-20 bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-1 h-3 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2 inline-block w-1/3 bg-gray-200 dark:bg-gray-700 mr-2"></div>
              <div className="h-2 inline-block w-1/3 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="mb-4 flex  animate-pulse items-start last:mb-0 ">
            <div className="flex h-16 w-16 flex-none items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="ml-2 flex-grow sm:ml-4">
              <div className="mb-2 h-2 w-20 bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-1 h-3 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2 inline-block w-1/3 bg-gray-200 dark:bg-gray-700 mr-2"></div>
              <div className="h-2 inline-block w-1/3 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="mb-4 flex  animate-pulse items-start last:mb-0 ">
            <div className="flex h-16 w-16 flex-none items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="ml-2 flex-grow sm:ml-4">
              <div className="mb-2 h-2 w-20 bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-1 h-3 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2 inline-block w-1/3 bg-gray-200 dark:bg-gray-700 mr-2"></div>
              <div className="h-2 inline-block w-1/3 bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }

  return (
    <fieldset className="border border-midnight-100">
      <legend className="mx-auto px-3 font-h text-3xl font-bold">
        Recent Quizzes
      </legend>
      <div className="p-5 pt-4 lg:p-8 flex flex-col gap-3">
        {recentQuizzes.map((quiz) => (
          <Link
            href={`/category/${quiz.category.slug}/quiz/${quiz.slug}`}
            key={quiz.id}
          >
            <div className="mb-4 flex w-full cursor-pointer items-center last:mb-0">
              <div className="relative h-16 w-16 flex-none">
                <Image
                  layout="fill"
                  src={quiz.image.url}
                  className="object-cover align-middle"
                  alt={quiz.title}
                />
              </div>
              <div className="ml-2 flex-grow sm:ml-4">
                <span className="text-xs">
                  {moment(quiz.createdAt).format("MMM DD, YYYY")}
                </span>
                <h2 className="font-h text-base">{quiz?.title}</h2>
                <span className="mr-2 text-xs">
                  {quiz.questions.length} questions
                </span>
                <span className="text-xs">{quiz.time} minutes</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </fieldset>
  );
};

export default RecentQuizzes;
