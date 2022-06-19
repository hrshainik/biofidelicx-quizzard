import Link from "next/link";

const Header = ({ imageUrl }) => {
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
        <div className="mx-auto mb-8">
          <div className="flex items-center justify-center py-3">
            <Link href="/">
              <img src="/logo.svg" alt="logo" className="logo" />
            </Link>
          </div>
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="w-11/12 py-8 text-center font-h text-4xl font-bold text-white-500 sm:text-5xl md:text-7xl">
            Molecular Biology
          </h1>
        </div>
      </main>
    </>
  );
};

export default Header;
