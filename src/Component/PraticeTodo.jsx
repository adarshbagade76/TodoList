import React, { useState } from 'react'

function PraticeTodo() {
    const[inputData, setInputData]=useState({FirstName:" ",LastName:"",Email:" "})
    const [AddIteam, setIteam] = useState([])





    const onSubmit=(e)=>{
        e.preventDefault()
        setIteam(...inputData,AddIteam)
        console.log(AddIteam)
    }
  return (
   <>
    <div className="container mt-5">
                <div className='col-md-4'>
                    <div className="bg-success p-2 text-white">

                        <span><h1>To Do List</h1></span>
                        <figure>
                            <figcaption>Registeration Form </figcaption>
                        </figure>
                        <form>


                            <input type="text" placeholder='FirstName'onChange={(e)=>setInputData({...inputData,FirstName:e.target.value})}/> <br></br>
                            
                            <input type="text" placeholder='LastName' onChange={(e)=>setInputData({...inputData,LastName:e.target.value})}/> <br></br>
                            <button className="btn btn-primary" type="submit" onClick={onSubmit}>ADD</button>
                        </form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AddIteam.map((item)=>{
                                        return( <tr>
                                         <th scope="row">1</th>
                                         <td>{ FirstName}</td>
                                         <td>{LastName}</td>
                                         <td>{ Email}</td>
                                         <td>{Phone}</td>
                                     </tr>)})
                            }
                                
                            </tbody>
                        </table>
                        
 
                         {
                            AddIteam.map((elem) => {
                                return (
                                    <div key={elem.id}>
                                        <button onClick={() => EditItem(elem.id)} type="button" class="btn btn-outline-danger">Edit</button>
                                        <button onClick={() => deletItem(elem.id)} type="button" class="btn btn-outline-danger">Delete</button>
                                        <h1>{elem.name}</h1>

                                    </div>


                                )
                            })
                        }   


                    </div>
                </div>
            </div>
   </>
  )
}

export default PraticeTodo