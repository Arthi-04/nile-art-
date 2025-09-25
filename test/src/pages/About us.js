import react from 'react';
import './About.css';
import imging from "../images/about us.webp"
import imging1 from "../images/ab1.webp"
import imging2 from "../images/ab2.webp"


// import im1 from "../images/g1.jpg"
// import im2 from "../images/g2.jpg"
// import im3 from "../images/g4.jpg"
// import im4 from "../images/g5.jpg"
// import im5 from "../images/g5.jpg"
// import im6 from "../images/g6.jpg"


 import FourData from '../mapping/Four'










const Aboutus = () =>{
    return(


 <div class="card-group row"> 
    {
        FourData.map(
            (item) =>  
              <div className='col-4' key={item.id}>
   <div class="card">
<img src={item.img}/>
     </div> 
  
      </div>
        )
      }
    
 





    <div className='rowa1'>
        <img src={imging} width="90%"/>
    <div className='arthi1'>
         <img src={imging1} width="43%"></img>
         <img src={imging2} width="43%"></img>
    </div>





</div>
  
</div>








  )
}









export default Aboutus