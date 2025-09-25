import react from 'react'
import './Shop.css'
import pics from "../images/sp1.jpg"
import pics0 from "../images/sp2.jpg"
import imgn from "../images/see.jpg"

// import im1 from "../images/f1.jpg"
// import im2 from "../images/n2.jpg"
// import im3 from "../images/n3.jpg"
// import im4 from "../images/n4.jpg"
// import im5 from "../images/n5.jpg"
// import im6 from "../images/n6.jpg"


import ThirdData from '../mapping/Third'

import { useSelector,useDispatch } from 'react-redux'
import { addTocart,deleteFromCart } from '../redux/CartSlice'
const Shop = () => {
  const cartitems=useSelector((state)=>state.cart.cartitems);
   
    const dispatch=useDispatch();
  
  
    const addCart=(item)=>{
      dispatch(addTocart(item))
    }
   
    const deleteCart=(item)=>{
      dispatch(deleteFromCart(item))
  }
    return (
        <div className='row'>

<div className='com'>
   <img src={imgn}width={950}/>
</div>




<div class="card-group "> 
    {
        ThirdData.map(
            (item) => 
        <div className='col-4' key={item.id}>
         
   <div class="card">
<img src={item.img}/>
 </div>
       <p class="card-text">{item.price} </p>
        {
                              cartitems.find(Items=>Items.id===item.id)?(
                                    <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                    :
                                    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)
                              }
    </div>    
 
        )
      }
  
         {/* <div class="card">
     <img src={im2}/>     <div class="card-body">
          
          <p class="card-text">1256</p>
    </div>
   </div> 
    <div class="card">
   <img src={im3}/>
    
     <div class="card-body">
       
       <p class="card-text">1567</p>
     </div>
    
   </div>


<div class="card-group"> 
  <div class="card">
     <img src={im4}/>
  
    <div class="card-body">
   
      <p class="card-text">1566</p>
    </div>
    
  </div>
  <div class="card">
     <img src={im5}/>
    
    <div class="card-body">
      
      <p class="card-text">789</p>
    </div>
    
  </div>
  <div class="card">
     <img src={im6}/>
    
    <div class="card-body">
    
      <p class="card-text">1567</p>
    </div>
     </div> 
</div>         */}

  </div>      


 {/* </div>     */}
         






















<div className='r1'>
          <div className='cl1'>
            
            <img src={pics}width={500}/>
          </div>
            <div className='cl2'>
              <h1>NAIL YOUR NEXT EVENT</h1>
                <p>With salons across London and the UK, our <br/>
                    dedicated events team are here to bring your vision <br/>
                    to life offering bespoke packages tailored to every <br/>
                    style of event.<br/><br/>

From corporate events to PR launches, influencer<br/>
 events, wellbeing days, special occasions and more,<br/>
  elevate your event with our exclusive salon spaces!</p>
            </div>
            </div>




           
           
         <div className='r2'>
                <div className='cl3'>
             <h1>MAKE IT YOUR OWN</h1>
            <p>Whether its Bespoke Nail Art, adding vinyls to our<br/>
                windows or using our kiosks and iPads to add that <br/>
                personal touch, we offer a flexible event service with <br/>
                you in mind.</p>
        
</div>

           
       
            
          
                 <div className='cl4'>
          
            <img src={pics0}width={500}/>
          </div> 
          </div>
          </div>
        
         
    )
}

export default Shop