import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
