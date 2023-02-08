import React from "react";
import Slider from "react-slick";
const Slide = () =>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };
    
    return(
        <div>
        <Slider {...settings}>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
            <div className="card v1-featured-property-card">
              <div className="featured-product-img position-relative">
                <img
                  src="assets/images/property-img/fe-property-img-6.jpg"
                  alt="featured-property"
                  className="img-fluid w-100 fe-pro-img"
                />
                <div className="property-details mb-2">
                  <h4 className="text-white mb-0">
                    PKR 60,30,000/<span>mo</span>
                  </h4>
                  <div className="property-view ms-auto">
                    <a href="#">
                      <i className="fas fa-exchange-alt" />
                    </a>
                    <a href="#">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="property-tag">
                  <ul className="list-unstyled mb-0">
                    <li className="bg-blue">For Rent</li>
                  </ul>
                </div>
                <span className="featured-property me-2 text-white bg-green">
                  <i className="fas fa-star font-12" />
                </span>
                <span className="hot-property me-2 text-white bg-orange">
                  <i className="fas fa-fire font-12" />
                </span>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-orange mb-0">Apartment</p>
                <h4 className="font-20 product-title">
                  <a href="#" className="text-decoration-none">
                    Modern Apartments
                  </a>
                </h4>
                <p>
                  <i className="fas fa-map-marker-alt" /> Bahria Town, Phase VII, Rawalpindi
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-auto">
                  <li>
                    <p className="mb-0">
                      3 <i className="fas fa-bed" />
                    </p>
                    Bedrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      2 <i className="fas fa-sink" />
                    </p>
                    Bathrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      1250 <i className="fas fa-vector-square" />{" "}
                    </p>
                    square Ft
                  </li>
                </ul>
              </div>      
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
            <div className="card v1-featured-property-card">
              <div className="featured-product-img position-relative">
                <img
                  src="assets/images/property-img/fe-property-img-5.jpg"
                  alt="featured-property"
                  className="img-fluid w-100 fe-pro-img"
                />
                <div className="property-details mb-2">
                  <h4 className="text-white mb-0">
                    PKR 40,000/<span>mo</span>
                  </h4>
                  <div className="property-view ms-auto">
                    <a href="#">
                      <i className="fas fa-exchange-alt" />
                    </a>
                    <a href="#">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="property-tag">
                  <ul className="list-unstyled mb-0">
                    <li className="bg-blue">For Rent</li>
                  </ul>
                </div>
                <span className="hot-property me-2 text-white bg-green">
                  <i className="fas fa-star font-12" />
                </span>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-orange mb-0">Villa</p>
                <h4 className="font-20 product-title">
                  <a href="#" className="text-decoration-none">
                    Luxury Villa in Islamabad
                  </a>
                </h4>
                <p>
                  <i className="fas fa-map-marker-alt" /> Sector I-10, Islamabad.
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-auto">
                  <li>
                    <p className="mb-0">
                      3 <i className="fas fa-bed" />
                    </p>
                    Bedrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      2 <i className="fas fa-sink" />
                    </p>
                    Bathrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      1250 <i className="fas fa-vector-square" />{" "}
                    </p>
                    square Ft
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
            <div className="card v1-featured-property-card">
              <div className="featured-product-img position-relative">
                <img
                  src="assets/images/property-img/fe-property-img-4.jpg"
                  alt="featured-property"
                  className="img-fluid w-100 fe-pro-img"
                />
                <div className="property-details mb-2">
                  <h4 className="text-white mb-0">
                    PKR 43,000/<span>mo</span>
                  </h4>
                  <div className="property-view ms-auto">
                    <a href="#">
                      <i className="fas fa-exchange-alt" />
                    </a>
                    <a href="#">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="property-tag">
                  <ul className="list-unstyled mb-0">
                    <li className="bg-orange">For Sale</li>
                  </ul>
                </div>
                <span className="featured-property me-2 text-white bg-green">
                  <i className="fas fa-star font-12" />
                </span>
                <span className="hot-property me-2 text-white bg-orange">
                  <i className="fas fa-fire font-12" />
                </span>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-orange mb-0">Family Home</p>
                <h4 className="font-20 product-title">
                  <a href="#" className="text-decoration-none">
                    Luxury Family Home
                  </a>
                </h4>
                <p>
                  <i className="fas fa-map-marker-alt" /> Madina Town, Faisalabad
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-auto">
                  <li>
                    <p className="mb-0">
                      3 <i className="fas fa-bed" />
                    </p>
                    Bedrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      2 <i className="fas fa-sink" />
                    </p>
                    Bathrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      1250 <i className="fas fa-vector-square" />{" "}
                    </p>
                    square Ft
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex">
            <div className="card v1-featured-property-card">
              <div className="featured-product-img position-relative">
                <img
                  src="assets/images/property-img/fe-property-img-6.jpg"
                  alt="featured-property"
                  className="img-fluid w-100 fe-pro-img"
                />
                <div className="property-details mb-2">
                  <h4 className="text-white mb-0">
                    PKR 47,000/<span>mo</span>
                  </h4>
                  <div className="property-view ms-auto">
                    <a href="#">
                      <i className="fas fa-exchange-alt" />
                    </a>
                    <a href="#">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="property-tag">
                  <ul className="list-unstyled mb-0">
                    <li className="bg-blue">For Rent</li>
                  </ul>
                </div>
                <span className="featured-property me-2 text-white bg-green">
                  <i className="fas fa-star font-12" />
                </span>
                <span className="hot-property me-2 text-white bg-orange">
                  <i className="fas fa-fire font-12" />
                </span>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-orange mb-0">Apartment</p>
                <h4 className="font-20 product-title">
                  <a href="#" className="text-decoration-none">
                    Modern Apartments
                  </a>
                </h4>
                <p>
                  <i className="fas fa-map-marker-alt" /> Gujranwala, Pakistan.
                </p>
                <ul className="list-unstyled d-flex justify-content-between mb-0 mt-auto">
                  <li>
                    <p className="mb-0">
                      3 <i className="fas fa-bed" />
                    </p>
                    Bedrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      2 <i className="fas fa-sink" />
                    </p>
                    Bathrooms
                  </li>
                  <li>
                    <p className="mb-0">
                      1250 <i className="fas fa-vector-square" />{" "}
                    </p>
                    square Ft
                  </li>
                </ul>
              </div>      
            </div>
          </div>
        </Slider>
        </div>
    )
}
export default Slide