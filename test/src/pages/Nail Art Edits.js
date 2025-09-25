import React from "react";
import './Nail Art Edits.css'
import img7 from "../images/naked.jpg"
import img8 from "../images/luxury.jpg"
import img9 from "../images/signature.jpg"




// import img4 from "../images/clk22.webp"
// import img5 from "../images/clk33.webp"
// import img6 from "../images/lok33.webp"
// import img7 from "../images/lok11.webp"
// import img8 from "../images/lok55.webp"
// import img9 from "../images/lok66.webp"

import SecondData from '../mapping/Second'






const NailArtEdits = () => {
    return (
        <div className="ro">    
 <div class="card-group "> 
  {
        SecondData.map(
            (item) =>
             <div className="col-4" key={item.id}>
   <div class="card-body">
 <img src={item.img}width={350}/>
    </div>
       <h5 class="card-text">{item.name}</h5>
     </div>
   
   
        )
      }
{/*   
        <div class="card">
     <img src={im2}/>     <div class="card-body">
       <h5 class="card-title">DESINER NAILS</h5>    
          <p class="card-text"> Rs.1256</p>
    </div>
  
   </div>
   <div class="card">
   <img src={im3}/>
    
     <div class="card-body">
       <h5 class="card-title">GLAMOUR GIRLS</h5>
       <p class="card-text">Rs.1567</p>
     </div>
    
   </div>


<div class="card-group">
  <div class="card">
     <img src={im4}/>
  
    <div class="card-body">
      <h5 class="card-title">PASH NAILS</h5>
      <p class="card-text">Rs.1566</p>
    </div>
    
  </div>
  <div class="card">
     <img src={im5}/>
    
    <div class="card-body">
      <h5 class="card-title">RAISE A HAND</h5>
      <p class="card-text">Rs.1789</p>
    </div>
    
  </div>
  <div class="card">
     <img src={im6}/>
    
    <div class="card-body">
      <h5 class="card-title">REGAL NAILS</h5>
      <p class="card-text">Rs.1567</p>
    </div> 
    
  </div> 
</div>   */}
 </div>   

          





<div className="rq">
 <h3>GET THE LOOK</h3>
 <div className='co3'>

                <div className="pic1">
                 
                  <img src={img7}width={300}/>
                  <h3>NAKED</h3>
                <p>
                  Embrace the natural look<br/>
                   with a Naked finish (no <br/>
                colour, polish or gel).<br/>
                    Optional matte or shine<br/>
                     buffing finish.<br/>
                </p>
               </div>

                <div className="pic2">
                 
                  <img src={img8}width={300}/>
                  <h3>LUXURY</h3>
                  <p>
                    Shaping | Buffing |<br/>
                     Cuticle care |<br/>                  
                      Moisturising |<br/>
                       Extended massage |<br/>
                       Luxury hot <br/>
                       cream treatment | Your<br/>
                        choice of finish<br/>
                  </p>
               </div>
               < div className="pic3"> 
               
               <img src={img9}width={300}/>
               <h3>SIGNATURE</h3>
               <p>
                Shaping | Buffing |<br/>
                 Cuticle care <br/>
                  Moisturising | Your<br/>
                   choice of finish</p> 
        </div>
               </div>
</div>

</div>

            
        
                   
    )
} 



export default NailArtEdits