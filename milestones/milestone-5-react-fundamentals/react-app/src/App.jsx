import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sandbox from "./pages/SandBox";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Robotics from "./pages/Robotics";
import Competitions from "./pages/Competitions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  );
}
