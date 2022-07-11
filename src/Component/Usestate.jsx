import React, { useState } from 'react'

function Usestate() {
    const[count,setstate]=useState( 0 )
    const update=(e)=>{

       setstate(count+1)  
    }
  return (
    <>
    <h1>{count }</h1>
    <button onClick={update}>click me</button>
    
    </>
  )
}

export default Usestate