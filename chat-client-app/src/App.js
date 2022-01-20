import { Routes, Route, Outlet } from "react-router-dom";
import "./App.scss";
import DashboardPage from "./Pages/DashboardPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import IndexPage from "./Pages/IndexPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
