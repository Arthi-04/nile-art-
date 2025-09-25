import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const Find = () => {
     const[ProductItems,setProductsItems]=useState([]);

  useEffect(()=>{
      fetch(`http://localhost:7000/choose`)
      .then((res)=>res.json())
      .then((data)=>
          setProductsItems(data))
  },[])
  
   const DeleteItems=(id)=>{
    fetch(`http://localhost:7000/remove/${id}`,{
      method:"DELETE",})
      .then((data)=>{
         toast.error('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
   })
   }

   return (
    <div>
      <div className='card table2'>
      <div className='card-body'>
  <table>
        <div className='table1 '>
        <tr>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>PHONENUMBER</th>
            <th>PASSWORD</th>
            <th>CONFIRMPASSWORD</th>

          
        </tr>
            {ProductItems?.map((Item) =>(
                    <tr key={Item._id}>
          
                    <td>{Item.firstname} </td>
                    <td>{Item.lastname}</td>
                    <td>{Item.gender}</td>
                    <td>{Item.email}</td>
                     <td>{Item.phonenumber}</td>
                      <td>{Item.password}</td>
                       <td>{Item.confirmpassword}</td>
                    <td> 
                    <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
                    <Link to={`/design/${Item._id}`}><button><FiEdit /></button></Link> 
                    </td>
                    </tr>  
            ))}
        </div>
        {/* <div className='table2'>
        <button  placeholder='submit'>submit</button>
        </div> */}
  </table>
  </div>
  </div>
    </div>
  )
}

export default Find