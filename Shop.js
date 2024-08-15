import React from 'react'

export default function Shop() {
    const shopData = ["TabStyleNew","TopFilter","Modern","LeftSidebar","RightSidebar","NoSidebar","Sidebar popup","Metro","Full width","Infinite Scroll","TreeGrid","SixGrid","ListView"]
  return (
    <ul className='shop-dropdown'>
        {shopData.map((item)=> <li>{item} <div className='shop-container'></div></li>)}
    </ul>
   
  )
}
