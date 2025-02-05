import logo from './logo.svg';
import './App.css';
import Body from './components/Body'
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Cart from './components/Cart';
import About from './components/About';
import {Route,Routes, BrowserRouter as Router, Link} from 'react-router-dom'
import ShoeCard from './components/ShoeCard';
import BuyNowPage from './components/Buynow'
import Login from './utils/Login';
import UserProviderWrapper from './utils/UserProviderWrapper';

const Hello=()=><div>Welcome</div>
function App() {
  return (
    <div className="App">
     
     
    {/* <Carousel/> */}
      {/* <Body/> */}
      {/* <Link to="/hello">click me</Link> */}
     
     <Router>
      <UserProviderWrapper>
     <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/hello" element={<Hello/>}/>
        <Route path="/buynow/:id" element={<BuyNowPage/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/shoedetails/:id" element={<ShoeCard/>}></Route>
      </Routes>
      <Footer/>
      </UserProviderWrapper>
     </Router>
    
    </div>
  );
}

export default App;
