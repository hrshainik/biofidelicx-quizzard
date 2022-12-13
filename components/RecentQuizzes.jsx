const PostWidget = () => {
  return (
    <>
      <fieldset className="border border-midnight-100">
        <legend className="mx-auto px-3 font-h text-3xl font-bold">
          Recent Quizzes
        </legend>
        <div className="p-5 pt-4 lg:p-8">
          {/* {relatedPosts.map((post) => (
            <Link
              href={`/post/${post.slug}`}
              className="text-base"
              key={post.title}
            >
              <div
                className="mb-4 flex w-full cursor-pointer items-start last:mb-0"
                key={post.title}
              >
                <div className="w-16 flex-none">
                  <Image
                    width="60"
                    height="60"
                    src={post.featuredImage.url}
                    className="object-cover align-middle"
                    alt={post.title}
                  />
                </div>
                <div className="ml-2 flex-grow sm:ml-4">
                  <p className="text-sm text-midnight-400">
                    {moment(post.createdAt).format("MMM DD, YYYY")}
                  </p>

                  <h3 className="font-h text-base">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))} */}
        </div>
      </fieldset>
    </>
  );
};

export default PostWidget;
