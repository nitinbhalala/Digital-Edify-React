import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import AboutUs from "../Pages/AboutUs";
import Programs from "../Pages/Programs";
import Services from "../Pages/Services";
import DemoPage from "../Pages/DemoPage";
import Blogs from "../Pages/Blogs";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course/:name" element={<Course />} />
    <Route path="/programs/:name" element={<Programs />} />
    <Route path="/services/:name" element={<Services />} />
    <Route path="/about_us" element={<AboutUs />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/demos" element={<DemoPage />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
