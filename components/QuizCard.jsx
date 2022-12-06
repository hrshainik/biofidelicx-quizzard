import Link from "next/link";

const QuizCard = ({ title, description, time, slug, category, questions }) => {
  return (
    <Link href={`/category/${category.slug}/quiz/${slug}`}>
      {/* <div className="card cursor-pointer my-8">
        <div
          className="card-con relative z-20 mx-auto -mt-6 flex flex-col items-center bg-white-500  text-midnight-500"
          style={{ width: "95%" }}
        >
          <div className="shadow-box"></div>
          <div className="-mt-4 bg-aquamarine-500/80 py-2 px-3.5 flex">
            <span className="font-ct text-xs font-semibold uppercase leading-3 tracking-sm">
              {category.title}
            </span>
          </div>
          <div className="card-con-text w-full p-4 pb-5 pt-0">
            <h1 className="mb-3 text-center text-2xl font-semibold transition duration-100">
              {title}
            </h1>
            <p
              className="text-center font-h text-base font-normal leading-6"
              style={{ color: "#50505e" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div> */}
      <div className="border border-midnight-500 p-3 flex flex-col gap-5">
        <div className="">
          <span className="text-xs tracking-md">{category.title}</span>
          <h3 className="text-xl font-h">{title}</h3>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="scale-75"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
              </svg>
              <span className="text-sm">{time} min</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="scale-75"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.053 17c.466 0 .844-.378.844-.845 0-.466-.378-.844-.844-.844-.466 0-.845.378-.845.844 0 .467.379.845.845.845zm.468-2.822h-.998c-.035-1.162.182-2.054.939-2.943.491-.57 1.607-1.479 1.945-2.058.722-1.229.077-3.177-2.271-3.177-1.439 0-2.615.877-2.928 2.507l-1.018-.102c.28-2.236 1.958-3.405 3.922-3.405 1.964 0 3.615 1.25 3.615 3.22 0 1.806-1.826 2.782-2.638 3.868-.422.563-.555 1.377-.568 2.09z" />
              </svg>
              <span className="text-sm">{questions?.length} questions</span>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="scale-150"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
