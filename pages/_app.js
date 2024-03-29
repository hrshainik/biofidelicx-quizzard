import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "../components";
import GoogleTagManager from "../components/GoogleTagManager";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <GoogleTagManager />
        <Component {...pageProps} />
        <Analytics />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={3}
          theme="light"
        />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
