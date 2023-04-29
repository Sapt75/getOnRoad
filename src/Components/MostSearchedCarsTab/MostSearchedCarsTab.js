import React from 'react';
import '../MostSearchedCarsTab/MostSearchedCarsTab.css';
import car1 from '../images/Most Searched Car/car-2.jpg';
import car2 from '../images/Most Searched Car/car-3.jpg';
import car3 from '../images/Most Searched Car/car-1.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function MostSearchedCarsTab() {
  return (
    <>
      <Tabs>
        <TabList className='mostsearchedcarstab'>
          <Tab>Hatchback</Tab>
          <Tab>Sedan</Tab>
          <Tab>SUV</Tab>
          <Tab>MUV</Tab>
          <Tab>Electric</Tab>
          <Tab>Luxury</Tab>
        </TabList>

      <TabPanel >
        <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                    <a href="/" className="car-img">
                      <img className="d-block w-100" src={car1} alt="car"/>
                    </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Renault KWID</a><br/>
                    <a href="/">Rs4.25 - 5.65 Lakhs</a><br/>
                    <button className='dis-phone-none g-read-more-btn'>GetOnRoadPrice</button>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car2} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a><br/>
                    <button className='dis-phone-none g-read-more-btn'>GetOnRoadPrice</button>
                  </h1>
                </div>
              </div>
            </div>
            <div className="dis-phone-none col-lg-4 col-md-4 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car3} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a><br/>
                    <button className='dis-phone-none g-read-more-btn'>GetOnRoadPrice</button>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center showallbtn pb-3">
            <button>View All</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel >
        <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
          <div className="row">
            
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car2} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                    <a href="/" className="car-img">
                      <img className="d-block w-100" src={car1} alt="car"/>
                    </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Renault KWID</a><br/>
                    <a href="/">Rs4.25 - 5.65 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center showallbtn pb-3">
            <button>View All</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel >
        <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                    <a href="/" className="car-img">
                      <img className="d-block w-100" src={car1} alt="car"/>
                    </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Renault KWID</a><br/>
                    <a href="/">Rs4.25 - 5.65 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car2} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center showallbtn pb-3">
            <button>View All</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel >
      <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
          <div className="row">
            
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car2} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                    <a href="/" className="car-img">
                      <img className="d-block w-100" src={car1} alt="car"/>
                    </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Renault KWID</a><br/>
                    <a href="/">Rs4.25 - 5.65 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center showallbtn pb-3">
            <button>View All</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel >
        <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                    <a href="/" className="car-img">
                      <img className="d-block w-100" src={car1} alt="car"/>
                    </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Renault KWID</a><br/>
                    <a href="/">Rs4.25 - 5.65 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car2} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center showallbtn pb-3">
            <button>View All</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel >
      <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
          <div className="row">
            
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                  <a href="/" className="car-img">
                    <img className="d-block w-100" src={car2} alt="car"/>
                  </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Maruti Swift</a><br/>
                    <a href="/">Rs4.62 - 5.96 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="car-box">
                <div className="car-thumbnail">
                    <a href="/" className="car-img">
                      <img className="d-block w-100" src={car1} alt="car"/>
                    </a>
                </div>
                <div className="detail">
                  <h1 className="title">
                    <a href="/">Renault KWID</a><br/>
                    <a href="/">Rs4.25 - 5.65 Lakhs</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center showallbtn pb-3">
            <button>View All</button>
          </div>
        </div>
      </TabPanel>   
  </Tabs>
    </>
  )
}

export default MostSearchedCarsTab
