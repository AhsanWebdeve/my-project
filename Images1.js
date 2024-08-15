export default function Images1({card}) {
    const iconlist = [{ic:"fa-solid fa-cart-shopping", lic : "one"} ,{ic:"fa-solid fa-rotate-right",lic :"two"},{ic:"fa-solid fa-magnifying-glass", lic : "three"},{ic:"fa-regular fa-heart",lic:"four"}]
   
    return (
       
        <div className='card'>
        <div className='img-portion'>
          {card.onsale && <p className="onsale-card">On sale</p>}
          {card.new && <p className="New-card">New</p>}
            <img className='img1' src={card.img} alt='try'></img>
            <img className='img2' src={card.img2} alt='try'></img>
           <div className="ul-wrapper">
           <ul className="icon-ul">
              {iconlist.map((item)=><li className={`images-li ${item.lic} `}><i className={item.ic}></i></li>)}
            </ul>
           </div>
        </div>
        <div className='text-portion'>
         
              {Array.from({ length: 5 }, (_,i)=><i className="fa-solid fa-star"></i>)}
            <p>{card.description}</p>
            <p className="price">{card.price}</p>
            <div className='dots'>
                <div className='dot'></div>
            </div>
        </div>
      </div>
    )
  }