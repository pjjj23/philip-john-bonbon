import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/HomePage/page"; 

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} /> 
      {/* Add more routes here */}
    </Routes>
  );
};

export default Layout;
