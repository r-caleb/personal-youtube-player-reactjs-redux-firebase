import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import SideBar from "./components/sidebar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "./_app.scss";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchscreen/WatchScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <SideBar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Résultats de recherche</h1>
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />:
    </Routes>
  );
}

export default App;
