import React from "react";
import './Care.css'
  //  import map1 from "../images/map1"
  //  import map2 from "../images/map2"
  //  import map3 from "../images/map3"
  //  import map4 from "../images/map4"
  //  import map5 from "../images/map5"
  // import map6 from "../images/map6"

import FirstData from '../mapping/First'
const Care = () => {
 

    return(
        <div className="roe1">
       <div class="card-group">
        {
        FirstData.map(
            (item) =>       
        <div className='col-2' key={item.id}>     
  <div class="card ">
    <img src={item.img} width={300}/>
    </div>
      <h5>{item.name}</h5>  
      

    



    </div>


            )
}
   {/* <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> */}
</div>
</div>
    )
}

export default Care