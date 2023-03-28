import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Hourly from "../pages/Hourly/Hourly";
import Threeday from "../pages/Threeday/Threeday";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hourly" element={<Hourly />} />
      <Route path="/threeday" element={<Threeday />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<p>404 not found</p>} />
    </Routes>
  );
};

export default Router;
