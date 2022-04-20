import Layout from "./components/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Signup />
      </Layout>
    </>
  );
}

export default App;
