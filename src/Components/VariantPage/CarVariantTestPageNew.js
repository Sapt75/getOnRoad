// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


import '../VariantPage/VariantPage.css';
import Pricetag from '../images/icons/tag.png';
import variantimg1 from '../images/CarVariants/1.png';
import GTick from '../images/icons/g-tick.png';
import variantimg2 from '../images/CarVariants/breeza.png';
import variantimg3 from '../images/CarVariants/creta.png';
import variantimg4 from '../images/CarVariants/sonet.png';

import VenueVariants from './HyundaiVenueVariants/VenueVariants';

import Specifications from './Specifications/Specifications';
import Features from './Features/Features';
import offericon from '../images/icons/offer.png';
import VariantsTab from './VariantsTab';
import Others from './Others/Others';
import PopupClone2 from '../PopupLeadForm/Popupclone2';

const CarVariantTestPageNew = () => {
    const [cardetails, setCardetails] = useState([])
    const [getprices, setGetPrices] = useState([]);
    const [versionPrice, setVersionPrice] = useState([])
    const [allVersionPrice, setAllVersionPrice] = useState([])
    const [finalVersion, setFinalVersion] = useState([])
    const [getVersion, setVersion] = useState([])
    const [tshow, setShow] = useState(false)

    const {id, model, version} = useParams("");
    console.log(id, model, version);
    

    const GetData = async () =>{
        const res = await fetch(`/getnewonecardata/${model}/${version}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if(data.status === 422 || !data){
        // window.alert("Invalid Input");
        console.log("Invalid Input");
        }else{
            console.log(data)
            setCardetails(data)
        // window.alert("City Updated");
        console.log("car data sucess");

        // navigate("/car-price-details");
        }

        const res_two = await fetch("/pricedetail?",{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
          });
          const pricedata = await res_two.json();
          console.log(pricedata);
          if(res_two.status === 422 || !pricedata){
            console.log("error");
          }else{
            setGetPrices(pricedata)
            console.log("PriceData Fetched!");
          }

    }

    async function getVersionData() {
        let data = await fetch(`/version_data/${model}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        let response = await data.json()
        setVersion(response)
        setFinalVersion(response)
      }

      async function getAllVersionPrice() {
        let data = await fetch(`/version_prices/${model}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        let response = await data.json()
    
        response == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(response)
      }

    async function getVersionPrice() {
        let data = await fetch(`/single_version/${version}/${model}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
    
        let response = await data.json()
        
    
        response == "No Data" ? setVersionPrice([]) : setVersionPrice(response)
      }

      function numFormat(num) {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3, notation: 'compact' }).format(num);
      }




    useEffect(() => {
        GetData();
        getVersionPrice()
        getVersionData()
        getAllVersionPrice()
    },[]);


 let e = document.getElementById("ddlViewBy");
function onChange() {
 let value = e.value;
 let text = e.options[e.selectedIndex].text;
  console.log(value, text);
}





  return (
    <>
    {cardetails.length > 0 ? <>
        <div className="container desktop-page-width-60 image-title-varient-sec">
        <div className="title-variant-box col-md-6">
        <div className="title-price-box">
            <div className="row">
                <div className="new">
                    <div className="card-box">
                    <div className="car-name-for-phone">
                            <h3 className="g-h3 mt-4">{cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}</h3>
                            <div className="ratings days top-review">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <span>(3.7/5)</span>
                            </div>
                            <div className="price-of-car-for-phone">
                            {versionPrice.length > 0 ? <h4 className="one-price-of-car d-inline  g-h4">{`Rs.${numFormat(versionPrice[0].min_price)} - ${numFormat(versionPrice[0].max_price)} `}</h4> : null }
                                <span className="tag-price d-inline">(Ex Showroom Price)</span>
                                <button className='g-link-button-new g-underline display-none-desktop'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button>
                            </div>
                            <button className='g-link-button g-underline display-none-desktop'>View Price Breakup</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        {/* change car variant */}
        <div className="variant-box">
            <div className="option-bar clearfix">
                <div className="row change-variant-sec">
                    <div className="col-sm-12 dropdown-variant">
                        <div className="sorting-options2 ">
                            <h5>Change Variant</h5>
                        </div>
                        {getVersion.length > 0 ? <VenueVariants details={cardetails} cars={finalVersion} id={id} model={model} /> : null } 
                        {/* <form>
                        <select onChange={onChange} id="ddlViewBy">
                            <option value="1">test1</option>
                            <option value="2" selected="selected">test2</option>
                            <option value="3">test3</option>
                        </select>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
        <button className='g-link-button g-underline display-none-phone'>View Price Breakup</button>
        </div>

        {/* car variant image  */}
        <div className="col-md-6">
            <div className="carimagebox ">
                <div className="carimage text-center">
                    <img className='w-75' src={variantimg1} alt="" />
                </div>
            </div>
        </div>
    </div>

        {/* car varient Details  */}
        <div className="container desktop-page-width-60">
            <div className="descriptionbox">
                <div className="descriptiontitle">
                    <h3 className="g-h3">{cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}      Summary</h3>
                </div>
                <div className="discription my-3">
                    <p className=''>{cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}  is the {cardetails[0].fuel_type} variant in the {cardetails[0].brand}&nbsp;{cardetails[0].model} linup and is priced at ₹  {versionPrice.length > 0 ? numFormat(versionPrice[0].min_price) : null}. It returs a certified mileage of {cardetails[0].diesel_mileage_arai} Kmpl. This {cardetails[0].version_name} variant comes with an engine putting out {cardetails[0].max_power} and {cardetails[0].max_torque} of max power and max torque respectively. {cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name} is available in {cardetails[0].transmission_type} transmission and <a className='g-read-more-btn mx-2' href="/">....</a></p>
                </div>
            </div>
        </div>
        <div className="container desktop-page-width-60">
            <div className="variant-spacs-ftrs">
                <div className="variantspacs my-4">
                    <div className="specstitle my-2">
                        <h3 className="g-h3">Key Specifications of {cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}</h3>
                    </div>
                    <div className="specsdetails my-2">
                        <table className="table">
                            <tbody className='specs-table-box'>
                                <tr className={`gray-background ${cardetails[0].arai_mileage==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>ARAI Mileage</td>
                                <td className='text-start'>{cardetails[0].arai_mileage}
                                </td>
                                </tr>
                                {/* <tr className='light-gray-background'>
                                <td className='width-70'>City Mileage</td>
                                <td className='text-start'>{cardetails[0].city_mileage}
                                </td>
                                </tr> */}
                                <tr className={`gray-background ${cardetails[0].fuel_type==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Fuel Type</td>
                                <td className='text-start'>{cardetails[0].fuel_type}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].displacement==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Engine Displacement (cc)</td>
                                <td className='text-start'>{cardetails[0].displacement}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].no_of_cylinders==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>No. of cylinder</td>
                                <td className='text-start'>{cardetails[0].no_of_cylinders}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].max_power==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Max Power (bhp@rpm)</td>
                                <td className='text-start'>{cardetails[0].max_power}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].max_torque==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Max Torque (nm@rpm)</td>
                                <td className='text-start'>{cardetails[0].max_torque}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].seating_capacity==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Seating Capacity</td>
                                <td className='text-start'>{cardetails[0].seating_capacity}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].transmission_type==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>TransmissionType</td>
                                <td className='text-start'>{cardetails[0].transmission_type}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].boot_space_Litres==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Boot Space(Litres)</td>
                                <td className='text-start'>{cardetails[0].boot_space_Litres}
                                </td>
                                </tr>
                                <tr className={`gray-background ${cardetails[0].fuel_tank_capacity==="NULL"?'d-none':'d-table-row'}`}>
                                <td className='width-70'>Fuel Tank Capacity</td>
                                <td className='text-start'>{cardetails[0].fuel_tank_capacity}
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Body Type</td>
                                <td className='text-start'>{cardetails[0].body_type}
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Service Cost (Avg. of 5 years)</td>
                                <td className='text-start'>₹ 3,546
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="keyftrs my-4">
                    <div className="ftrstitle my-2">
                        <h3 className="g-h3">Key Features of {cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}</h3> 
                    </div>
                    <div className="ftrsdetails">
                        <table className="table">
                            <tbody className='specs-table-box'> 
                            {/* <p>Hello, {cardetails[0].power_steering}!</p>; */}
                            {
                                cardetails[0].power_steering === 'Yes'
                                ? <tr className='gray-background'>
                                <td className='width-70'>Power Steering</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                // <p>Got PS Yes</p>
                                 
                                // console.log('Got PS Yes')
                                : console.log()
                            }
                                {/* <tr className='gray-background'>
                                <td className='width-70'>Power Steering</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].power_windows_front === 'Yes'
                                ? <tr className='light-gray-background'>
                                <td className='width-70'>Power Windows Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='light-gray-background'>
                                <td className='width-70'>Power Windows Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].anti_lock_braking_system === 'Yes'
                                ? <tr className='gray-background'>
                                <td className='width-70'>Anti Lock Braking System</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='gray-background'>
                                <td className='width-70'>Anti Lock Braking System</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].air_conditioner === 'Yes'
                                ? <tr className='light-gray-background'>
                                <td className='width-70'>Air Conditioner (cc)</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='light-gray-background'>
                                <td className='width-70'>Air Conditioner (cc)</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].driver_airbag === 'Yes'
                                ? <tr className='gray-background'>
                                <td className='width-70'>Driver Airbag</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='gray-background'>
                                <td className='width-70'>Driver Airbag</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].automatic_climate_control === 'Yes'
                                ? <tr className='light-gray-background'>
                                <td className='width-70'>Automatic Climate Control</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='light-gray-background'>
                                <td className='width-70'>Automatic Climate Control</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].fog_lights_front === 'Yes'
                                ? <tr className='gray-background'>
                                <td className='width-70'>Fog Lights - Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='gray-background'>
                                <td className='width-70'>Fog Lights - Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                                {
                                cardetails[0].alloy_wheels === 'Yes'
                                ? <tr className='light-gray-background'>
                                <td className='width-70'>Alloy Wheels</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                : console.log()
                            }
                                {/* <tr className='light-gray-background'>
                                <td className='width-70'>Alloy Wheels</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="container desktop-page-width-60 mt-5">
            <div className="specs-ftrs-dlrs-box ">
                <div className="tabs-specs-ftrs-dlrs mx-4 my-4">
                    <ul className="specs-ftrs-dlrs d-flex justify-content-between">
                        <li> <a className='specs-tab' href="#specifications">Specification</a></li>
                        <li><a className='ftrs-tab' href="#features">Features</a></li>
                        <li>Dealers</li>
                    </ul>
                </div>
                <div className="specsdetails">
                    <h3 className="g-h3 my-2" id='specifications'>Specifications</h3>
                    <div className='my-1'><Specifications version={version} model={model} /></div>
                </div>
                <div className="ftrsdetails mt-4">
                    <h3 className="g-h3 my-2" id='features'>Features</h3>
                    <div className="my-1"><Features version={version} model={model} /></div>
                </div>
                <div className="ftrsdetails mt-4">
                    <h3 className="g-h3 my-2" id='features'>Others</h3>
                    <div className="my-1"><Others version={version} model={model} /></div>
                </div>
                <div className="dlrsdetails"></div>
            </div>
        </div>
        <div className="container desktop-page-width-60 car-def-varients mt-5">
        <h3 className='g-bold'>Variants</h3>
        <VariantsTab version={getVersion} finalversion={setFinalVersion} />
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
                return allVersionPrice.length <= 0 ? <tr key={id} className={`${id > 5 && tshow == false ? "d-none": null} varients-firstrow gray-background`}>
                  <td className='table-row-40'>
                  <a href={`/testnewcars/${element.version_name}/${id}/${model}`}>
                    <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.displacement}cc&nbsp;{element.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.city_mileage}</p>
                  </a>
                  </td>
                  <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                    {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                  </td>
                  {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                  <td className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.5 Lakhs</p>
                    <PopupClone2 brand={cardetails[0].brand} model={cardetails[0].model_name} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} /> 
                  </td>
                </tr> : allVersionPrice ? allVersionPrice.map((item) => {
                  if (item.version_name == element.version_name) {
                    return (<tr key={id} className={`${id > 5 && tshow == false ? "d-none": null} varients-firstrow gray-background`}>
                      <td className='table-row-40'>
                      <a href={`/testnewcars/${element.version_name}/${id}/${model}`}>
                    <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.displacement}cc&nbsp;{element.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.city_mileage}</p>
                  </a>
                      </td>
                      <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                        {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                      </td>
                      {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                      <td className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ {numFormat(item.min_price)}</p>
                        <PopupClone2 brand={cardetails[0].brand} model={cardetails[0].model_name} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} /> 
                      </td>
                    </tr>)
                  }

                }) : null

              })
            }
            {/* <tr className=' varients-firstrow gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0 mt-3'>Venue E 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
              
              </td>
              <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-secondrow light-gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0 mt-3'>Venue S 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10'><p className='fuletypeicon'> </p>
              
              </td>
              <td className='table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 10.63 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-thirdrow gray-background'>
              <td className='table-row-40 mb-0 mt-3'><p className='car-varient-name'>Venue S(O) 1.2 Petrol <br />1197 cc, Petrol, Manual, 17</p>
              
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
              
              </td>
              <td className='table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 11.58 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-secondrow light-gray-background'>
              <td className='table-row-40 mb-0 mt-3'><p className='car-varient-name'>Venue S(O) 1.2 Turbo IMT <br />998 cc, Petrol, Clutchless Ma</p>
              
              </td>
              <td className='table-row-10'><p className='fuletypeicon'> </p>
              
              </td>
              <td className='table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 12.10 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr> */}
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
      <div className="container desktop-page-width-60 mb-5">
        <h3 className='g-h3 my-2'>Similar Cars</h3>
        <div className='d-flex justify-content-between'>
        <div className="col-3 m-1 s-car-box">
            <img className='w-100' src={variantimg2} alt="car1" />
            <h5 className='g-box-text'>Maruti Brezza Lxi <br/>Rs.7.99 Lakh*</h5>
            <button  className='g-h5 bg-white border w-100'>Compare Cars</button>
            <button className='g-h5 g-button border w-100'>View On Road Price</button>
        </div>
        <div className="col-3 m-1 s-car-box">
            <img className='w-100' src={variantimg3} alt="car1" />
            <h5 className='g-box-text'>Hyundai Creta E <br/>Rs.10.44 Lakh*</h5>
            <button  className='g-h5 bg-white border w-100'>Compare Cars</button>
            <button className='g-h5 g-button border w-100'>View On Road Price</button>
        </div>
        <div className="col-3 m-1 s-car-box">
            <img className='w-100' src={variantimg4} alt="car1" />
            <h5 className='g-box-text'>Kia Sonet 1.2 HTE <br/>Rs.7.49 Lakh*</h5>
            <button className='g-h5 bg-white border w-100'>Compare Cars</button>
            <button className='g-h5 g-button border w-100'>View On Road Price</button>
        </div>
      </div>
      </div>
    </> : null }
    
    </>
  )
}

export default CarVariantTestPageNew
