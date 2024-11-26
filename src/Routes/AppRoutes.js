import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import AboutUs from "../Pages/AboutUs/Index";
import Programs from "../Pages/Programs";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course/:name" element={<Course />} />
    <Route path="/programs/:name" element={<Programs />} />
    <Route path="/about_us" element={<AboutUs />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
