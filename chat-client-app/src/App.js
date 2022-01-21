import { Routes, Route } from "react-router-dom";
import "./App.scss";

import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import IndexPage from "./Pages/IndexPage";
import DashboardPage from "./Pages/DashboardPage";
import ChatroomPage from "./Pages/ChatroomPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chatroom/:id" element={<ChatroomPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
}

export default App;
