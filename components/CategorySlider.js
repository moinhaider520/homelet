import React from "react";
import Slider from "react-slick";
const CategorySlide = () =>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    return(
        <div>
        <Slider {...settings}>
        <div>
        <a className="btn-category" href="#">
        <i className="fab-fa-facebook-f"></i>
        </a>
        </div>
        <div>
        <a className="btn-category" href="#">
        <i className="fab-fa-facebook-f"></i>
        </a>
        </div>
        <div>
        <a className="btn-category" href="#">
        <i className="fab-fa-facebook-f"></i>
        </a>
        </div>
        <div>
        <a className="btn-category" href="#">
        <i className="fab-fa-facebook-f"></i>
        </a>
        </div>
        <div>
        <a className="btn-category" href="#">
        <i className="fab-fa-facebook-f"></i>
        </a>
        </div>
        <div>
        <a className="btn-category" href="#">
        <i className="fab-fa-facebook-f"></i>
        </a>
        </div>
        </Slider>
        </div>
    )
}
export default CategorySlide