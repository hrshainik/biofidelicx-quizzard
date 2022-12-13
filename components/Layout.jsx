import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname === "/category/[cSlug]/quiz/[qSlug]") {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }
};

export default Layout;
