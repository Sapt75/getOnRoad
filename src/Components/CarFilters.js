import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams, useNavigate } from 'react-router-dom';
import car1 from './images/CarVariants/tata.png';
import defaultimg from './images/CarVariants/default.jpg';
import BasicDropdownBrand from './DropDownBrand';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TestBody from './TestFolder/TestBody';
import TestFuel from './TestFolder/TestFuel';
import TestSeat from './TestFolder/TestSeat';
import TestTransmission from './TestFolder/TestTransmission';




const CarFilters = () => {
    const [getbranddata, setGetbranddata] = useState([]);
    const [getprices, setGetPrices] = useState([]);

    const { type, value } = useParams("");


    const GetData = async () => {
        // const res = await fetch(`/getonebrandcars?brand=${brand}`,{
        const res = await fetch(`/filter/${type}/${value}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        setGetbranddata(data)


        const res_two = await fetch(`/filter_model_prices`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const pricedata = await res_two.json();

        setGetPrices(pricedata)

    }
    useEffect(() => {
        GetData();
        // GetBrand();
    }, []);


    function numFormat(num) {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3, notation: 'compact' }).format(num);
    }










    return (

        <div className='container'>
            <div className="my-3">
                <div className="">
                    <div className="brand-main-title text-l mb-0">
                        <h1 className="mb-0">{type === "seating_capacity" ? `${value} Seater` : value} <span className='global-text-color h3-font-size'>Cars</span></h1>
                        <h1 className="mb-0 brand-car-title g-h3">Cars</h1>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        {/* <p className="mb-3">Hyundai car price starts at Rs 4.89 Lakh for the cheapest model which is Santro and the price of most expensive model, which is Tucson starts at Rs 27.70 Lakh. Hyundai offers 12 car models in India, including 4 cars in SUV category, 1 car in Sedan category, 4 cars in Hatchback category, 2 cars in Compact SUV category, 1 car in Compact Sedan category. Hyundai has 4 upcoming cars in India, New Verna, Creta Facelift, Ioniq 5 and New Kona.</p>  */}
                        <p className="mt-2">There are a total of {getbranddata ? getbranddata.length : 12} {type === "seating_capacity" ? `, ${value} Seater` : value} models currently on sale in india. These include 4 Hatchbaks, 2 Sedans and 6 SUVs. {type === "seating_capacity" ? `${value} Seater` : value} has 11 upcoming car lounches in India. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eligendi ipsum odit error cum temporibus quod perferendis, a itaque explicabo sed numquam nemo, amet suscipit quisquam ea illum iusto fugit!<div className='d-inline'><button className='text-end g-read-more-btn'>Read More</button></div> </p>
                    </div>
                </div>
            </div>
            <h3 className='g-h3'>{value} Car Models</h3>
            <div className="col-lg-5 col-md-6 col-sm-12 change-brand-sec">
                <div className="sorting-options2">
                {type === "body_type" ? <h5>Change Body Type</h5> : null}
                {type === "fuel_type" ? <h5>Change Fuel Type</h5> : null}
                {type === "seating_capacity" ? <h5>Change Capacity</h5> : null}
                {type === "transmission_type" ? <h5>Change Transmission</h5> : null}
                </div>
                {type === "body_type" ? <TestBody status={true} val={type} /> : null}
                {type === "fuel_type" ? <TestFuel status={true} val={type} /> : null}
                {type === "seating_capacity" ? <TestSeat status={true} val={type} /> : null}
                {type === "transmission_type" ? <TestTransmission status={true} val={type} /> : null}
            </div>

            {/* <h3>{getbrandnumber}</h3> */}
            {
                getbranddata.length >= 1 ?
                    // <div><h3>Brand found</h3></div>
                    <div>
                        {getbranddata ? getbranddata.map((element, id) => {
                            return (
                                <div className='container bb-box' key={id + 1}>
                                    <div className="car-box-2 cb-4 car-box-full pb-3 p-0 mb-1">
                                        <div className="row g-0 bg-white m-bg imgdetailbox px-2">
                                            <div className="col-lg-4 col-6">
                                                <div className="photo-thumbnail">
                                                    <div className="photo">
                                                        <img className="d-block w-100"
                                                            src={defaultimg}
                                                            alt="car" href={`/car-model/${element.brand}/${element.model_name}`} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 align-self-center col-6">
                                                <div className="detail">
                                                    <h3 className="title mb-0">
                                                        <Link to={`/car-model/${element.brand}/${element.model_name}/${element.uid}/${element.model_id}`} >{element.brand}&nbsp;{element.model_name}</Link>
                                                        <a className='d-none' href="/">{id + 1}</a>
                                                    </h3>
                                                    <div className="price-box">
                                                        {getprices.length > 0 ? getprices.map((item) => {
                                                            return element.model_id === item.model_id ? <span>Rs.{numFormat(item.min_price)} - {numFormat(item.max_price)}*<span> (Ex Showroom)</span></span> : null
                                                        }) : <span>Loading</span>}

                                                    </div>
                                                    <div className="ratings days top-review">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <span>(3.7/5)</span>
                                                    </div>
                                                    <div className="facilities-list clearfix p-0 m-0">
                                                        <div className="facilities-list-in">
                                                            <p className='p-0 m-0'>
                                                                {/* {element.fuel_type} */}
                                                                {/* {allFuelTypeString}<br/> */}
                                                                {element.fuel_type} <br />
                                                                {/* {allTransmissionTypeString} */}
                                                                {element.transmission_type}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="location">
                                                        <a href="/">
                                                            <i className="fa fa-map-marker"></i> Locate Dealer Near You
                                                        </a>
                                                    </div>
                                                    <div className="getonroadpricebtn">
                                                        <button className="g-link-button-d g-underline">GetOnRoadPrice</button>
                                                        {/* <button className="g-phone-link-button">GetOnRoadPrice</button> */}
                                                        <NavLink className="d-none" target="_blank" to={`/car-model/${element.brand}/${element}`}><button className='btn btn-success'>Details</button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gorp-button">
                                            <button className='gorp-phone-btn w-100'>GetonRoadPrice</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : null
                        }
                    </div>
                    : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        Loading...&nbsp;
                        <CircularProgress />
                    </Box>
                // <div><h3>Brand Not Found</h3></div>
            }
            {/* <div className="modelname">
                <div className="brandlistdata">
                    <select name="cars" id="cars">{
                        modellist.map((element, id)=>{
                            return(
                            <option value="volvo">{modellist[id]}</option>
                            )
                        })
                    }
                    </select>
                </div>
                </div> */}

            {/* Pagination Start */}

            {/* <div className="brandpagination text-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <NavLink>
                            <button onClick={handleOnclick} className="page-link border-0" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </button>
                            </NavLink>
                        </li>
                        {[...Array(pages)].map((e, i) => 
                        <li key={i} className="page-item"><NavLink to={`/testbrand/${brand}/&page=${i}`}><button onClick={handleOnclick} className="page-link border-0" href="/">{i}</button></NavLink></li>)}
                        <li className="page-item">
                        <NavLink>
                            <button onClick={handleOnclick} className="page-link border-0" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </div>
    )
}

export default CarFilters