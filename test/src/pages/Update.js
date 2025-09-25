import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const Update = () => {
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
      <div className='card table2'>
      <div className='card-body'>
  <table>
        <div className='table1 '>
        <tr>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>DES</th>
            <th>PRICE</th>
            <th>Actions</th>

          
        </tr>
            {ProductItems?.map((Item) =>(
                    <tr key={Item._id}>
          
                    <td><img src={Item.img} alt=''/></td>
                    <td>{Item.des}</td>
                    <td>{Item.price}</td>
                    <td>{Item.quantity}</td>
                    <td> 
                    <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
                    <Link to={`/edit/${Item._id}`}><button><FiEdit /></button></Link> 
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

export default Update