import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import AboutUs from "../Pages/AboutUs/Index";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course/:name" element={<Course />} />
    <Route path="/about_us" element={<AboutUs />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
