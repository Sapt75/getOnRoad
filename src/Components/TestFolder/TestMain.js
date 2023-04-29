import React, { useEffect, useState } from 'react';
import Maruti from '../images/BrandLogos/Maruti.png';
// import Brand2 from '../images/Brand Logos/brand-2.png';
// import Brand3 from '../images/Brand Logos/brand-3.png';
// import Brand4 from '../images/Brand Logos/brand-4.png';
// import Brand5 from '../images/Brand Logos/brand-5.png';
// import Brand6 from '../images/Brand Logos/brand-6.png';
// import Brand7 from '../images/Brand Logos/brand-7.png';
// import Brand8 from '../images/Brand Logos/brand-8.png';
// import Brand9 from '../images/Brand Logos/brand-9.png';
// import Brand10 from '../images/Brand Logos/brand-10.png';

const TestMain = () => {


  const [getcardata, setGetcardata] = useState([]);
  const [gbrand, setBrand] = useState([])
  const [show, setShow] = useState(false)

  const GetData = async (e) => {
    const res = await fetch("/newcarsdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      // alert("error");
      console.log("error");
    } else {
      setGetcardata(data)
      // alert("data added");
      console.log("get data");
    }
  }

  async function gBrand() {
    let data = await fetch('/car_brands', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()

    setBrand(response)
  }


  const handleOnclick = (brandname) => {
    window.open(`/car-brand/${brandname}`);
  };
  // "Hello " + brandname;

  useEffect(() => {
    GetData()
    gBrand()
  }, []);


  return (
    <div className="container">
      <div className="row text-center ">

        {gbrand.length > 0 ? gbrand.map((item, id) => {
          return <button key={id} style={{ width: "20%" }} className={`${id + 1 > 10 && show == false ? "d-none" : null} bg-white border-0`} onClick={() => handleOnclick(item)}>
            <div className="col col-xs-4">
              <div className="brand-box">
                <img width={item == "Mahindra" || item === "MG" || item === "Bentley" || item === "Bugatti" || item === "Force" || item === "Mitsubishi" || item === "Bajaj" || item === "Mini" || item === "Aston Martin" || item === "Mclaren" || item === "BYD" || item === "PMV" || item === "Pravaig" || item === "Ford" || item === "Jaguar" || item === "Isuzu" ? 100 : item == "Renault"  ? 30:50} src={require(`../images/BrandLogos/${item}.png`)} />
                <h5>{item}</h5>
              </div>
            </div>
          </button>
        }) : null}
        <div className="showallbtn pb-3">
          <button onClick={()=>{
            show ? setShow(false) : setShow(true)
          }}>Show all Brands</button>
        </div>
      </div>
    </div>
  )
}

export default TestMain