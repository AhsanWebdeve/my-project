import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './customStyle.css'
import Card from "./Card";
export default function Carousel() {
    const CarouselData = [{description : "Purple polo Tshirt", price : "$50.00", onsale : false, new : true,img : "images/carousel/purple.jpg",img2 : "images/carousel/purple2.jpg" , id :1},


    {description : "Candy red polo Tshirt", price : "$80.00", onsale : true, new : false,img : "images/carousel/red.jpg",img2 : "images/carousel/red2.jpg" , id :2},
    
    
    
    {description : "White sleevless top", price : "$20.00", onsale : true, new : true,img : "images/carousel/white.jpg",img2 : "images/carousel/white2.jpg" , id :3},


    {description : "Multi color", price : "$70.00", onsale : false, new : false,img : "images/carousel/blue.jpg",img2 : "images/carousel/blue2.jpg" , id :4},


    {description : "White sleevless top", price : "$90.00", onsale : true, new : false,img : "images/carousel/white.jpg",img2 : "images/carousel/white2.jpg" , id :5},


]
    const settings = {
     dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
      };
 
  return (
    <div className='main-container'>
      <Slider {...settings}>
        {CarouselData.map((card)=> <Card card={card}/>)}
      </Slider>
    </div>
  )
}