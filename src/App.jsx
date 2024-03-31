import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './_auth/LandingPage'
import LoginPage from './_auth/LoginPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
