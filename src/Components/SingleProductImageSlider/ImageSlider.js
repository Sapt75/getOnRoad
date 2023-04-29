import React from 'react';
import '../SingleProductImageSlider/ImageSlider.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagesl1 from './imagesslider/1.png';
import imagesl2 from './imagesslider/2.png';
import imagesl3 from './imagesslider/3.png';
import imagesl4 from './imagesslider/4.png';
import imagesl5 from './imagesslider/5.png';
import imagesl6 from './imagesslider/6.png';
import imagesl7 from './imagesslider/7.png';
import imagesl8 from './imagesslider/8.png';



function ImageSlider() {
  return (
    <div className='imagecarousel'>
        <Carousel showArrows className='imagecarousel-box text-center' >
                <div>
                    {/* <div className="image">
                        <img src={imagesl1} alt="firstimage" />
                    </div> */}
                    
                    <img src={imagesl1} alt='1st' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={imagesl2} alt='2nd' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={imagesl3} alt='3rd' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={imagesl4} alt='3rd' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={imagesl5} alt='3rd' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={imagesl6} alt='3rd' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={imagesl7} alt='3rd' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={imagesl8} alt='3rd' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div>
            <ul  className="nav nav-tabs border-0 mb-2 justify-content-center tabs-image-type" id="myTab" role="tablist">
                    <li  className="tab-item" role="presentation">
                        <button  className="tab-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" aria-controls="home2" aria-selected="true">Exteriors</button>
                    </li>
                    <li  className="tab-item" role="presentation">
                        <button  className="tab-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#budget" type="button" role="tab" aria-controls="budget" aria-selected="false">Interiors</button>
                    </li>
                    <li  className="tab-item" role="presentation">
                        <button  className="tab-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#body" type="button" role="tab" aria-controls="body" aria-selected="false">360 View</button>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default ImageSlider