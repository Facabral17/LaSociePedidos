// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import { useState } from "react";
import Home from "./pages/Home"; 
// import Login from "./pages/Login";
import "./App.css";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
    //     <Route
    //       path="/"
    //       element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
    //     /> */}
    //   </Routes>
    // </Router>
  <Home />
  );
}

export default App;
