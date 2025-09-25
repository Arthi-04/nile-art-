import react from 'react'
import './Home.css'
import pic from "../images/car11.webp"
import pic22 from "../images/car3.webp"
import pic3 from "../images/car22.webp"
import pic33 from "../images/car33.webp"
import img1 from "../images/clk22.webp"
import img2 from "../images/clk33.webp"
import img3 from "../images/lok33.webp"
import img4 from "../images/lok11.webp"
import img5 from "../images/lok55.webp"
import img6 from "../images/lok66.webp"
import img7 from "../images/car33.webp" 

const Home = () => {
    return(

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={pic22} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={pic33} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
     


        <div className='ri'>
           <div>
                 <h1 className='co'>NAIL ART - BESPOKE</h1>  <br/>             
                    <p className='cl'>Curate and customise a one-of-a-kind design with your Nail Artist! Need some inspo? 
                      Check out some of our favourite Bespoke <br/>
                        creations below. Available as an add-on to any gel manicure in your choice of colours.</p>

   
 
             <div className='col1'>
                 <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                </div> 
                 <div className='col2'>
                 <img src={img4}></img>
                <img src={img5}></img>
                <img src={img6}></img>  
              </div> 

              <div className='ar2'>
                <img src={img7}width={1300}/>
              </div>
                </div>
                </div>




<div className='vv'>
<video muted autoPlay loop controls src="https://cdn.shopify.com/videos/c/o/v/0a08f418a3454f6a83324da184cbe6d0.mp4" />
<video muted autoPlay loop controls src="https://cdn.shopify.com/videos/c/o/v/c2eaeae2598f46be9cb883fd017ca956.mp4" />
<video muted autoPlay loop controls src="https://cdn.shopify.com/videos/c/o/v/bc99a869f8cb4dccbf605e969602d604.mp4" width={405} />
</div>





           </div>
           
    )
       
}
export default Home