import Link from "next/link";

const Header = ({ imageUrl, title }) => {
  const bgImage = {
    background: `linear-gradient(
      rgba(0, 0, 0, .75), 
      rgba(0, 0, 0, .5)
    ),
    url('${imageUrl}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPostion: "center",
  };

  return (
    <>
      <main className="hero" style={bgImage}>
        <div className="mx-auto">
          <div className="flex items-center justify-center py-3">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="logo"
                className="logo h-14 md:h-16 lg:h-20"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-11/12 text-center font-h text-3xl font-bold text-white-500 sm:text-4xl md:text-5xl pt-16 md:pt-24 lg:pt-32 pb-24 md:pb-32 lg:pb-40">
            {title}
          </h1>
        </div>
      </main>
    </>
  );
};

export default Header;
