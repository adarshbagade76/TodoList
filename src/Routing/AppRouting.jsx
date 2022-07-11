import React from 'react'
// import './App.css'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'


function AppRouting() {
  return (
  <>
  <BrowserRouter>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <ul>
        <li>
        <Link to='/'>Home</Link> 
        </li>
      </ul>
      <ul>
        <li>
        <Link to='/services'>Services</Link> 
        </li>
      </ul>
      <ul>
        <li>
        <Link to='/Contact'>Contact</Link> 
        </li>
      </ul>
      </div>
    </nav>

  <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
  </Routes>
   
    
    </BrowserRouter>
    </>
  )
}

export default AppRouting