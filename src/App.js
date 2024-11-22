import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        {/* <Header /> */}
        <main className="flex-grow">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
