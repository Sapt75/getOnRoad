import React from 'react';
import './Home Page/HomePage.css';
// import Brand1 from './images/Brand Logos/brand-1.png';
// import Brand2 from './images/Brand Logos/brand-2.png';
// import Brand3 from './images/Brand Logos/brand-3.png';
// import Brand4 from './images/Brand Logos/brand-4.png';
// import Brand5 from './images/Brand Logos/brand-5.png';
// import Brand6 from './images/Brand Logos/brand-6.png';
// import Brand7 from './images/Brand Logos/brand-7.png';
// import Brand8 from './images/Brand Logos/brand-8.png';
// import Brand9 from './images/Brand Logos/brand-9.png';
// import Brand10 from './images/Brand Logos/brand-10.png';
// import Brand11 from './images/Brand Logos/brand-11.png';
// import Brand12 from './images/Brand Logos/brand-12.png';
// import Brand13 from './images/Brand Logos/brand-13.png';
// import Brand14 from './images/Brand Logos/brand-14.png';
// import Brand15 from './images/Brand Logos/brand-15.png';
// import Brand16 from './images/Brand Logos/brand-16.png';
// import Brand17 from './images/Brand Logos/brand-17.png';
// import Brand18 from './images/Brand Logos/brand-1.png';
// import Brand19 from './images/Brand Logos/brand-19.png';
import MostSearchedCars from './MostSearchedCars';
import TestMain from './TestFolder/TestMain';
import TestPrice from './TestFolder/TestPrice';
import TestBody from './TestFolder/TestBody';
import TestFuel from './TestFolder/TestFuel';
import TestTransmission from './TestFolder/TestTransmission';
import TestSeat from './TestFolder/TestSeat';







// import Brand1 from './images/brand1.jpg';
// import Banner from './images/banner1.jpg';

function HomePage() {
    
    return (
        <>
            <div className="banner" id="banner">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner banner">
                        <div className="carousel-item active item-bg bkg-banner">
                            {/* <img className="d-block w-100 h-100" src={Banner} alt="banner"/> */}
                            <div className="carousel-content container banner-info bi-2 bi-3">
                                <div className="text-center banner-text-sec">
                                    <h2 className='h2-font-banner wt-txt-color'>Get<span>Onroad</span>Price</h2>
                                    <h2 className='h2-font-banner-d wt-txt-color'>Get<span>OnroadPrice</span>Here</h2>
                                    <h2 className='banner-secondtext'><br />of your Dream Car</h2>
                                    <div className="input-group pt-3">
                                        <div className="form-outline">
                                            <input type="search" id="form1" placeholder='Type your car name' className="form-control banner-search-form banner-search-input-field text-dark text-center rounded-0" />
                                            <input className='dis-phone-none border-0 blue-background-btn px-4' type="submit" value="Search" />
                                            {/* <label className="form-label" for="form1">Type your car name</label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advertisement section */}
            <div className="container">
                <div className="advertisement-sec">
                    <p>Advertisement</p>
                </div>
            </div>

            {/* Find the car for your choice section */}
            <div className="featured-car content-area slide-box-2">
                <div className="container text-center py-5">
                    <div className="main-title pb-3">
                        <h1 className='h3-font-size h1-phone'>Find the cars of your choice</h1>

                    </div>


                    <div className="faq-box">
                        <div className="faq-info">
                            <ul className="nav nav-tabs border-0 mb-4" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home2" aria-selected="true">By Brand</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#budget" type="button" role="tab" aria-controls="budget" aria-selected="false">Budget</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#body" type="button" role="tab" aria-controls="body" aria-selected="false">Body Type</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#fuel" type="button" role="tab" aria-controls="fuel" aria-selected="false">Fuel Type</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#trasmission" type="button" role="tab" aria-controls="trasmission" aria-selected="false">Trasmission</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#seating" type="button" role="tab" aria-controls="seating" aria-selected="false">Seating Capacity</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link offers-red" id="contact-tab" data-bs-toggle="tab" data-bs-target="#offers" type="button" role="tab" aria-controls="offers" aria-selected="false">Offers</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent2">
                                <div className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row p-3">
                                        <TestMain />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="budget" role="tabpanel" aria-labelledby="profile-tab">
                                    <TestPrice />
                                </div>
                                <div className="tab-pane fade" id="body" role="tabpanel" aria-labelledby="contact-tab">
                                    <TestBody status={false} />
                                </div>
                                <div className="tab-pane fade" id="fuel" role="tabpanel" aria-labelledby="contact-tab">
                                    <TestFuel />
                                </div>
                                <div className="tab-pane fade" id="trasmission" role="tabpanel" aria-labelledby="contact-tab">
                                    <TestTransmission />
                                </div>
                                <div className="tab-pane fade" id="seating" role="tabpanel" aria-labelledby="contact-tab">
                                    <TestSeat />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MostSearchedCars />
            {/* Find the car for your choice section over */}
            <footer className="px-2 py-1 text-center pb-4">
                <div className="textlogo-footer-phone py-1">
                    <div className="text-logo">
                        <h3 className='italic-text'>
                            Get
                            <span className='normal-text'>
                                Onroad
                            </span>
                            Price
                        </h3>
                    </div>
                </div>
                <div className="input-group justify-content-center">
                    <div className="form-outline footer-searchbox">
                        <input type="search" id="form1" placeholder='Type your car name' className="form-control text-center rounded-0" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomePage