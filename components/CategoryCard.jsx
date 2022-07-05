const CategoryCard = () => {
  return (
    <li className="articles__article">
      <a className="articles__link">
        <div className="articles__content articles__content--lhs">
          <h2 className="articles__title">
            Sweet roll gingerbread sweet roll jelly
          </h2>
          <div className="articles__footer">
            <p>Cakes</p>
            <time>1 Jan 2020</time>
          </div>
        </div>
        <div
          className="articles__content articles__content--rhs"
          aria-hidden="true"
        >
          <h2 className="articles__title">
            Sweet roll gingerbread sweet roll jelly
          </h2>
          <div className="articles__footer">
            <p>Cakes</p>
            <time>1 Jan 2020</time>
          </div>
        </div>
      </a>
    </li>
  );
};

export default CategoryCard;
