import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Course from "../Pages/Course";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course" element={<Course />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
