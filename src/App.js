import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
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
