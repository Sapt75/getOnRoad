import './CarDealersPage.css';
import React, { useEffect, useState } from 'react';
// import OfferIcon from '../images/icons/offer.png';
import WhatsAppIcon from '../images/icons/whatsappicon.png';
import { useParams } from 'react-router-dom';

function CarDealersPage() {



  const [city, setCity] = useState()

  const [brand, setBrand] = useState()

  const [dealer, setDealer] = useState()

  // const [vers, setVers] = useState()


  let parms = useParams("")["*"].split("/")


  useEffect(() => {

    
      getBrandData()


    getbrandData()
    getCityData()
  }, [])


  async function getbrandData() {
    let data = await fetch('/car_brands', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let response = await data.json()
    setBrand(response)
  }

  async function getCityData() {
    let data = await fetch('/city_names', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let response = await data.json()
    setCity(response)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let city = e.target.city.value
    let brand = e.target.cars.value
    let pincode = e.target.pin_code.value
    // let model = e.target.model.value

    if (city == "Select City" || brand == "Select Brand") {

      alert("Fill Both City and Brand")

    } else {
      let data = await fetch('/dealer', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city: city,
          brand: brand,
          pin: pincode
        })
      })

      let response = await data.json()
      setDealer(response)
    }
  }


  async function getBrandData() {

    let data = await fetch(`/dealer_brand/${parms[0]}/${parms[1]}/${parms[2]}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()
    setDealer(response)
  }



  // async function getModelData(e) {
  //   console.log(e.target.value)

  //   let data = await fetch(`/dealer_model/${e.target.value}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })

  //   let response = await data.json()
  //   setVers(response)
  //   console.log(vers)
  // }








  return (
    <>
      {/* Top Banner */}
      <div className="cardealerssec-title-banner-sec">
        <div className="cardealerssec-title-banner-box ">
          <div className="container cardealerssec-title-banner p-5 d-flex">
            <h3 className='my-auto text-white'><strong>Connect</strong><br /> to the<strong> Right Delear</strong></h3>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="cardealerssec">
          <form onSubmit={handleSubmit} className="cardealerssec-search d-flex my-3">
            <select className='brand-search' id="cars" name="cars">
              <option>Select Brand</option>
              {brand ? brand.map((item) => {
                return <option value={item}>{item}</option>
              }) : null}
            </select>
            {/* <select className='model-search' id="model" name="model">
              <option>Select Model</option>
              {vers ? vers.map((item) => {
                return <option value={item.model_name}>{item.model_name}</option>
              }) : null}
            </select> */}
            {/* <input className='brand-search' type="text" placeholder='Brand' /> */}
            <select className='city-search' id="city" name="city">
              <option>Select City</option>
              {city ? city.map((item) => {
                return <option value={item['City Name']}>{item['City Name']}</option>
              }) : null}
            </select>
            {/* <input className='city-search' type="text" name="" id="" placeholder='City' /> */}
            <input type="text" name='pin_code' placeholder='Select Pincode' />
            <button type='submit'>Submit</button>
          </form>

          <div className="cardealerssec-showroomtitle border-bottom-3">
            <h4 className="g-h4">12 DEALERS FOR {parms[0]} IN BANGALORE</h4>
          </div>
        </div>
        {/* Car Dealers List */}
        <div className="cardealerslist-box row">
          {dealer ? dealer.length <= 0 ? <h1 style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>No Details</h1> : dealer.map((item) => {
            return (<div className=" col-12">
              <div className="cardealerslist border-bottom-3 p-2 my-1">
                <h4 className="">{item.dealer_name}</h4>
                <p className="mb-0">{item.complete_address}</p>
                <p className='mb-0'>{item.email}</p>
                <p className='mb-0'>{item.phone}<a className='mx-3 link-text' href="http://getonroadprice.com"><img src={WhatsAppIcon} alt="whatsapp" /> Get Details On WhatsApp</a></p>
              </div>
            </div>)
          }) : <div className=" col-12">
            <div className="cardealerslist border-bottom-3 p-2 my-1">
              <h4 className="">Advith Kia</h4>
              <p className="mb-0">NO. 71& 71/1, Bangalore, Lalbagh Main Road, Bangalore Kernataka 560027 </p>
              <p className='mb-0'>info@advaithkia.com</p>
              <p className='mb-0'>9765324576<a className='mx-3 link-text' href="http://getonroadprice.com"><img src={WhatsAppIcon} alt="whatsapp" /> Get Details On WhatsApp</a></p>
            </div>
          </div>}


          {/* <div className=" col-12">
          <div className="cardealerslist border-bottom-3 p-2 my-1">
              <h4 className="g-h4">Advaith Hyundai</h4>
              <p className="g-p mb-0">Tank Road, 16/A, Millers Rd, Stage 1, Vasanth Nagar, Bangalore, Karnataka 560052<br/>9845390084</p>
            </div>
          </div>
          <div className=" col-12 d-inline">
          <div className="cardealerslist border-bottom-3 p-2 my-1">
              <h4 className="g-h4">Advaith Hyundai</h4>
              <p className="g-p mb-0">New No 1-5, Old No 44. 1 A, Bannerghatta Main Rd, Mico Layout, Bangalore, Karnataka 560029<br/>9620627733</p>
            </div>
          </div>
          <div className=" col-12 d-inline">
          <div className="cardealerslist border-bottom-3 p-2 my-1">
              <h4 className="g-h4">Advaith Hyundai</h4>
              <p className="g-p mb-0">#41/2,Outer ring road Opp Hotel Intel Office Devarabeeasanahalli Varthur Hobli, Bangalore, Karnataka 560037<br/>9900029340<img className='d-inline ms-5' src={OfferIcon} alt="mark" /></p>
            </div>
          </div> */}
        </div>
        {/* </div> */}
      </div>
      {/* Advertisement */}
      <div className="container">

      </div>
    </>
  )
}

export default CarDealersPage