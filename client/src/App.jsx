import React from "react"
import { BrowserRouter as Router, Route ,Routes, NavLink } from "react-router-dom"

import "./styles/home.css"
import "./styles/admin.css"

import Home from "./pages/Home"
import Showtimes from "./pages/Showtimes"
import Buytickets from "./pages/Buytickets"
import Theaters from "./pages/Theaters"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Admin from "./pages/Admin"

function App() {

  return (
    <div>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/showtimes" element={<Showtimes />}/>
          <Route path="/buytickets" element={<Buytickets />}/>
          <Route path="/theaters" element={<Theaters />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
