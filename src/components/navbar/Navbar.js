import React from 'react';
import { useState } from 'react';
import Reactlogo from './Vector 1.svg';
import store from './store.pk.svg';
import search from './Frame.svg';
import orderimg from './orders.svg';
import pakistan from './pakistan.svg';
import returnimg from  './return.svg';
import contact from './contact.svg';
import user from './user.svg';
import like from './like.svg';
import cart from './cart.svg';
import sidebar from './sidebar.svg';
import fb from './fb.svg';

const Navbar = () => {

  const [display, setDisplay] = useState(false);
  const onchange = () =>{
    setDisplay(!display)
  }

  return (
    <div className='navbar1'>
      <div className="container1">
        <div className='logos'>
            <img src={Reactlogo} alt="img"></img>                
            <img src={store} alt="img"></img>
        </div>
        <div className='search'>
            <div className='searchinput'>
                <select>
                    <option value="All category">All category</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Mobiles">Mobiles</option>
                </select>
                <input type="text" placeholder='Search for products'></input>
            </div>
            <img src={search} alt="img"></img>
        </div>
        <div className='links'>
            <p><img src={orderimg} alt="img" /> Orders & Tracking</p>
            <p><img src={pakistan} alt="img" /> Delivery within pakistan</p>
            <p><img src={returnimg} alt="img" /> Return</p>
        </div>
        <div className='links'>
            <p>Call us now</p>
            <p><img src={contact} alt="img"></img> +011 5827918</p>
            <p>Sign in</p>
        </div>
        <div>
        <div className='icons'>
            <img src={user} alt="img"></img>
            <img src={like} alt="img"></img>
            <div className='text'>
              <img src={cart} alt="img"></img>
              <span> Cart</span>
            </div>
        </div>
        </div>
      </div>
      <div className='mainnav'>
        <div className='menu'style={{ position: 'relative'}}>
          <span className='size' onClick={onchange}>
            <img src={sidebar} alt="img">
            </img> Browse by category
          </span>
          <div className='dropdownbox' style={{ display:  display ? 'block' : 'none'}}>
              <div>W1</div>
              <div>W2</div>
              <div>W3</div>
              <div>W4</div>
              <div>W5</div>
              <div>W6</div>
          </div>
          <a className='size' href="/">Home</a>
          <a className='size' href="/">Easy Monthly Installments</a>
          <a className='size' href="/">Shop by Brands</a>
          <a className='size' href="/">Become a Vendor</a>
        </div>
        <div className='socials'>
          <img src={fb} alt="img"></img>
          <img src={fb} alt="img"></img>
          <img src={fb} alt="img"></img>
          <img src={fb} alt="img"></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar
