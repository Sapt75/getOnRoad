import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/CarModelPage.css';
import Pricetag from './images/icons/tag.png';
import engineicon from './images/icons/engine.png';
import Fuletypeicon from './images/icons/fuletypeicon.png';
import Transmissionicon from './images/icons/transmissionicon.png';
import seaticon from './images/icons/seaticon.png';
import fuleicon from './images/icons/fuleicon.png';
import ImageSlider from './SingleProductImageSlider/ImageSlider';
import offericon from './images/icons/offer.png';
import carcolor1 from './images/carcolors/carcolour1.png';
import Thumbsup from './images/icons/thumbsup.png';
import Thumbsdown from './images/icons/thumbsdown.png';
import PopupLeadForm from './PopupLeadForm/PopupLeadForm';
import VariantsTab from './VariantPage/VariantsTab';
import PriceModal from './Price_Modal/price_modal';
import PopupClone from './PopupLeadForm/Popupclone';
import PopupClone2 from './PopupLeadForm/Popupclone2';
// import Tick from './images/icons/tick.png';


// import './ProductImageSlider'


function CarModelPage() {
  const [getmodels, setGetModels] = useState([]);
  const [versionPrice, setVersionPrice] = useState([])
  const [finalVersion, setFinalVersion] = useState([])
  const [getprices, setGetPrices] = useState([]);
  const [modelPrice, setModelPrice] = useState([])
  const [getVersion, setVersion] = useState([])
  const [tshow, setShow] = useState(false)
  const [modal, showModal] = useState(false)
  const [spec, setSpecs] = useState()



  const { brand, model, uniqueId, model_id } = useParams("");
  console.log(brand, "", model, "", uniqueId, model_id);

  const GetData = async (e) => {
    const res = await fetch(`/getmodelnewdetails?brand=${brand}&model_name=${model}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setGetModels(data)
      console.log("Data Fetched!");
    }



    // const res_two = await fetch(`/pricedetail/${uniqueId}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    // const pricedata = await res_two.json();
    // // console.log(pricedata);
    // if (res_two.status === 422 || !pricedata) {
    //   console.log("error");
    // } else {
    //   setGetPrices(pricedata)
    //   console.log("PriceData Fetched!");
    // }
  }

  async function getModel() {
    let specef = {
      transmission: "",
      fuel: "",
      seat: ""
    }
    let data = await fetch(`/model_car/${brand}/${model}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()

    specef.transmission = res.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t.transmission_type == value.transmission_type
      })
    })

    specef.fuel = res.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t.fuel_type == value.fuel_type
      })
    })

    specef.seat = res.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t.seating_capacity == value.seating_capacity
      })
    })

    setSpecs(specef)



  }

  async function getModelPrice() {
    let data = await fetch(`/model_prices/${model_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()

    response == "No Data" ? setModelPrice([]) : setModelPrice(response)
  }

  async function getVersionData() {
    let data = await fetch(`/version_data/${model_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()
    setVersion(response)
    setFinalVersion(response)
  }

  async function getVersionPrice() {
    let data = await fetch(`/version_prices/${model_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()

    response == "No Data" ? setVersionPrice([]) : setVersionPrice(response)
  }


  const usenav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    usenav(`/car-dealers/${brand}/${model}/${e.target.pincode.value}`)
  }

  function numFormat(num) {
    // Limit to three significant digits
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3, notation: 'compact' }).format(num);
    // Expected output: "1,23,000"
  }


  useEffect(() => {
    GetData()
    getModelPrice()
    getVersionData()
    getVersionPrice()
    getModel()
  }, []);

  const versionuids_in_cardata = [];

  getmodels.forEach((element) => {
    const check = versionuids_in_cardata.includes(element.uid);
    if (check === false) {
      versionuids_in_cardata.push(element.uid)
    }
  });
  console.log(versionuids_in_cardata);



  // const versionuids_in_pricelist = [];

  // getprices.forEach((element)=>{
  //   let check = versionuids_in_pricelist.includes(element.Version_UID);
  //   if(check === false){
  //     versionuids_in_pricelist.push(element.Version_UID)
  //   }
  // });
  // console.log(versionuids_in_pricelist);




  const allversionprice = [];

  getprices.forEach((element) => {
    const checkuid = versionuids_in_cardata.includes(element.Version_UID);
    if (checkuid === true) {
      allversionprice.push(element.ex_showroom_price);
    }
  });
  console.log(allversionprice);

  // const max = Math.max.apply(null, varsion_price_in_int);
  // const min = Math.min.apply(null, varsion_price_in_int);

  const max = Math.max.apply(null, allversionprice);
  const min = Math.min.apply(null, allversionprice);

  // let floatmin = parseFloat(min);
  // let floatmax = parseFloat(max);
  // console.log("max=",{floatmax})

  function formatNumberToLakh(number) {
    if (typeof number !== 'number') {
      return NaN; // return NaN if the argument is not a number
    }
    return (number / 100000).toFixed(2) + ' Lakh';
  };
  console.log();


  const minpriceinlakh = formatNumberToLakh(min);
  const maxpriceinlakh = formatNumberToLakh(max);




  const min_versionuid = Math.min.apply(null, versionuids_in_cardata);


  const only_one_model_ex_price = []

  getprices.forEach((element) => {
    const checkuid = versionuids_in_cardata.includes(element.Version_UID);
    if (checkuid === true && element.Version_UID === min_versionuid) {
      only_one_model_ex_price.push(element);
    }
  })
  console.log(only_one_model_ex_price);



  const test_price = []

  getprices.forEach((element) => {
    const check = versionuids_in_cardata.includes(element.Version_UID)
    const chech_test_uin = test_price.includes(element)
    if (chech_test_uin === false && check === true) {
      test_price.push(element);
    }
  })

  console.log(test_price);


  const prices = {};
  for (let i = 0; i < test_price.length; i++) {
    const pricedata = test_price[i];

    if (!prices[pricedata.Version_UID]) {
      prices[pricedata.Version_UID] = [];
    }
    prices[pricedata.Version_UID].push(pricedata.ex_showroom_price);
  }
  console.log(prices);
  let priceA = []
  function allprices(value) {
    priceA = prices[(value)];
  }
  console.log(priceA);
  console.log(allprices(218))



  const allfueltypes = [];

  getmodels.forEach((element) => {
    let check = allfueltypes.includes(element.fuel_type);
    if (check === false) {
      allfueltypes.push(element.fuel_type);
    }
  });

  // console.log(allfueltypes)

  const allFuelTypeString = allfueltypes.join(", ")

  const alltransmissiontypes = [];

  getmodels.forEach((element) => {
    let check = alltransmissiontypes.includes(element.transmission_type);
    if (check === false) {
      alltransmissiontypes.push(element.transmission_type);
    }
  });
  // console.log(allfueltypes);
  const allTransmissionTypeString = alltransmissiontypes.join(", ")
  console.log(allTransmissionTypeString);


  const allengine = [];

  getmodels.forEach((element) => {
    let check = allengine.includes(element.displacement);
    if (check === false) {
      allengine.push(element.displacement);
    }
  });
  // console.log(allfueltypes);
  // console.log(allTransmissionTypeString);

  const engine_in_int = allengine.map(function (str) {
    return parseInt(str); // or use parseInt(str) for integer conversion
  });

  const max_engine = Math.max.apply(null, engine_in_int);
  const min_engine = Math.min.apply(null, engine_in_int);



  const allseatcapacty = [];

  getmodels.forEach((element) => {
    let check = allseatcapacty.includes(element.seating_capacity);
    if (check === false) {
      allseatcapacty.push(element.seating_capacity);
    }
  });
  const seatcapacty_in_int = allseatcapacty.map(function (str) {
    return parseInt(str); // or use parseInt(str) for integer conversion
  });
  const max_eseatcapacty = Math.max.apply(null, seatcapacty_in_int);







  return (
    <>
      <div className="specstab">
        <div className="container">
          <div className="tabs-for-cars-info d-flex">
            <ul className="d-flex W-100">
              <li><a href="#cars-overview-sec">Overview</a> </li>
              <li><a href="#car-def-varients-price">Variants</a></li>
              <li><a href="#view-car-colors">Colours</a></li>
              <li><a href="#cars-mileage-sec">Mileage</a></li>
              <li><a href="/">Dealers</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container image-price-title-sec">
        <div className="image-title-price-review">
          <div className="row image-title-price-box">
            <div className="new">
              <div className="card-box">
                <div className="car-name-for-phone">
                  <h3 className="g-h3">{brand} {model}</h3>
                  <div className="ratings days top-review">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span>(3.7/5)</span>
                  </div>
                  <div className="price-of-car-for-phone">
                    {/* <h4 className="one-price-of-car d-inline  g-h4">Rs.{minpriceinlakh} - {maxpriceinlakh}*</h4> */}
                    <h4 className="one-price-of-car d-inline  g-h4">Rs.{modelPrice.length > 0 ? `${numFormat(modelPrice[0].min_price)} - ${numFormat(modelPrice[0].max_price)} ` : "No Data"}</h4>
                    <span className="tag-price d-inline">(Ex Showroom Price)</span>
                    <button className='g-link-button g-underline g-bold display-none-desktop'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button>
                  </div>
                  <PriceModal id={uniqueId} />
                </div>
                <div className="display-none-phone">
                  <div className="desktop-gop-btn">
                    <PopupClone brand={brand} model={model} />
                    {/* <button onClick={()=>{
                      modal ? showModal(false) : showModal(true)
                    }} className='g-button border-0 py-2'><img src={Pricetag} alt="pricetag" />GetOnRoadPrice <span className='g-p10'>in your city</span></button> */}

                  </div>
                  <div className="desplay-none-phone my-2">
                    <Link to={`/car-dealers/${brand}/${model}`}>
                      <button className='g-link-button g-underline text-dark'>Locate Delear Near You</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imageslider " id='cars-overview-sec'>
          <ImageSlider />
        </div>
      </div>
      {/* <div className="prductimageslider" id='prductimageslider'>
      </div> */}
      <div className="container global-theme-color desktop-page-width-60">
        <div className="locatedealer-sec text-center d-flex justify-content-around p-2">
          <div className="textlocatedealer d-inline">
            <p>Locate Dealer</p>
          </div>
          <div className="searchlocatedealer d-inline">
            <div className="wrap">
              <div className="search">
                <form onSubmit={handleSubmit}>
                  <input type="text" name='pincode' className="searchTerm" placeholder="Enter your Pin Code" />
                  <button type="submit" className="searchButton px-3">GO
                    {/* <i className="fa fa-search"></i> */}
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container advertisement-box desktop-page-width-60"><div className="advertisement-sec"><p>Advertisement(optional)</p></div></div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
        <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container p-4 desktop-page-width-60">
        <h3 className='g-bold'>{brand} {model} Key Specifications</h3>
        <p className="about">{brand} {model} Price: The {brand} {model} is priced from Rs {modelPrice.length > 0 ? numFormat(modelPrice[0].min_price) : null} to Rs {modelPrice.length > 0 ? numFormat(modelPrice[0].max_price) : null} (ex-showroom). {brand} {model} Variants: {brand} offers its sub-4m SUV in five trim options: {finalVersion.map((item) => {
          return item.version_name + ", "
        })}. {brand} {model} Seating Capacity: The facelifted {model} is a five-Seater.</p>
      </div>
      <div className="container desktop-page-width-60">
        <div className="row m-auto w-100">
          <div className="col-6 inner-width-sm gray-background">
            <div className="innerbox">
              <p className='pricetagicon m-0'> <img src={Pricetag} alt="pricetagicon" />Price</p>
              <h5 className='g-bold g-p-13'>₹ {modelPrice.length > 0 ? numFormat(modelPrice[0].min_price) : null} onwords</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm background-color-1">
            <div className="innerbox">
              <p className='fuleicon m-0'> <img src={fuleicon} alt="fuleicon" />Mileage</p>
              <h5 className='g-bold g-p-13'>{modelPrice.length > 0 ? modelPrice[0].mileage : null} kmpl</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm background-color-2">
            <div className="innerbox ">
              <p className='engineicon m-0'> <img src={engineicon} alt="engineicon" />Engine</p>
              <h5 className='g-bold g-p-13'> {modelPrice.length > 0 ? modelPrice[0].engine : null} cc</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm light-gray-background">
            <div className="innerbox">
              <p className='fuletypeicon m-0'> <img src={Fuletypeicon} alt="fuletypeicon" />Fuel Type</p>
              <h5 className='g-bold g-p-13'>{spec ? spec.fuel.map((item, index)=>{
                 return index !== spec.fuel.length-1 ? item.fuel_type + ", " : item.fuel_type
              }): null}</h5>
            </div>
          </div>
          <div className="col-6 inner-width-ex gray-background">
            <div className="innerbox">
              <p className='transmissionicon m-0'> <img src={Transmissionicon} alt="transmissionicon" />Transmission</p>
              <h5 className='g-bold g-p-13'>{spec ? spec.transmission.map((item, index)=>{
                 return index !== spec.transmission.length-1 ? item.transmission_type + ", " : item.transmission_type
              }): null}</h5>
            </div>
          </div>
          <div className="col-6 inner-width-ex background-color-1">
            <div className="innerbox">
              <p className='seaticon m-0'> <img src={seaticon} alt="seaticon" />Seating Capacity</p>
              <h5 className='g-bold g-p-13'>{spec ? spec.seat.map((item, index)=>{
                 return index !== spec.seat.length-1 ? item.seating_capacity + ", " : item.seating_capacity
              }): null} Seater</h5>
              {/* {spec ? console.log() : null} */}
            </div>
          </div>
        </div>
        {/* <table className="table key-specs-table">
          <tbody>
            <tr className='key-specs-firstrow gray-background'>
              <td className='p-3'><p className='pricetagicon m-0'> <img src={Pricetag} alt="pricetagicon" />Price</p>
              <h5 className='g-bold'>₹ 9.20 Lakh onwords</h5>
              </td>
              <td className='ps-5 pt-3'><p className='fuleicon m-0'> <img src={fuleicon} alt="fuleicon" /></p>
              <h5 className='g-bold'>17.5 to 23.4 kmpl</h5>
              </td>
            </tr>
            <tr className='key-specs-secondtrow light-gray-background'>
              <td className='p-3 ' ><p className='engineicon m-0'> <img src={engineicon} alt="engineicon" />Engine</p>
              <h5 className='g-bold'>998 to 1493 cc</h5>
              </td>
              <td className='ps-5 pt-3'><p className='fuletypeicon m-0'> <img src={Fuletypeicon} alt="fuletypeicon" />Fuel Type</p>
              <h5 className='g-bold'>Petrol & Diesel</h5>
              </td>
            </tr>
            <tr className='key-specs-thirdrow gray-background'>
              <td className='p-3'><p className='transmissionicon m-0'> <img src={Transmissionicon} alt="transmissionicon" />Transmission</p>
              <h5 className='g-bold'>Manual, Clutchless, Manual & Automatic (DTC)</h5>
              </td>
              <td className='ps-5 pt-3'><p className='seaticon m-0'> <img src={seaticon} alt="seaticon" />Seating Capacity</p>
              <h5 className='g-bold'>5 Seater</h5>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className="container car-def-varients mt-5 desktop-page-width-60" id='car-def-varients-price'>
        <h3 className='g-bold'>Variants</h3>
        <VariantsTab version={getVersion} finalversion={setFinalVersion} />
        {/* <div className="car-def-varients-btn">
          <button className="primary varients-btn tab-button-varients border-1 ">View All</button>
            <button className="primary varients-btn tab-button-varients border-1 mx-1">Manual</button>
          <button className="primary varients-btn tab-button-varients border-1 m-1">Automatic</button>
        </div>
        <div className="varient-details">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div> */}
        <table className="table varients-table">
          <tbody>
            <tr className=' varients-firstrow'>
              <td className='table-row-55'>
              </td>
              <td className='table-row-10'><p className='fuleicon'> </p>
              </td>
              <td><strong className='g-bold'> Price (onwords)</strong>
              </td>
            </tr>
            {
              finalVersion.map((element, id) => {
                return versionPrice.length <= 0 ? <tr key={id} className={`${id > 5 && tshow == false ? "d-none" : null} varients-firstrow gray-background`}>
                  <td className='table-row-40'><Link to={`/testnewcars/${element.version_name}/${uniqueId}/${model_id}`}>
                    <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.displacement}cc&nbsp;{element.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.city_mileage}</p>
                  </Link>
                  </td>
                  <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                    {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                  </td>
                  {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                  <td className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.5 Lakhs</p>
                    <PopupClone2 brand={brand} model={model} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} />
                  </td>
                </tr> : versionPrice ? versionPrice.map((item) => {
                  if (item.version_name == element.version_name) {
                    return (<tr key={id} className={`${id > 5 && tshow == false ? "d-none" : null} varients-firstrow gray-background`} >
                      <td className='table-row-40'><Link to={`/testnewcars/${element.version_name}/${uniqueId}/${model_id}`}>
                        <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.displacement}cc&nbsp;{element.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.city_mileage}</p>
                      </Link>
                      </td>
                      <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                        {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                      </td>
                      {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                      <td className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ {numFormat(item.min_price)}</p>
                        <PopupClone2 brand={brand} model={model} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} />
                      </td>
                    </tr>)
                  }

                }) : null

              })
            }
          </tbody>
        </table>
        <div className="showallbtn-sec">
          <div className="showallbtn text-center">
            <button onClick={() => {
              tshow ? setShow(false) : setShow(true)
            }} className='g-link-button g-underline'>Show All Varaints</button>
          </div>
        </div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
        <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 my-4 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container desktop-page-width-60" id='view-car-colors'>
        <div className="colorstitle">
          <div className="colors">
            <h3 className='g-bold'>Colours</h3>
            <h4 className='g-bold mb-2'>{brand} Colours</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="colorimage border text-center py-3">
          <img className='w-75' src={carcolor1} alt="CarColorImage" />
          <div className="colourstab text-center">
            <button className='colourgray colortab-m'></button>
            <button className='coloulightblue colortab-m'></button>
            <button className='coloured colortab-m'></button>
            <button className='colorwhite border colortab-m'></button>
            <button className='colorblack colortab-m'></button>
            <button className='colortab-m'></button>
          </div>
          <p className='colourname'>Typhoon Silver</p>
        </div>
      </div>
      <div className="container my-5 desktop-page-width-60" id='cars-mileage-sec'>
        <div className="mileage">
          <div className="mileagetitle">
            <h4 className='g-bold'>Mileage</h4>
            <h4 className='g-bold'>{brand} {model} Mileage</h4>
          </div>
          <p>{brand} {model} mileage claimed by ARAI is 17.5 to 23.4 kmpl. The pertrol version has a mileage of 17.5 to 18.1 kmpl. The diesel Version has a mileage of 23.4 kmpl.</p>
          <div className="mileage-table">
            <table className="table">
              <tbody className='milage-table-box'>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th>Varients</th>
                  <th>Transmission</th>
                  <th>ARAI Mileage</th>
                </tr>
                {
                  getmodels.map((element, id) => {
                    return (
                      <tr key={id} className={`gray-background ${element.arai_mileage === "NULL" ? 'd-none' : 'd-table-row'}`}>
                        {/* <th scope="row">1</th> */}
                        <td>{element.fuel_type}({element.displacement})</td>
                        <td>{element.transmission_type}</td>
                        <td className='g-bold'>{element.arai_mileage}</td>
                      </tr>
                    )
                  })
                }
                {/* <tr className='gray-background'>
                  <td>Petrol (1086 cc)</td>
                  <td>Automatic(AMT)</td>
                  <td className='g-bold'>20.30 kmpl</td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Petrol (1197 cc)</td>
                  <td>Manual</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
                <tr className='gray-background'>
                  <td>Diesel (1100 cc)</td>
                  <td>Automatic(AMT)</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Diesel (1100 cc)</td>
                  <td>Manual</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container my-2 desktop-page-width-60">
        <div className="price-title">
          <h3 className='g-bold'>Price</h3>
          <h4 className='g-bold'>{brand} {model} price in different cities</h4>
          <div className="price-subtitle">

          </div>
        </div>
        <div className="price-sec">
          <table className="table">
            <tbody className='price-table-box'>
              <tr>
                <th className='table-row-53'>City</th>
                <th className='text-center'>Price*(Ex-Showroom)</th>
              </tr>
              {
                only_one_model_ex_price.map((element, id) => {
                  return (
                    <tr key={id} className='gray-background'>
                      <td>{element.city_name}</td>
                      <td className='justify-center-d d-flex'>{formatNumberToLakh(parseInt(element.ex_showroom_price))}
                        <button className='price-table-btn'>Get onroad Price</button>
                      </td>
                    </tr>
                  )
                })
              }
              {/* <tr className='gray-background'>
                  <td>Mumbai</td>
                  <td className='justify-center-d d-flex'>9.64L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Pune</td>
                  <td className='justify-center-d d-flex'>9.75L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='gray-background'>
                  <td>Ahemdabad</td>
                  <td className='justify-center-d d-flex'>9.43L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Chennai</td>
                  <td className='justify-center-d d-flex'>9.55L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='gray-background'>
                  <td>Bangalore</td>
                  <td className='justify-center-d d-flex'>9.61L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>New Delhi</td>
                  <td className='justify-center-d d-flex'>9.68L 
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='gray-background'>
                  <td>Kolkata</td>
                  <td className='justify-center-d d-flex'>9.48L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Hyderabad</td>
                  <td className='justify-center-d d-flex'>9.33L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
        <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 my-4 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container pros-and-cons-sec mt-2 container desktop-page-width-60">
        <div className="pros-and-cons-sec-heading">
          <h3 className='g-bold'>Expert Tips</h3>
        </div>
        <div className="pros-and-cons">
          <div className="pros-of-car">
            <h4 className='g-bold'><img src={Thumbsup} alt="" /> Pros</h4>
            <ul>
              <li>Qulity</li>
              <li>Road Presence</li>
              <li>Multiple Powertrain Options</li>
            </ul>
          </div>
          <div className="cons-of-car">
            <h4 className='g-bold'><img src={Thumbsdown} alt="" /> Cons</h4>
            <ul>
              <li>Cramped rear Seat</li>
              <li>Unsorted Ride Quality</li>
              <li>Expensive top-end Versions</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container desktop-page-width-60">
        <div className="videos-sec">
          <h5 className='g-bold mt-5 mb-3'>Videos</h5>
          <div className="row">
            <div className="col-md-6">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/k0IqIjfVHUA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="col-md-6">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/Hx-8mVFvWOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          {/* <video src="https://www.youtube.com/watch?v=k0IqIjfVHUA"></video> */}
        </div>

      </div>
    </>
  )
}

export default CarModelPage
