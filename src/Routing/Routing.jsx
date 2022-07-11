import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import User from './Routing/User'
import Home from './Routing/Home'
import Contact from './Routing/Contact'


function Routing() {
  
  return (
     <> 
       <BrowserRouter> 
       <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="cc">
         Contact
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Users">
         Users
        </a>
      </li>
    </ul>
    
  </div>
</nav>    


           <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/cc' element={<Contact/>}></Route> 
         <Route path='/Users' element={<User/>}></Route>
       </Routes>
      
      
           


</BrowserRouter>  
     
    </>
  

  )
}

export default Routing