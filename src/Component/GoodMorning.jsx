import React from 'react'

function GoodMorning() {
  let namedf="adarsh"
    let Showdate=new Date(2022,3,4,5)
    Showdate=Showdate.getHours()
    let a=""
    
    if( Showdate>=1 && Showdate<12){
     a= "  Good Morning";
    }else if(Showdate>12){
        a="Good Evening"
    }
    
        
 return (
  <>
<h1>My name is {namedf}</h1>
<h2>Hello sir {a}</h2>
  </>
  )
}


export default GoodMorning