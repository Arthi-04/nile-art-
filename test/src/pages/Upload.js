import react from 'react'
import { ToastContainer ,toast } from 'react-toastify';
// import { useEffect } from 'react';


const Upload = () => {


    const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
         const img=form.img.value;
        const des=form.des.value;
        const price=form.price.value;
        const quantity=1;

        if(  img==="" ||des==="" ||  price==="")
        {
            toast.warn('please check details');
        }else{
            const fata={img,des,price,quantity};
            // console.log(foods,"foods in object ");
            
            fetch('http://localhost:7000/upload',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(fata),
            })
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/update"
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
            <h2>UPLOAD</h2>
           
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'/>
                </div>
              
                {/* <div class="upload4">
                <label value="price"><b>RATING</b></label>
                <input type='numbers' name='price' className='ms-3'/>
            </div> */}
            <div class="upload4">
                <label value="des"><b>DES</b></label>
                <input type='text' name='des' className='ms-3'/>
            </div>
            <div class="upload4">
                <label value="price"><b>price</b></label>
                <input type='numbers' name='price' className='ms-3'/>
            </div>

            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        {/* <P>was this helpful?</P> */}
        </div>
        </div>
    </div>
    
       )

}

        
 


export default Upload
