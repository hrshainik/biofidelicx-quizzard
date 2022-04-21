import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Signup />
        <Login />
      </Layout>
    </>
  );
}

export default App;
