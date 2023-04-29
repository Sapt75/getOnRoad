import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Specifications(props) {


  const [cardetails, setcardetails] = useState([])


  const GetData = async () => {
    const res = await fetch(`/getnewonecardata/${props.model}/${props.version}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      // window.alert("Invalid Input");
      console.log("Invalid Input");
    } else {
      console.log(data)
      setcardetails(data)
      // window.alert("City Updated");
      console.log("car data sucess");

      // navigate("/car-price-details");
    }

  }


  useEffect(() => {
    GetData();
  }, []);




  return (
    <Accordion>
    {cardetails.length > 0 ?  <>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Engine & Transmission</b></Accordion.Header>
        <Accordion.Body>
          {/* <div className='row spec-data'> */}
          <div className={`row spec-data ${cardetails[0].bore_x_stroke === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Bore Stroke</div>
            <div className='col-6 '>{cardetails[0].bore_x_stroke === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].bore_x_stroke}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].zero_onehundred_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Acceleration (0-100 kmph)</div>
            <div className='col-6 '>{cardetails[0].zero_onehundred_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].zero_onehundred_kmph}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].charging_time_a_c === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Charging Time (AC)</div>
            <div className='col-6 '>{cardetails[0].charging_time_a_c === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].charging_time_a_c}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].charging_time_d_c === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Charging Time(DC)</div>
            <div className='col-6 '>{cardetails[0].charging_time_d_c === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].charging_time_d_c}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].emission_control_system === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Emission Control System</div>
            <div className='col-6 '>{cardetails[0].emission_control_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].emission_control_system}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].emission_norm_compliance === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Emission Norm Compliance</div>
            <div className='col-6 '>{cardetails[0].emission_norm_compliance === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].emission_norm_compliance}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cng_highway_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CNG Highway Mileage</div>
            <div className='col-6 '>{cardetails[0].cng_highway_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cng_highway_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cng_mileage_arai === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CNG Mileage(ARAI)</div>
            <div className='col-6 '>{cardetails[0].cng_mileage_arai === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cng_mileage_arai}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_highway_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Highway Mileage</div>
            <div className='col-6 '>{cardetails[0].diesel_highway_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_highway_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_mileage_arai === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Mileage (ARAI)</div>
            <div className='col-6 '>{cardetails[0].diesel_mileage_arai === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_mileage_arai}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_overall_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Overall Mileage</div>
            <div className='col-6 '>{cardetails[0].diesel_overall_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_overall_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].drive_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Drive Type</div>
            <div className='col-6 '>{cardetails[0].drive_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].drive_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].engine_check_warning === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Engine Check Warning</div>
            <div className='col-6 '>{cardetails[0].engine_check_warning === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].engine_check_warning}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].mild_hybrid === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Mild Hybrid</div>
            <div className='col-6 '>{cardetails[0].mild_hybrid === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].mild_hybrid}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].motor_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Motor Type</div>
            <div className='col-6 '>{cardetails[0].motor_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].motor_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].petrol_city_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Petrol City Mileage</div>
            <div className='col-6 '>{cardetails[0].petrol_city_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].petrol_city_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].petrol_highway_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Petrol Highway Mileage</div>
            <div className='col-6 '>{cardetails[0].petrol_highway_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].petrol_highway_mileage}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Active Cylinder Management</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          {/* <div className='row spec-data'>
          <div className='col-6'>Alternate Fuel</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          {/* <div className='row spec-data'>
          <div className='col-6'>Alternate Max Power</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          {/* <div className='row spec-data'>
          <div className='col-6'>Alternate Max Power @ RPM</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          {/* <div className='row spec-data'>
          <div className='col-6'>Alternate Max Torque</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          {/* <div className='row spec-data'>
          <div className='col-6'>Alternate Max Torque @ RPM</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].battery_capacity === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Battery Capacity</div>
            <div className='col-6'>{cardetails[0].battery_capacity === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].battery_capacity}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Battery Placement</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].battery_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Battery Type</div>
            <div className='col-6'>{cardetails[0].battery_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].battery_type}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Battery Voltage</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].battery_warranty === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Battery Warranty</div>
            <div className='col-6'>{cardetails[0].battery_warranty === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].battery_warranty}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Battery Weight</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Bore</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].charging_time === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Charging Time @220V</div>
            <div className='col-6'>{cardetails[0].charging_time === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].charging_time}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>City Mileage (CarWale Tested)</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].clutchtype === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>ClutchType</div>
            <div className='col-6'>{cardetails[0].clutchtype === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].clutchtype}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].compression_ratio === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Compression Ratio</div>
            <div className='col-6'>{cardetails[0].compression_ratio === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].compression_ratio}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Cylinder Configuration</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].displacement === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Displacement</div>
            <div className='col-6'>{cardetails[0].displacement === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].displacement}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Drivetrain</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].drive_modes === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Driving Modes</div>
            <div className='col-6'>{cardetails[0].drive_modes === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].drive_modes}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Driving Range</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Dual Clutch</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Electric Motor Placement</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Electric Motor Type</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Emission Standard</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].engine_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Engine Type</div>
            <div className='col-6'>{cardetails[0].engine_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].engine_type}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Fast Charging Time</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Fast Charging Voltage</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Final Gear Reduction Ratio</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].fuel_system === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Fuel System</div>
            <div className='col-6'>{cardetails[0].fuel_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].fuel_system}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].fuel_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Fuel Type </div>
            <div className='col-6'>{cardetails[0].fuel_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].fuel_type}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Engine Type</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Highway Mileage</div>
          <div className='col-6'>{cardetails[0].highway_mileage}</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Highway Mileage (CarWale Tested)</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Idle Start/Stop</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Ignition Type</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Manual Shifting for Automatic</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Engine Power</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Engine Power@RPM</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Engine Torque</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Engine Torque@RPM</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Motor Power</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Motor Power@RPM</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Motor Torque</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Motor Torque@RPM</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Power</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Power @ RPM</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Torque</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Max Torque @ RPM</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Mileage Owner Reported</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].arai_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Mileage (ARAI)</div>
            <div className='col-6'>{cardetails[0].arai_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].arai_mileage}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].city_mileage === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Mileage City</div>
            <div className='col-6'>{cardetails[0].city_mileage === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].city_mileage}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>No of Cylinders</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>No of gears</div>
          <div className='col-6'>{cardetails[0].no_of_gears}</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Number of Electric Motors</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Power Consumption / Mileage</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Pure Electric Driving Mode</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Regenerative Braking</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Sport Mode</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Stroke</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Top Speed</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Transmission Type</div>
          <div className='col-6'>{cardetails[0].transmission_type}</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].turbocharger === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Turbocharger</div>
            <div className='col-6'>{cardetails[0].turbocharger === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].turbocharger}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Turbocharger Type</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Turbocharger/Supercharger</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Type of Automatic</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Valve Configuration</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Valves per Cylinder</div>
          <div className='col-6'>{cardetails[0].valves_per_cylinder}</div>
        </div> */}

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Dimension & Weight</b></Accordion.Header>
        <Accordion.Body>
          {/* <div className='row spec-data'>
          <div className='col-6'>Ground Clearance</div>
          <div className='col-6'>{cardetails[0].ground_clearance_(laden)==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].ground_clearance_(laden)}</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].height === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Height</div>
            <div className='col-6'>{cardetails[0].height === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].height}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].kerb_weight === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Kerb Weight</div>
            <div className='col-6'>{cardetails[0].kerb_weight === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].kerb_weight}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].length === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Length</div>
            <div className='col-6'>{cardetails[0].length === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].length}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].drag_coefficient === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Drag Coefficient</div>
            <div className='col-6'>{cardetails[0].drag_coefficient === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].drag_coefficient}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Wheelbase</div>
            <div className='col-6'>{cardetails[0].wheelbase}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Width</div>
            <div className='col-6'>{cardetails[0].width}</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Capacity</b></Accordion.Header>
        <Accordion.Body>
          <div className={`row spec-data ${cardetails[0].boot_space_Litres === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Bootspace</div>
            <div className='col-6'>{cardetails[0].boot_space_Litres === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].boot_space_Litres}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Doors</div>
          <div className='col-6'>{cardetails[0].doors}</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].fuel_tank_capacity === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Fuel Tank Capacity</div>
            <div className='col-6'>{cardetails[0].fuel_tank_capacity === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].fuel_tank_capacity}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].cng_fuel_tank_capacity_litres === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>CNG Fuel Tank Capacity Litres</div>
            <div className='col-6'>{cardetails[0].cng_fuel_tank_capacity_litres === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cng_fuel_tank_capacity_litres}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].diesel_fuel_tank_capacity_litres === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Diesel Fuel Tank Capacity Litres</div>
            <div className='col-6'>{cardetails[0].diesel_fuel_tank_capacity_litres === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].diesel_fuel_tank_capacity_litres}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].range === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Range</div>
            <div className='col-6'>{cardetails[0].range === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].range}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].secondary_fuel_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Secondary Fuel Type</div>
            <div className='col-6'>{cardetails[0].secondary_fuel_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].secondary_fuel_type}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>No of Seating Rows</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Seating Capacity</div>
          <div className='col-6'>Not Available</div>
        </div> */}

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Suspensions, Breakes, Steering & Tyres</b></Accordion.Header>
        <Accordion.Body>
          {/* <div className='row spec-data'>
          <div className='col-6'>Braking Performance</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Four Wheel Steering</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Front Brake Size</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].front_brake_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Front Brake Type</div>
            <div className='col-6'>{cardetails[0].front_brake_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].front_brake_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].front_suspension === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Front Suspension</div>
            <div className='col-6'>{cardetails[0].front_suspension === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].front_suspension}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].city_driveability_twenty_eighty_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>City Driveability(20-80)kmph</div>
            <div className='col-6'>{cardetails[0].city_driveability_twenty_eighty_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].city_driveability_twenty_eighty_kmph}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].shock_absorbers_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Shock Absorbers Type</div>
            <div className='col-6'>{cardetails[0].shock_absorbers_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].shock_absorbers_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].steering_column === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Steering Column</div>
            <div className='col-6'>{cardetails[0].steering_column === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].steering_column}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].steering_gear_type === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Steering Gear Type</div>
            <div className='col-6'>{cardetails[0].steering_gear_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].steering_gear_type}</div>
          </div>
          <div className={`row spec-data ${cardetails[0].steering_wheel_gearshift_paddles === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Steering Wheel Gearshift Paddles</div>
            <div className='col-6'>{cardetails[0].steering_wheel_gearshift_paddles === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].steering_wheel_gearshift_paddles}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Front Tyre Profile</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Front Tyre Section Width</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Front Wheel Diameter</div>
          <div className='col-6'>Not Available</div>
        </div> */}
          <div className={`row spec-data ${cardetails[0].turning_radius_metres === "NULL" ? 'd-none' : 'd-flex'}`}>
            <div className='col-6'>Minimum Turning Radius</div>
            <div className='col-6'>{cardetails[0].turning_radius_metres === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].turning_radius_metres}</div>
          </div>
          {/* <div className='row spec-data'>
          <div className='col-6'>Rear Brake Size</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Rear Brake Type</div>
          <div className='col-6'>{cardetails[0].rear_brake_type}</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Rear Suspension</div>
          <div className='col-6'>{cardetails[0].rear_suspension}</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Rear Tyre Profile</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Rear Tyre Section Width</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Rear Wheel Diameter</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Spare Wheel</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Steering Type</div>
          <div className='col-6'>{cardetails[0].steering_type}</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Tyre Construction</div>
          <div className='col-6'>Not Available</div>
        </div>
        <div className='row spec-data'>
          <div className='col-6'>Wheels</div>
          <div className='col-6'>Not Available</div>
        </div> */}
        </Accordion.Body>
      </Accordion.Item>
      </> : null}
    </Accordion>
  )
}

export default Specifications
