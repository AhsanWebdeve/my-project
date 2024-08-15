import React from 'react'
import { useState } from 'react'
    
    export default function Product() {
      const productData = ["360 View New","Video Thumbnail New","Sidebar","Thumbnail Image","Three column","Four Image","Sticky","Accordian","Bundle","Image Swatch","Vertical Tab"]
      const [hoverState,setHoverState] = useState(false);
      const hoverStatefunc =()=> {setHoverState(true)}
  return (
    <ul className='Product-dropdown'>
      {productData.map((item)=> <li onMouseEnter={hoverStatefunc}>{item}    <div className='product-container'></div> {item === 'Sidebar' && hoverState ? <ul><li>Left sidebar</li></ul>:""} {item === 'Video Thumbnail New' && hoverState ? <ul><li>Left Image</li></ul>:""}  {item === 'Three column' && hoverState ? <ul><li>Thunmbnail left</li></ul>:""}</li>)}

    </ul>
  )
}