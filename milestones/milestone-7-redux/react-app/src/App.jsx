import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sandbox from "./pages/SandBox";
import { selectCounter } from "./store/counterSlice";

export default function App() {
  const counter = useSelector(selectCounter);

  return (
    <BrowserRouter>
      <p>
        {counter === 0
          ? "Counter is at zero."
          : counter > 0
            ? "Counter is positive."
            : "Counter is negative."}
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  );
}
