import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteFromCart,updateQuantity } from '../redux/CartSlice';


const Cartpage = () => {
    const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
   
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }


      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id, quantity : quantity+1}))
      }


  const decrementCart=(id,quantity)=>{
    if(quantity>1){
      dispatch(updateQuantity(
        {id, quantity : quantity-1}
      )
      )
    }
  }


  return (
    <section>
    <div className="BestSelllings">
        <h4 className='BestSellerHeader' >CART PRODUCTS</h4>
        <h6 className='BestSellerDes'>Grab our best products to brighten your day</h6>            
        <div class="container text-center" className='ProductContainer'>
          <div class="row">
            {
                cartitems.map((item)=>{
                    return(
                        <div class="col-lg-3" key={item.id}>
                        <div class="card" >
                          <img src={item?.img} class="card-img-top" alt="..."/>
                          <div class="card-body" className='ProductCardBody'>
                            <h6 class="card-text" className='ProductCardBodyHeader'>{item.name}</h6>
                      


                            <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                                <button onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>
                                {item.quantity}
                                 <button onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button>
                            </div>
                     
 
                            <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} style={{backgroundColor:'red'}}> Delete </button>
                               
                          </div>            
                       
                        </div>
                      </div>
                    )
                })
            }
          </div>
      </div>
    </div>  
    </section>
  )
}


export default Cartpage





