import { Button } from "bootstrap";
import { useState } from "react"
import { Link, useNavigate, useParams} from 'react-router-dom'





const Home=(props)=> {
 
  const[inputData, setInputData]=useState({id:1,FirstName: "", LastName: "", Email: "", Address: "" })
    const [AddItem, setIteam] = useState(props.items);
   
  const navigate=useNavigate();
  const {id}=useParams();

    const additem=()=>{
 props.addUser(inputData)
      // setIteam([...AddItem,inputData]) we should write in App bcz it should be done routing
setInputData( {id:Math.random().toString(16).slice(2),FirstName:'',LastName:'',Email:"",Address:""})
    }
   
    const  onEdit=(item)=>{
    props.userobj(item) 
    // navigate('/users/:id' )
    }

   
    const deleteItem=(id)=>{
     debugger
  props.delete(id)
   }
  

   return (
    
     
       <center>   
         
         <div className="card" >
         <div className="card-body">
        
   <input type='text' placeholder='FirstName'value={inputData.FirstName} onChange={(e)=>setInputData({...inputData,FirstName: e.target.value})}/><br /><br />
   <input type='text' placeholder="LastName" value={inputData.LastName} onChange={(e)=>setInputData({...inputData, LastName:e.target.value})}/><br /><br />
    <input type='text' placeholder="Email" value={inputData.Email} onChange={(e)=>setInputData({...inputData,Email:e.target.value})}/><br /><br />
    <input type='text' placeholder="Address" value={inputData.Address} to='/editcomp/User' onChange={(e)=>setInputData({...inputData,Address:e.target.value})}/><br /><br />
   <button type="button" class="btn btn-dark"onClick={additem}>ADD</button>
   <table className="table">
  <thead>
    <tr>
     
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>     
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
  { 
                    
    
 props.items.map((item)=>{
     return (
      
    <tr key={item.id}>
   
    <td>{item.FirstName}</td>
    <td>{item.LastName}</td>
    <td>{item.Email}</td>
    <td>{item.Address}</td>
  <td><Link to={'/Users/'+item.id} role={'button'}  className="btn btn-primary" onClick={()=>onEdit(item)}>Edit</Link></td>
  <td><button type="button" className="btn btn-secondary"onClick={()=>deleteItem(item.id)}>Delete</button></td>
      </tr>

     )
   })   
  
   
} 
  
     
  </tbody>
</table>
</div>
</div>

</center>
  
  )
}

export default Home