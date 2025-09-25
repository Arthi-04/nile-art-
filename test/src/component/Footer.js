import react from 'react'
import './Footer.css'
import img from "../images/logo.png"
import ama from "../images/AMA.jpg"
const Footer = () => {
    return (
        <div class="riw1">
            <div className="cow1">
            <img src={img} width={130}></img><br/>
            <p>At SOEZI, we focus on innovation<br/>
                 and redefine the beauty industry<br/>
              with high-quality products and <br/>
              effort use.</p><br/>
           <p>We are founded and developed <br/>
            women and are the ultimate<br/>
             destination for all nail needs. We<br/>
              are committed to having our<br/>
               customers #NAILIT!</p>
                <h6> © 2025, SOEZI. All rights reserved.</h6>
        </div>
        <div className="cow2">
            <h5>COLLECTIONS</h5>
            <p>Exclusively Yours Sale<br/>
                 Sona's Favs<br/>
               Summer Glimmer<br/>
               Glamboyance<br/>
               Show Off<br/>
               Hey Sister<br/>
               KidEzi<br/>
               ToEzi<br/>
               Shop All</p>
        </div>
        <div className="cow3">
            <h5>QUICK LINKS</h5>
            <p>Contact U<br/>
               FAQ's<br/>
               Blogs<br/>
               Privacy policy<br/>
               Shipping Polic<br/>
               Terms & Conditions<br/>
               Disclaimer<br/>
               Refund and Cancellations</p>

        </div>
        <div className="cow4">
            <h5>NEWSLETTER</h5>
            <p>Sign up for private sales, 
                new launches,  style tips and more.</p>
            <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Your email</label>
</div>
            <button>SUBSCRIBE</button><br/> 
              <img src={ama}/>
            <box-icon type='logo' name='instagram'></box-icon>
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon type='logo' name='youtube'></box-icon>
           
        </div>
        </div>
    )
}

export default Footer