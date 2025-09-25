import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const HowTo = () => {
     const[ProductItems,setProductsItems]=useState([]);

  useEffect(()=>{
      fetch(`http://localhost:7000/get`)
      .then((res)=>res.json())
      .then((data)=>
          setProductsItems(data))
  },[])
  
   const DeleteItems=(id)=>{
    fetch(`http://localhost:7000/delete/${id}`,{
      method:"DELETE",})
      .then((data)=>{
         toast.error('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
   })
   }

   return (
    <div>
          <h1>Customize Your Dream Nails</h1>
        <p>Got a nail design in mind? Upload a reference picture and add details you’d like us to know. 
            <br></br>we’ll create it.</p>  
      <div className='card table2'>
      <div className='card-body'>
  <table>
        <div className='table1 '>
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Des</th>
            <th>Price</th>
           

          
        </tr>
            {ProductItems?.map((Item) =>(
                     <tr key={Item._id}>
                    <td>{Item.Name}</td>
                   <td><img src={Item.img} alt=''/></td>
                    <td>{Item.Des}</td>
                    <td>{Item.Price}</td>
                    

                    <td> 
                    <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
                    <Link to={`/edit/${Item._id}`}><button><FiEdit /></button></Link> 
                    </td>
                    </tr>  
            ))}
        </div>
         <div className='table2'>
        <button  placeholder='submit'>submit</button>
        </div> 
  </table>
  </div>
  </div>
    </div>
  )
}

export default HowTo