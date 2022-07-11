// import jsPDF from "jspdf"
import React from "react"
import abc from './Group.jpeg'
// import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";
 






  

  
  

   
const Image=()=> {

  return (
    
   <div className="card">
    
     <div className='centre'></div>
       <div className="upper-container">
         <div className="image-container">
             {/* <img src={abc} alt='' height='100px' width='100px'/> */}
             </div>  
       </div>
       <div className="lower-container">
           <h1 style={{color:"Black"}}>CREATE YOUR PART-TIME</h1>
           <h1 className='asd' style={{color:"Red"}}>INCOME</h1><br />
                 <h2 style={{color:"blue"}}><span style={{color:"black"}}>WORK</span>:ON SOCIAL MEDIA</h2><br />
                 <h2 style={{color:"blue"}}><span style={{color:"black"}}>AGE</span>: 18 to 30 </h2><br/>
                 <h2 style={{color:"blue"}}><span style={{color:"black"}}>INCOME</span>: 15000-30000 MONTHLY' </h2><br />
                 <h2 style={{color:"blue"}}><span style={{color:"black"}}>TIME</span>:FLEXIBLE TIME</h2><br />
                 <h2 style={{color:"blue"}}><span style={{color:"black"}}>PAYMENT</span>: MONTHLY IN YOUR ACCOUNT</h2><br />
                <button className='q12'>ASK ME HOW?</button>
       </div>
       

    </div>
   
  )
}


export default Image