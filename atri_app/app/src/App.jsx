import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      // this is a blah
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
