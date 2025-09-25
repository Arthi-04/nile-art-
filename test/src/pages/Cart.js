import react from 'react';
  // import imng1 from '../images/ab3.webp'
  // import imng2 from '../images/cd2.webp'
  // import imng3 from '../images/cd3.webp'
  // import imng4 from '../images/cd4.webp'
 import FiveData from '../mapping/Five'
 import { useSelector,useDispatch } from 'react-redux'
import { addTocart,deleteFromCart } from '../redux/CartSlice'
const Cart = () =>{
   const cartitems=useSelector((state)=>state.cart.cartitems);
   
    const dispatch=useDispatch();
  
  
    const addCart=(item)=>{
      dispatch(addTocart(item))
    }
   
    const deleteCart=(item)=>{
      dispatch(deleteFromCart(item))
  }
    return(
      <div class="row-2">
    <div class="card-group">
      {
        FiveData.map(
        (item) =>
          <div className='col' key={item.id}>
              <div class="card-body">
                <img src={item.img} width={350}/>
               </div>
               <h5>{item.name}</h5>
                <p>{item.price}</p>
               
       {
                              cartitems.find(Items=>Items.id===item.id)?(
                                    <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                    :
                                    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)
                              }
      </div>
       
      
)
      
      }

    </div>
 
  {/* <div class="col">
    <div class="card">
      <img src={imng2} height={500}class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">IRL Brown</h5>
        <p class="card-text">RS .2299</p>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={imng3} height={500}class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">Dutch Heiress</h5>
        <p class="card-text">RS .1099</p>
     
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={imng4} height={500} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">Loco For Cocoa</h5>
        <p class="card-text">RS .1799</p>
      
    </div>
  </div> */}

</div>

   )

}
export default Cart