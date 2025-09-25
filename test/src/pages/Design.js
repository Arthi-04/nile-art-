import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


const Design  = () => {
  
    const{id}=useParams();

    const [productsItems,setproductsItems]=useState ({
   
    })

    useEffect(()=>{
     fetch(`http://localhost:7000/chooseone/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])

    const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
   
    const firstname=form.firstname.value;
   const lastname=form.lastname.value;
    const gender=form.gender.value;
    const email=form.email.value;
    const phonenumber=form.phonenumber.value;
    const password=form.password.value;
    const confirmpassword=form.confirmpassword.value;
    const update={firstname,lastname,gender,email,phonenumber,password,confirmpassword};
    console.log(update);

    fetch(`http://localhost:7000/design/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/find";
        })
    } 
 
 return (
    <div>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
    
       <h2>RECURRECT</h2>
      
       <div class="update1"><br></br>
           <label value="firstname"><b>FIRST NAME</b></label>
           <input type='text' name="firstname" defaultValue={productsItems.FIRSTNAME} className='ms-3'/>
           </div>
           
           <div class="update2"><br></br>
           <label value="lastname"><b>LAST NAME</b></label>
           <input type='text' name="lastname" defaultValue={productsItems.LASTNAME}className='ms-3'/>
           </div>
         
           <div class="update3"><br></br>
           <label value="gender"><b>GENDER</b></label>
           <input type='text'name="gender" defaultValue={productsItems.GENDER} className='ms-3'/>
       </div>
         <div class="update4"><br></br>
           <label value="email"><b>EMAIL</b></label>
           <input type='text'name="email" defaultValue={productsItems.EMAIL} className='ms-3'/>
       </div>
         <div class="update5"><br></br>
           <label value="phonenumber"><b>PHONE NUMBER</b></label>
           <input type='text'name="phonenumber" defaultValue={productsItems.PHONENUMBER} className='ms-3'/>
       </div>
         
         <div class="update6"><br></br>
           <label value="password"><b> PASSWORD</b></label>
           <input type='text'name="password" defaultValue={productsItems.PASSWORD} className='ms-3'/>
       </div>
         
         <div class="update7"><br></br>
           <label value="confirmpassword"><b>CONFIRM PASSWORD</b></label>
           <input type='text'name="confirmpassword" defaultValue={productsItems.CONFIRMPASSWORD} className='ms-3'/>
       </div>

       <section className='update8'><br></br>
       <div class="update9 ms-3">
           <button type="submit" class="btn btn-primary">SUBMIT</button>
       </div>
    </section>
   </form>
   </div>
   </div>
   </div>
  )
}


export default Design
