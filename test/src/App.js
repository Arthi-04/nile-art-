import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Carousel from './pages/Carousel';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NailArtEdits from './pages/Nail Art Edits';
import CantactUs from './pages/Cantact Us';
import Aboutus from './pages/About us';
import Cart from './pages/Cart';
import Care from './pages/Care';
import { BrowserRouter, Routes, Route}
from 'react-router-dom';
import Counter from './pages/Counter';
import Cartpage from './pages/CartPage';
import Upload from './pages/Upload';
import HowTo from './pages/How To';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Register from './pages/Register';
import Find from './pages/Find';
import Design from './pages/Design';
import Single from './pages/Single';
import Sample from './pages/Sample';
import Login from './pages/Login';
import Validation from'./pages/Validation';




function App() {
  return (
    <div className="App">
            
         <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/NailArtEdits" element={<NailArtEdits/>}/>
        <Route path="AboutUs" element={<Aboutus/>}/>
        {/* <Route path="Cantact Us" element={<CantactUs/>}/> */}
        <Route path="Cart" element={<Cart/>}/>
        <Route path="Care" element={<Care/>}/>
        <Route path='/parrat' element={<Counter/>}/>
        <Route path='/CartPage' element={<Cartpage/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/HowTo' element={<HowTo/>}/>
        {/* <Route path='/update' element={<Update/>}/> */}
        {/* <Route path='/edit/:id' element={<Edit/>}/> */}
        {/* <Route path='/register' element={<Register/>}/> */}
        <Route path='/find' element={<Find/>}/>
        <Route path='/design/:id' element={<Design/>}/>
        {/* <Route path='/Single' element={<Single/>}/> */}
        <Route path='/Sample' element={<Sample/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Validation' element={<Validation/>}/>
      </Routes>
         <Footer/>  
      </BrowserRouter> 
    </div>
  );
}

export default App;


