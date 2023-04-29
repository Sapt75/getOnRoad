import React from 'react'

function NewFooter() {
  return (
    <>
    <div className=" g-theme-background g-white-text pt-3 justify-content-center">
        <div className="footer-box justify-content-center d-flex">
            <div className="footer-box-inner">
            <div className="col-4">
                <ul className="footer-sec-one list-unstyled">
                    <h5 className='footerfont-p m-0 g-bold g-p-lh'>Overview</h5>
                    <li className='footerfont-p'>About Us</li>
                    <li className='footerfont-p'>FAQs</li>
                    <li className='footerfont-p'>Privacy Policy</li>
                    <li className='footerfont-p'>Terms and Conditions</li>
                </ul>
            </div>
            <div className="col-4 text-center">
                <h5 className='footerfont-p g-bold m-0 g-p-lh'>Connect With Us</h5>
                <p className='footerfont-p'>&#123;Dynamic Content&#125;</p>
            </div>
            <div className="col-4 text-center">
                <h5 className='footerfont-p g-bold g-p-lh m-0'>Follow Us</h5>
                <i className="fa fa-facebook-f mx-1"></i>
                <i className="fa fa-instagram mx-1"></i>
                <i className="fa fa-twitter mx-1"></i>
                <i className="fa fa-youtube-play mx-1"></i>
            </div>
        </div>
        </div>
        <div className="copyrightsec text-center"><p className='m-0 pb-3 footerfont-p g-bold'>&#169; 2022 Getonroadprice.com</p></div>
    </div>
    </>
  )
}

export default NewFooter
