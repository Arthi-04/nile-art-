import react from 'react'
import { ToastContainer ,toast } from 'react-toastify';
// import { useEffect } from 'react';
import './Register.css'
import res from '../images/re.jpg'


const Register = () => {


    const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
         const firstname=form.firstname.value;
        const lastname=form.lastname.value;
        const gender=form.gender.value;
          const email=form.email.value;
            const phonenumber=form.phonenumber.value;
          const password=form.password.value;
          const confirmpassword=form.confirmpassword.value;
        const quantity=1;

        if(  firstname==="" ||lastname==="" ||  gender==="" || email==="" || phonenumber==="" || password==="" || confirmpassword==="" )
        {
            toast.warn('please check details');
        }else{
            const fata={firstname,lastname,gender,email,phonenumber,password,confirmpassword};
            // console.log(foods,"foods in object ");
            
            fetch('https://nile-art.onrender.com/register',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(fata),
            })
            // .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/find"
            }
            )

        }

        }

    return(
        <div>
            <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form onSubmit={handleSubmit} >
            
            
            
            <h2>REGISTER FORM</h2>
            
            
            
            <div className='for'>
            
            <div className='form'>
              <img src={res}/>
            </div>
           
           <div className='form1'>
            
            <div class="upload1"><br></br>
                <label value="firstname"><b>FIRST NAME</b></label>
                <input type='text' name="firstname" className='ms-3'/>
                </div>
            <div class="upload2"><br></br>
                  <label value="lastname"><b>LAST NAME</b></label>
                <input type='text' name="lastname" className='ms-3'/>
            </div>
            </div>
            
            <div class="form2"><br></br>
                  <label value="gender"><b>GENTER</b></label>
                <input type='radio' name="gender"  className='ms-3'/>
                                          Male
                 <input type='radio' name="gender" className='ms-3'/>
                                           Female

            </div>
             
             <div class="form3"><br></br>
                  <label value="email"><b>EMAIL</b></label>
                <input type='text' name="email" className='ms-3'/>
            </div>
             <div class="form4"><br></br>
                  <label value="phonenumber"><b>PHONE NUMBER</b></label>
                <input type='numer' name="phonenumber" className='ms-3'/>
            </div>
             <div class="form5"><br></br>
                
                  <label value="password"><b>PASSWORD</b></label>
                <input type='text' name="password" className='ms-3'/>
            </div>
            <div class="form6"><br></br>
                 <label value=" confirmpassword"><b>CONFIRM PASSWORD</b></label>
                <input type='text' name="confirmpassword" className='ms-3'/>
           
            </div>
            <div class='form7'><br></br>
            <input type="checkbox"/> I agree all statement in <ins>Terms of Services</ins>
             </div>
             <div class='form8'><br></br>
            <button className='ree'>Register</button>
          </div>
         
          </div>
        </form>
        </div>
     </div>
        </div>
       

    
       )

}

        
 


export default Register
