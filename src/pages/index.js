import Head from "next/head";
import Script from "next/script";
import Slide from "components/Slider";
import CategorySlide from "components/CategorySlider";
export default function Home() {
  return (
    <>
    <Head>
      <title>Homelet</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="assets/libs/fontawesome/css/all.css" />
      <link rel="stylesheet" href="assets/css/animate.min.css" />
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

  <div className="main-wrapper">
    
    <header className="topbar">
      <div className="container">
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-dark top-navbar">
            <a
              className="navbar-brand"
              href="https://code-wrapper.com/royal-homes/"
            >
              <img
                src="assets/images/logo1.png"
                className="logo logo-white"
                alt="logo"
                width={150}
              />
              <img
                src="assets/images/logo-dark.png"
                className="logo logo-dark"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler ms-auto "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsible-menu"
              aria-controls="collapsible-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger">
                <span className="hamburger-top" />
                <span className="hamburger-bottom" />
              </span>
            </button>
            <a href="#" className="text-white d-lg-none d-block">
              <i className="fas fa-user-circle font-22 mt-1" />
            </a>
            <div className="collapse navbar-collapse" id="collapsible-menu">
              <ul className="navbar-nav ms-auto primary-menu">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript: void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript: void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript: void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact Us
                  </a>
                  <ul className="dropdown-menu p-0">
                    <li className="dropdown">
                      <a className="dropdown-item" href="#">
                        Property
                      </a>
                      <ul className="dropdown-menu p-0">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://code-wrapper.com/royal-homes/page-property-single-v1.html"
                          >
                            Property Template 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://code-wrapper.com/royal-homes/page-property-single-v2.html"
                          >
                            Property Template 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-item" href="#">
                        Agent
                      </a>
                      <ul className="dropdown-menu p-0">
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://code-wrapper.com/royal-homes/listing-single-agent.html"
                          >
                            Agent Single Page{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript: void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Agents
                  </a>
                </li>
              </ul>
              <a
                href="https://code-wrapper.com/royal-homes/page-login.html"
                className="btn btn-warning py-2 px-4 d-lg-block d-none"
              >
                LOGIN
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    
    {/* Banner Section Start */}
    <section id="v1-banner" className="v1-banner">
      <div className="owl-carousel owl-theme v1-banner-carousel owl-loaded owl-drag">
        <div
          id="coverimage"
          className="v1-banner-item"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="banner-content">
                  <h1 className="text-white banner-title font-55 text-center">
                    Let's Find Your <span className="text-orange">Dream</span>{" "}
                    Home
                  </h1>
                  {/* <p className="banner-desc text-white font-22 text-center">
                    From as low as $10 per day with limited time offer
                    discounts.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner Section End */}

    {/* Search Section Start */}
    <section id="v1-search-property" className="v1-search-property">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <form className="banner-serach-form">
              <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-buy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-buy"
                    type="button"
                    role="tab"
                    aria-controls="pills-buy"
                    aria-selected="true"
                  >
                    Buy
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-rent-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-rent"
                    type="button"
                    role="tab"
                    aria-controls="pills-rent"
                    aria-selected="false"
                  >
                    Rent
                  </button>
                </li>
                <li className="nav-item">
                  <a href
                    className="nav-link"
                  >
                    Invest
                  </a>
                </li>
              </ul>
              <div
                className="tab-content banner-serach-form-content"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="pills-buy"
                  role="tabpanel"
                  aria-labelledby="pills-buy-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <input
                        type="text"
                        className="form-control mb-3 mb-lg-0"
                        name="property-keyword"
                        placeholder="Enter Keywords..."
                        defaultValue=""
                      />
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <select
                        className="form-select form-select-md mb-3 mb-lg-0"
                        aria-label=".form-select-md example"
                        name="property-type"
                      >
                        <option selected="">Property Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <select
                        className="form-select form-select-md mb-3 mb-lg-0"
                        aria-label=".form-select-md example"
                        name="property-location"
                      >
                        <option selected="">Location</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <a
                        className="btn btn-outline-warning more-search-btn w-100 mb-3 mb-lg-0"
                        data-bs-toggle="collapse"
                        href="#more-option"
                        role="button"
                        aria-expanded="false"
                        aria-controls="more-option"
                      >
                        More Options
                        <i className="fas fa-ellipsis-v ms-2" />
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-warning property-search w-100 mb-3 mb-md-0"
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-rent"
                  role="tabpanel"
                  aria-labelledby="pills-rent-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <input
                        type="text"
                        className="form-control mb-3 mb-lg-0"
                        name="property-keyword"
                        placeholder="Enter Keywords..."
                        defaultValue=""
                      />
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <select
                        className="form-select form-select-md mb-3 mb-lg-0"
                        aria-label=".form-select-md example"
                        name="property-type"
                      >
                        <option selected="">Property Type</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <select
                        className="form-select form-select-md mb-3 mb-lg-0"
                        aria-label=".form-select-md example"
                        name="property-location"
                      >
                        <option selected="">Location</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <a
                        className="btn btn-outline-warning more-search-btn w-100 mb-3 mb-lg-0"
                        data-bs-toggle="collapse"
                        href="#more-option"
                        role="button"
                        aria-expanded="false"
                        aria-controls="more-option"
                      >
                        More Options
                        <i className="fas fa-ellipsis-v ms-2" />
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-warning property-search w-100 mb-3 mb-lg-0"
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-sale"
                  role="tabpanel"
                  aria-labelledby="pills-sale-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <input
                        type="text"
                        className="form-control mb-3 mb-lg-0"
                        name="property-keyword"
                        placeholder="Enter Keywords..."
                        defaultValue=""
                      />
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <select
                        className="form-select form-select-md mb-3 mb-lg-0"
                        aria-label=".form-select-md example"
                        name="property-type"
                      >
                        <option selected="">Property Type</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <select
                        className="form-select form-select-md mb-3 mb-lg-0"
                        aria-label=".form-select-md example"
                        name="property-location"
                      >
                        <option selected="">Location</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <a
                        className="btn btn-outline-warning more-search-btn w-100 mb-3 mb-lg-0"
                        data-bs-toggle="collapse"
                        href="#more-option"
                        role="button"
                        aria-expanded="false"
                        aria-controls="more-option"
                      >
                        More Options
                        <i className="fas fa-ellipsis-v ms-2" />
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-warning property-search w-100 mb-3 mb-lg-0"
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="collapse mt-3 position-absolute more-option"
                id="more-option"
              >
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 mb-3">
                        <select
                          className="form-select form-select-md mb-3 mb-md-0"
                          aria-label=".form-select-md example"
                          name="property-status"
                        >
                          <option selected="">Status</option>
                          <option value="Any">Any</option>
                          <option value="For Rent">For Rent</option>
                          <option value="For Sale">For Sale</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-6 mb-3">
                        <select
                          className="form-select form-select-md mb-3 mb-md-0"
                          aria-label=".form-select-md example"
                          name="property-rooms"
                        >
                          <option selected="">Max Rooms</option>
                          <option value={1}>1 Rooms</option>
                          <option value={2}>2 Rooms</option>
                          <option value={3}>3 Rooms</option>
                          <option value={4}>4 Rooms</option>
                          <option value={5}>5 Rooms</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-6 mb-3">
                        <select
                          className="form-select form-select-md mb-3 mb-md-0"
                          aria-label=".form-select-md example"
                          name="property-bed"
                        >
                          <option selected="">Bedrooms</option>
                          <option value={1}>1 Bedrooms</option>
                          <option value={2}>2 Bedrooms</option>
                          <option value={3}>3 Bedrooms</option>
                          <option value={4}>4 Bedrooms</option>
                          <option value={5}>5 Bedrooms</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-6 mb-3">
                        <select
                          className="form-select form-select-md mb-3 mb-md-0"
                          aria-label=".form-select-md example"
                          name="property-bath"
                        >
                          <option selected="">Bathrooms</option>
                          <option value={1}>1 Bathrooms</option>
                          <option value={2}>2 Bathrooms</option>
                          <option value={3}>3 Bathrooms</option>
                          <option value={4}>4 Bathrooms</option>
                          <option value={5}>5 Bathrooms</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-6 mb-3">
                        <select
                          className="form-select form-select-md mb-3 mb-md-0"
                          aria-label=".form-select-md example"
                          name="property-year"
                        >
                          <option selected="">Year Built</option>
                          <option value={2017}>2017</option>
                          <option value={2018}>2018</option>
                          <option value={2019}>2019</option>
                          <option value={2020}>2020</option>
                          <option value={2021}>2021</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-6 mb-3">
                        <select
                          className="form-select form-select-md mb-3 mb-md-0"
                          aria-label=".form-select-md example"
                          name="property-agent"
                        >
                          <option selected="">Agents</option>
                          <option value="Agent 1">Agent 1</option>
                          <option value="Agent 2">Agent 2</option>
                          <option value="Agent 3">Agent 3</option>
                          <option value="Agent 4">Agent 4</option>
                          <option value="Agent 5">Agent 5</option>
                        </select>
                      </div>
                      <div className="col-md-3 col-sm-6 mb-3">
                        <input
                          type="text"
                          name="min-price"
                          className="form-control"
                          placeholder="Min Price"
                        />
                      </div>
                      <div className="col-md-3 col-sm-6 mb-3">
                        <input
                          type="text"
                          name="max-price"
                          className="form-control"
                          placeholder="Max Price"
                        />
                      </div>
                      <div className="col-md-3 col-sm-6 mb-3">
                        <input
                          type="text"
                          name="min-area"
                          className="form-control"
                          placeholder="Min Area"
                        />
                      </div>
                      <div className="col-md-3 col-sm-6 mb-3">
                        <input
                          type="text"
                          name="max-area"
                          className="form-control"
                          placeholder="Max Area"
                        />
                      </div>
                    </div>
                    {/* <h3 className="text-center mb-3">Amenities</h3> */}
                    <div className="row align-items-center">
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Dining-Room"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Dining Room"
                          />
                          <label
                            htmlFor="Dining-Room"
                            className="ms-2 form-check-label"
                          >
                            Dining Room
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Family-Room"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Family Room"
                          />
                          <label
                            htmlFor="Family-Room"
                            className="ms-2 form-check-label"
                          >
                            Family Room
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Air-Condition"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Air Condition"
                          />
                          <label
                            htmlFor="Air-Condition"
                            className="ms-2 form-check-label"
                          >
                            Air Condition
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Cooling-System"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Cooling System"
                          />
                          <label
                            htmlFor="Cooling-System"
                            className="ms-2 form-check-label"
                          >
                            Cooling System
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Heating-System"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Heating System"
                          />
                          <label
                            htmlFor="Heating-System"
                            className="ms-2 form-check-label"
                          >
                            Heating System
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Central-Cooling"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Central Cooling"
                          />
                          <label
                            htmlFor="Central-Cooling"
                            className="ms-2 form-check-label"
                          >
                            Central Cooling
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Central-Heating"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Central Heating"
                          />
                          <label
                            htmlFor="Central-Heating"
                            className="ms-2 form-check-label"
                          >
                            Central Heating
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Dishwasher"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Dishwasher"
                          />
                          <label
                            htmlFor="Dishwasher"
                            className="ms-2 form-check-label"
                          >
                            Dishwasher
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Fireplace"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Fireplace"
                          />
                          <label
                            htmlFor="Fireplace"
                            className="ms-2 form-check-label"
                          >
                            Fireplace
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Fire-Alarm"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Fire Alarm"
                          />
                          <label
                            htmlFor="Fire-Alarm"
                            className="ms-2 form-check-label"
                          >
                            Fire Alarm
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Emergency-Exit"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Emergency Exit"
                          />
                          <label
                            htmlFor="Emergency-Exit"
                            className="ms-2 form-check-label"
                          >
                            Emergency Exit
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Elevator"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Elevator"
                          />
                          <label
                            htmlFor="Elevator"
                            className="ms-2 form-check-label"
                          >
                            Elevator
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Garden"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Garden"
                          />
                          <label
                            htmlFor="Garden"
                            className="ms-2 form-check-label"
                          >
                            Garden
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Parking"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Parking"
                          />
                          <label
                            htmlFor="Parking"
                            className="ms-2 form-check-label"
                          >
                            Parking
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Balcony"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Balcony"
                          />
                          <label
                            htmlFor="Balcony"
                            className="ms-2 form-check-label"
                          >
                            Balcony
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-3 p-2">
                        <div className="form-check">
                          <input
                            id="Home-Theater"
                            className="form-check-input"
                            type="checkbox"
                            name="amenities[]"
                            defaultValue="Home Theater"
                          />
                          <label
                            htmlFor="Home-Theater"
                            className="ms-2 form-check-label"
                          >
                            Home Theater
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* Search Section End */}

    
    {/* SECTION BROWSE BY CATEGORIES */}
    <section className="categories spacer">
        <a className="btn-category" href="#">
        <i id="icon" className="fa-solid fa-house" style={{marginTop:'30px'}}></i>
        </a>
        <a className="btn-category" href="#">
        <i  id="icon"className="fa-solid fa-building" style={{marginTop:'30px'}}></i>
        </a>
        <a className="btn-category" href="#">
        <i  id="icon"className="fa-solid fa-shop" style={{marginTop:'30px'}}></i>
        </a>
        <a className="btn-category" href="#">
        <i  id="icon"className="fa-solid fa-landmark" style={{marginTop:'30px'}}></i>
        </a>
        <a className="btn-category" href="#">
        <i id="icon" className="fa-solid fa-shop" style={{marginTop:'30px'}}></i>
        </a>
        <a className="btn-category" href="#">
        <i  id="icon"className="fa-solid fa-house" style={{marginTop:'30px'}}></i>
        </a>
    </section>

    {/* SECTION BROWSE BY CATEGORIES */}

    {/* Featured Property Section Start */}
    <section className="home-featured-property spacer">
      <div className="container">
        <div className="section-header d-md-flex align-items-center mb-5">
          <div className="section-header-detail">
            <h2>Featured Properties</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>
          <a
            href="javascript:void(0)"
            className="text-decoration-none font-averta-bold ms-auto "
          >
            View All Property <i className="fas fa-chevron-right" />
          </a>
        </div>
        <div className="row justify-content-center d-flex">
        <Slide/>
        </div>
      </div>
    </section>
    {/* Featured Property Section End */}

    {/* Best Selling Property Section Start */}
    <section className="home-featured-property v1-best-property spacer">
      <div className="container">
        <div className="section-header d-md-flex align-items-center mb-5">
          <div className="section-header-detail">
            <h2>Best Selling Properties</h2>
          </div>
          <a
            href="javascript:void(0)"
            className="text-decoration-none font-averta-bold ms-auto "
          >
            View All Property <i className="fas fa-chevron-right" />
          </a>
        </div>
        <div className="row justify-content-center">
          <Slide/>
        </div>
      </div>
    </section>
    {/* Best Selling Property Section Start */}

    {/* LARGE-IMAGE SECTION */}
    <section className="large-image spacer">
      <div className="container-large">
          <div className="section-left">
            <h1>We have a buyer for every property</h1>
            <p>List your properties and sell to more than 2 million buyers that visit homelet.pk every month</p>
          </div>
          <div className="section-right"></div>
      </div>
    </section>
    {/* LARGE-IMAGE SECTION */}


    {/* Become Agents Section Start */}
    <section className="become-agent-section spacer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="text-white font-36">Become a Real Estate Agent</h2>
            <p className="text-white font-20 mt-4">
              Advertise Your Real Estate Properties Through Homelet Website. We Will Promote Your Publications
              & Make Sure That You Generate Maximum Leads Through Our Online Portal.
            </p>
          </div>
          <div className="offset-lg-1 col-lg-5 mt-4 mt-lg-0">
            <div className="card border-0 shadow">
              <div className="card-body">
                <form className="become-agent-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          name="f-name"
                          className="form-control rounded-0"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          name="l-name"
                          className="form-control rounded-0"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded-0"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="text"
                          name="phone"
                          className="form-control rounded-0"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-4">
                        <textarea
                          className="form-control rounded-0"
                          name="message"
                          rows={4}
                          cols={50}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            id="rent"
                            className="form-check-input"
                            type="checkbox"
                            name="agent_option[]"
                            defaultValue="Family Room"
                          />
                          <label
                            htmlFor="rent"
                            className="ms-2 form-check-label"
                          >
                            For Rent
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            id="sale"
                            className="form-check-input"
                            type="checkbox"
                            name="agent_option[]"
                            defaultValue="Family Room"
                          />
                          <label
                            htmlFor="sale"
                            className="ms-2 form-check-label"
                          >
                            For Sale
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mt-3">
                        <input
                          type="submit"
                          name="phone"
                          className="btn btn-warning w-100 py-3"
                          defaultValue="Send"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Become Agents Section End */}
    {/* CTA Section Start */}
    <section className="home-cta-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="call-to-action-meta">
              <div className="cta-info">
                <h1 className="text-white">Looking for a dream home?</h1>
                <p className="text-white mb-0">
                  We can help you realize your dream of a new home
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cta-btn text-md-end mt-4 mt-md-0">
              <a href="javascript:void(0)" className="btn btn-warning">
                Explore Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section End */}
    {/* Footer */}
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="footer-about">
              <h3 className="font-18">About Site</h3>
              <p className="mt-4 pt-2 pe-4">
              HomeLet is Pakistan’s 1st Property Portal that offers verified properties to its clients. Homelet is focused to change the dynamics of real estate industry of Pakistan through transparency, verified properties and smooth transactions/homelet/web.
              </p>
              <a href="#" className="text-body text-decoration-none">
                Read More <i className="fas fa-chevron-right ms-2" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
            <h3 className="font-18">Contact Us</h3>
            <p className="mt-4 pt-2 pe-5 d-flex mb-3">
              <i className="fas fa-map-marker-alt mt-1 font-22 me-3" />
              Plaza No. 143, Hub Commercial, in front of Bahria Town Head Office, Phase-8 Rawalpindi.
            </p>
            <p className="pe-5 d-flex mb-3">
              <i className="fab fa-whatsapp mt-1 font-22 me-3" />
              HomeLet UAN 033 1111 0353
            </p>
            <p className="pe-5 d-flex mb-3">
              <i className="fas fa-envelope mt-1 font-22 me-3" />
              info@homelet.pk
            </p>
          </div>
          <div className="col-md-12 col-lg-4 mt-4 mt-lg-0">
            <h3 className="font-18">Remain Updated</h3>
            <form className="nl-form mt-4 pt-2">
              <input type="email" placeholder="Enter Your Email Address" className="form-control" id="email" />
              <button type="submit" className="btn btn-warning py-2 px-4 mt-3">
                Submit
              </button>
            </form>
            <ul className="list-unstyled list-inline footer-social-link mt-4 pt-3">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f font-22" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram font-22" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter font-22" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube font-22" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom row">
          <div className="col-md-4 col-lg-6">
            <p>© 2022. All rights reserved.</p>
          </div>
          <div className="col-md-8 col-lg-6 text-md-end">
            <ul className="list-inline footer-link">
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none">
                  FAQ
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none">
                  Privacy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <Script src="assets/js/bootstrap.bundle.min.js"></Script>
    <Script src="assets/js/jquery.min.js"></Script>
    {/* <Script src="assets/js/owl.carousel.min.js"></Script> */}
    <Script src="assets/libs/fontawesome/js/all.js"></Script>
    <Script src="assets/js/isotope.pkgd.min.js"></Script>
    <Script src="assets/js/custom.js"></Script>
  {/* Required JS */}
</>

  )
}
