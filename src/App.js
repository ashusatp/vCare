import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Labs from "./pages/Labs.jsx";
import Pharma from "./pages/Pharmacy.jsx";
import HU from "./pages/HU.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./privateRoute.js";
import Signup from './pages/Signup.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route
            path="/pharmacy"
            element={
              <PrivateRoute>
                <Pharma />
              </PrivateRoute>
            }
          />
          <Route
            path="/labs"
            element={
              <PrivateRoute>
                <Labs />
              </PrivateRoute>
            }
          />
          <Route
            path="/h&u"
            element={
              <PrivateRoute>
                <HU />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
