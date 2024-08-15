import { useState } from 'react';
import Lists from './Lists';
import Shop from './Shop'
import Product from './Product';

export default function Navbar() {
  const [condition , setCondition] = useState('');
    const navdata = ["home","feature","shop","product","pages","blog"];    const iconData = ["fa-solid fa-magnifying-glass","fa-solid fa-gear","fa-solid fa-cart-shopping"]
    const iconsData = ["fa-solid fa-bars"]
    const featureShowFunc = (item)=>{
        setCondition("hidden");
      
    }
    const featureShowFuncenter = (item)=>{
        setCondition(item);
    }
  return (
<>
<nav>
      <div className="left">
    <div className="icons">
      {iconsData.map((item)=> <i className={item}></i>)}
    </div>
      <div className="logo-container">
            <img  src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png" alt="logo"></img>
        </div>

      </div>
      <div className="right">
      <div className="ul-container">
            <ul>
            {navdata.map((item)=> <li onClick={()=>{featureShowFunc(item)}}   onMouseEnter={()=>{featureShowFuncenter(item)}}>{item}</li>)}
            </ul>
        </div>
        <div className="icons-container">
        {iconData.map((item)=> <i className={item}></i>)}
        </div>
      </div>
    </nav>
{condition === "feature" ? <Lists/> : condition === 'shop' ? <Shop/> :  condition === 'product' ? <Product/> :""}   
</>
  )
}