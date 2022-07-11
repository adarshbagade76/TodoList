import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import User from './Routing/User'
import Home from './Routing/Home'



function App() {
  const [newobj,setobj]=useState({})
  const [AddItem, setIteam] = useState([]);
  const userLists=(obj)=>{
    debugger
    setIteam([...AddItem,obj])
  }


  const editobj=(obj)=>{
    debugger
    setobj(obj)
  }

  const updateobj=(obj)=>{
    debugger
    var arr = AddItem.map((elem)=>{
      debugger
      return  obj.id == elem.id?obj:elem

    })
    setIteam(arr)
    
  }
  const deleteItem=(id)=>{
    debugger
  var arr=AddItem.filter((elem)=> id!==elem.id)
    setIteam(arr)
  }

  return (
     <> 
       <BrowserRouter> 
       <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="">
          
        </a>
      </li>
    
      
      <li className="nav-item">
        <a className="nav-link" href="">
        
        </a>
      </li>
    </ul>

  
  </div>
</nav>
 

           <Routes>
         <Route path='/' element={<Home userobj={editobj} addUser={userLists} items={AddItem} delete={deleteItem}/>}/>
       <Route path='/Users/:id' element={<User user={newobj} newobj={ updateobj} />}/>
       </Routes>
      
      
           


</BrowserRouter>  
     
    </>
  

  )
}

export default App 
 
 