import react from 'react';
import imge from "../images/logo.png"
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
          <div className='si'>
                <h5>Free Shipping All Products</h5>
            
        <ul class="nav justify-content-center">
  {/* <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#"><box-icon name='search'></box-icon></a>
  </li> */}

   <li class="nav-item">
    <Link class="nav-link" to="/"></Link>
  </li> 
 
  <li class="nav-item">
    <Link class="nav-link" to="/Shop">SHOP</Link>
  </li>

  <li class="nav-item">
    <Link class="nav-link" to="/NailArtEdits" >NAIL ARTS</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Care">NAIL CARE</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/"><img src={imge} width={80}/></Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/AboutUs">ABOUTUS</Link>
  </li>
  {/* <li class="nav-item">
    <Link class="nav-link" to="/Cantact Us">CANTACT US</Link>
    </li> */}
    <li class="nav-item">
    <Link class="nav-link" to="/Cart">CARTS</Link>
    </li>
        {/* <li class="nav-item">
    <Link class="nav-link" to="/upload">UPLOAD</Link>
  </li> */}
   {/* <li class="nav-item">
    <Link class="nav-link" to="/Register">REGISTER</Link>
  </li> */}
  {/* <li class="nav-item">
    <Link class="nav-link" to="/Single">SINGLE</Link>
  </li> */}
  


</ul>
   </div>
    )
}

export default Header