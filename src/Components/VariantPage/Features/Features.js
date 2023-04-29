import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function Features(props) {

  const [cardetails, setcardetails] = useState([])

  const GetData = async () => {
    const res = await fetch(`/getnewonecardata/${props.model}/${props.version}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      console.log("Invalid Input");
    } else {
      setcardetails(data)
    }

  }

  useEffect(() => {
    GetData();
  }, []);



  return (
    <Accordion>
      {cardetails.length > 0 ? <>
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>Safety</b></Accordion.Header>
          <Accordion.Body>
            {/* {cardetails[0].advance_safety_features} */}
            <div className={`row spec-data ${cardetails[0].no_of_airbags === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Airbags</div>
              <div className='col-6'>{cardetails[0].no_of_airbags === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].no_of_airbags}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Automatic Emergency Braking (AEB)</div>
            <div className='col-6'>{cardetails[0].automatic_emergency_braking_aeb_}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].blind_spot_monitor === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Blind Spot Detection</div>
              <div className='col-6'>{cardetails[0].blind_spot_monitor === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].blind_spot_monitor}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].advance_safety_features === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Advance Safety Features</div>
              <div className='col-6'>{cardetails[0].advance_safety_features === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].advance_safety_features}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].anti_theft_device === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Anti Theft Device</div>
              <div className='col-6'>{cardetails[0].anti_theft_device === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].anti_theft_device}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].centrally_mounted_fuel_tank === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Centrally Mounted Fuel Tank</div>
              <div className='col-6'>{cardetails[0].centrally_mounted_fuel_tank === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].centrally_mounted_fuel_tank}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].clutch_lock === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Clutch Lock</div>
              <div className='col-6'>{cardetails[0].clutch_lock === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].clutch_lock}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].clutchtype === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Clutch Type</div>
              <div className='col-6'>{cardetails[0].clutchtype === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].clutchtype}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].crash_sensor === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Crash Sensor</div>
              <div className='col-6'>{cardetails[0].crash_sensor === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].crash_sensor}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].driver_airbag === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Driver Airbag</div>
              <div className='col-6'>{cardetails[0].driver_airbag === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].driver_airbag}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].passenger_airbag === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Passenger Airbag</div>
              <div className='col-6'>{cardetails[0].passenger_airbag === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].passenger_airbag}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_door_locks === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Door Locks</div>
              <div className='col-6'>{cardetails[0].power_door_locks === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_door_locks}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_camera === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Camera</div>
              <div className='col-6'>{cardetails[0].rear_camera === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_camera}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].side_impact_beams === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Side Impact Beams</div>
              <div className='col-6'>{cardetails[0].side_impact_beams === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].side_impact_beams}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].sos_emergency_assistance === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>SOS Emergency Assistance</div>
              <div className='col-6'>{cardetails[0].sos_emergency_assistance === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].sos_emergency_assistance}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].speed_alert === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Speed Alert</div>
              <div className='col-6'>{cardetails[0].speed_alert === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].speed_alert}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].vehicle_stability_control_system === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Vehicle Stability Control System</div>
              <div className='col-6'>{cardetails[0].vehicle_stability_control_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].vehicle_stability_control_system}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Child Seat Anchor Points</div>
            <div className='col-6'>{cardetails[0].child_seat_anchor_points}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Dual-Stage Airbags</div>
            <div className='col-6'>{cardetails[0].dual_stage_airbags}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Emergency Brake Light Flashing </div>
            <div className='col-6'>{cardetails[0].emergency_brake_light_flashing}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Euro NCAP Rating</div>
            <div className='col-6'>{cardetails[0].euro_ncap_rating}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Forward Collision Warning (FCW)</div>
            <div className='col-6'>{cardetails[0].forward_collision_warning_fcw_}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Four-Point Seatbelt</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Global NCAP Rating</div>
            <div className='col-6'>{cardetails[0].global_ncap_rating}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>High-beam Assist</div>
            <div className='col-6'>{cardetails[0].high_beam_assist}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lane Departure Prevention</div>
            <div className='col-6'>{cardetails[0].lane_departure_prevention}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lane Departure Warning</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Middle Rear Head Rest</div>
            <div className='col-6'>{cardetails[0].middle_rear_head_rest}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Middle rear three-point seatbelt</div>
            <div className='col-6'>{cardetails[0].middle_rear_three_point_seatbelt}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>NCAP Rating</div>
            <div className='col-6'>{cardetails[0].ncap_rating}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Overspeed Warning</div>
            <div className='col-6'>{cardetails[0].overspeed_warning}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Pretensioning Seatbelts</div>
            <div className='col-6'>{cardetails[0].pretensioning_seatbelts}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Puncture Repair Kit</div>
            <div className='col-6'>{cardetails[0].puncture_repair_kit}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Cross-Traffic Assist</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Belt Warning</div>
            <div className='col-6'>{cardetails[0].seat_belt_warning}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Tyre Pressure Monitoring System (TPMS)</div>
            <div className='col-6'>{cardetails[0].tyre_pressure_monitoring_system_tpms_}</div>
          </div> */}

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><b>Braking & Traction</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>Adjustable Damping</div>
            <div className='col-6'>{cardetails[0].adjustable_damping}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].anti_lock_braking_system === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Anti-Lock Braking System (ABS)</div>
              <div className='col-6'>{cardetails[0].anti_lock_braking_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].anti_lock_braking_system}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].braking_onehundred_zero_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Braking (100-0)kmph</div>
              <div className='col-6'>{cardetails[0].braking_onehundred_zero_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].braking_onehundred_zero_kmph}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].braking_sixty_zero_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Braking (60-0)kmph</div>
              <div className='col-6'>{cardetails[0].braking_sixty_zero_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].braking_sixty_zero_kmph}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].braking_eighty_zero_kmph === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Braking (80-0)kmph</div>
              <div className='col-6'>{cardetails[0].braking_eighty_zero_kmph === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].braking_eighty_zero_kmph}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Automatic Four-Wheel-Drive</div>
            <div className='col-6'>{cardetails[0].automatic_four_wheel_drive}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].brake_assist_ba === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Brake Assist (BA)</div>
              <div className='col-6'>{cardetails[0].brake_assist_ba === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].brake_assist_ba}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Differential Lock</div>
            <div className='col-6'>{cardetails[0].differential_lock}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].ebd === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Electronic Brake-force Distribution (EBD)</div>
              <div className='col-6'>{cardetails[0].ebd === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].ebd}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Electronic Stability Program (ESP)</div>
            <div className='col-6'>{cardetails[0].electronic_stability_program_esp_}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Four-Wheel-Drive</div>
            <div className='col-6'>{cardetails[0].four_wheel_drive}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].hill_descent_control === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Hill Descent Control</div>
              <div className='col-6'>{cardetails[0].hill_descent_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].hill_descent_control}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Hill Hold Control</div>
            <div className='col-6'>{cardetails[0].hill_hold_control}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Limited Slip Differential (LSD)</div>
            <div className='col-6'>{cardetails[0].limited_slip_differential_lsd_}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Ride Height Adjustment</div>
            <div className='col-6'>{cardetails[0].ride_height_adjustment}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Torque Vectoring</div>
            <div className='col-6'>{cardetails[0].torque_vectoring}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Traction Control System (TC/TCS)</div>
            <div className='col-6'>{cardetails[0].traction_control_system_tc_tcs_}</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><b>Locks & Security</b></Accordion.Header>
          <Accordion.Body>
            <div className={`row spec-data ${cardetails[0].anti_theft_alarm === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Anti-theft Alarm</div>
              <div className='col-6'>{cardetails[0].anti_theft_alarm === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].anti_theft_alarm}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].central_locking === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Central Locking</div>
              <div className='col-6'>{cardetails[0].central_locking === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].central_locking}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].child_safety_lock === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Child Safety Lock</div>
              <div className='col-6'>{cardetails[0].child_safety_lock === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].child_safety_lock}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].engine_immobilizer === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Engine immobilizer</div>
              <div className='col-6'>{cardetails[0].engine_immobilizer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].engine_immobilizer}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].impact_sensing_auto_door_unlocking === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Impact Sensing Auto Door Unlocking</div>
              <div className='col-6'>{cardetails[0].impact_sensing_auto_door_unlocking === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].impact_sensing_auto_door_unlocking}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Speed Sensing Door Lock</div>
            <div className='col-6'>{cardetails[0].speed_sensing_door_lock}</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><b>Comfort & Comvenience</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>12V Power Outlets</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].air_conditioner === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Air Conditioner</div>
              <div className='col-6'>{cardetails[0].air_conditioner === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].air_conditioner}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].accessory_power_outlet === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Accessory Power Outlet</div>
              <div className='col-6'>{cardetails[0].accessory_power_outlet === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].accessory_power_outlet}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].additional_features === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Additional Features</div>
              <div className='col-6'>{cardetails[0].additional_features === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].additional_features}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].air_quality_control === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Air Quality Control</div>
              <div className='col-6'>{cardetails[0].air_quality_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].air_quality_control}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].automatic_climate_control === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Automatic Climate Control</div>
              <div className='col-6'>{cardetails[0].automatic_climate_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].automatic_climate_control}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].battery_saver === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Battery Saver</div>
              <div className='col-6'>{cardetails[0].battery_saver === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].battery_saver}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].central_console_armrest === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Central Console Armrest</div>
              <div className='col-6'>{cardetails[0].central_console_armrest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].central_console_armrest}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cup_holders_front === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>CUP Holders Front</div>
              <div className='col-6'>{cardetails[0].cup_holders_front === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cup_holders_front}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cup_holders_rear === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>CUP Holders Rear</div>
              <div className='col-6'>{cardetails[0].cup_holders_rear === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cup_holders_rear}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].electronic_multi_tripmeter === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Electronic Multi Tripmeter</div>
              <div className='col-6'>{cardetails[0].electronic_multi_tripmeter === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electronic_multi_tripmeter}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].electronic_stability_control === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Electronic Stability Control</div>
              <div className='col-6'>{cardetails[0].electronic_stability_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electronic_stability_control}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].navigation_system === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Navigation System</div>
              <div className='col-6'>{cardetails[0].navigation_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].navigation_system}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_boot === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Boot</div>
              <div className='col-6'>{cardetails[0].power_boot === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_boot}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].quarter_mile === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Quarter Mile</div>
              <div className='col-6'>{cardetails[0].quarter_mile === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].quarter_mile}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_ac_vents === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Ac Vents</div>
              <div className='col-6'>{cardetails[0].rear_ac_vents === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_ac_vents}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].remote_engine_start_stop === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Remote Engine Start Stop</div>
              <div className='col-6'>{cardetails[0].remote_engine_start_stop === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].remote_engine_start_stop}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].remote_fuel_lid_opener === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Remote Fuel Lid Opener</div>
              <div className='col-6'>{cardetails[0].remote_fuel_lid_opener === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].remote_fuel_lid_opener}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].remote_trunk_opener === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Remote Trunk Opener</div>
              <div className='col-6'>{cardetails[0].remote_trunk_opener === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].remote_trunk_opener}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].removable_convertible_top === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Removable Convertible Top</div>
              <div className='col-6'>{cardetails[0].removable_convertible_top === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].removable_convertible_top}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].smart_access_card_entry === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Smart Access Card Entry</div>
              <div className='col-6'>{cardetails[0].smart_access_card_entry === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].smart_access_card_entry}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].smart_key_band === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Smart Key Band</div>
              <div className='col-6'>{cardetails[0].smart_key_band === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].smart_key_band}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].tailgate_ajar === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Tailgate Ajar</div>
              <div className='col-6'>{cardetails[0].tailgate_ajar === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tailgate_ajar}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].usb_charger === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>USB Charger</div>
              <div className='col-6'>{cardetails[0].usb_charger === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].usb_charger}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].vanity_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Vanity Mirror</div>
              <div className='col-6'>{cardetails[0].vanity_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].vanity_mirror}</div>
            </div>



            {/* <div className='row spec-data'>
            <div className='col-6'>Air Purifier</div>
            <div className='col-6'>{cardetails[0].air_purifier}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Anti-glare Mirrors</div>
            <div className='col-6'>{cardetails[0].anti_glare_mirrors}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Cabin-Boot Access</div>
            <div className='col-6'>{cardetails[0].cabin_boot_access}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].cd_changer === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>CD Changer</div>
              <div className='col-6'>{cardetails[0].cd_changer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cd_changer}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cigarette_lighter === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Cigarette Lighter</div>
              <div className='col-6'>{cardetails[0].cigarette_lighter === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cigarette_lighter}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cruise_control === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Cruise Control</div>
              <div className='col-6'>{cardetails[0].cruise_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cruise_control}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Extendable Sun Visor</div>
            <div className='col-6'>{cardetails[0].extendable_sun_visor}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front AC Fan Speed Controls</div>
            <div className='col-6'>{cardetails[0].front_ac_fan_speed_controls}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front AC Zones</div>
            <div className='col-6'>{cardetails[0].front_ac_zones}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Parking Sensors</div>
            <div className='col-6'>{cardetails[0].front_parking_sensors}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headlight & Ignition On Reminder</div>
            <div className='col-6'>{cardetails[0].headlight_ignition_on_reminder}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Keyless Start/ Button Start</div>
            <div className='col-6'>{cardetails[0].keyless_start_button_start}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Paddle Shift</div>
            <div className='col-6'>{cardetails[0].paddle_shift}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Parking Assist</div>
            <div className='col-6'>{cardetails[0].parking_assist}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Parking Sensors</div>
            <div className='col-6'>{cardetails[0].parking_sensors}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Power Steering</div>
            <div className='col-6'>{cardetails[0].power_steering}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear AC Fan Speed Controls</div>
            <div className='col-6'>{cardetails[0].rear_ac_fan_speed_controls}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear AC Vents Placement</div>
            <div className='col-6'>{cardetails[0].rear_ac_vents_placement}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear AC Zones</div>
            <div className='col-6'>{cardetails[0].rear_ac_zones}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Parking Sensors</div>
            <div className='col-6'>{cardetails[0].rear_parking_sensors}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].adjustable_steering === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Steering Adjustment</div>
              <div className='col-6'>{cardetails[0].adjustable_steering === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_steering}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Third AC Zones</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Third Row AC</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Third Row AC Fan Speed Controls</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Third Row AC Vents Placement</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Vanity Mirrors on Sun Visors</div>
            <div className='col-6'>Not Available</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><b>Telematics</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>Alexa Compatibility</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Check Vehicle Status Via App</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Emergency Call</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].find_my_car === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Find My Car</div>
              <div className='col-6'>{cardetails[0].find_my_car === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].find_my_car}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].geo_fence === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Geo-Fence</div>
              <div className='col-6'>{cardetails[0].geo_fence === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].geo_fence}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Over The Air (OTA) Updates</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Remote AC On/Off Via app</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Remote Car Light Flashing & Honking Via app</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Remote Car Lock/Unlock Via app</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Remote Car Start/Stop</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Remote Sunroof Open/Close Via app</div>
            <div className='col-6'>Not Available</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><b>Seats & Upholstery</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>3rd Row Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>3rd Row Seats Type</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Active headrest</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].adjustable_head_rests === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Adjustable Head-rests</div>
              <div className='col-6'>{cardetails[0].adjustable_head_rests === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_head_rests}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].adjustable_seats === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Adjustable Seats</div>
              <div className='col-6'>{cardetails[0].adjustable_seats === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_seats}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].electric_adjustable_seats === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Electric Adjustable Seats</div>
              <div className='col-6'>{cardetails[0].electric_adjustable_seats === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electric_adjustable_seats}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_folding_thrid_row_seat === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Folding 3rd Row Seat</div>
              <div className='col-6'>{cardetails[0].power_folding_thrid_row_seat === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_folding_thrid_row_seat}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_seat_centre_arm_rest === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Seat Centre Arm Rest</div>
              <div className='col-6'>{cardetails[0].rear_seat_centre_arm_rest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_seat_centre_arm_rest}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_seat_headrest === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Seat Headrest</div>
              <div className='col-6'>{cardetails[0].rear_seat_headrest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_seat_headrest}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].seat_lumbar_support === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Seat Lumbar Support</div>
              <div className='col-6'>{cardetails[0].seat_lumbar_support === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].seat_lumbar_support}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Adjustable Lumbar Support</div>
            <div className='col-6'>{cardetails[0].adjustable_lumbar_support}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Audio Controls in Rear Armrest</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Driver Armrest</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].driver_height_adjustable_seat === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Driver Height Adjustable Seat</div>
              <div className='col-6'>{cardetails[0].driver_height_adjustable_seat === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].driver_height_adjustable_seat}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Driver Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Electrically Adjustable Headrests</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].folding_rear_seat === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Folding Rear Seat</div>
              <div className='col-6'>{cardetails[0].folding_rear_seat === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].folding_rear_seat}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Front Passenger Power Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Passenger Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Seatback Pockets</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Head-rests</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Interior Colours</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Interiors</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Leather-wrapped Gear Knob</div>
            <div className='col-6'>{cardetails[0].leather_wrapped_gear_knob}</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].leather_wrapped_steering_wheel === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Leather-wrapped Steering Wheel</div>
              <div className='col-6'>{cardetails[0].leather_wrapped_steering_wheel === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].leather_wrapped_steering_wheel}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Power Seats</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Armrest</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Passenger Adjustable seats</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Passenger Power Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Passenger Seats Type</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Adjustment </div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Upholstery</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seats with heater function</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Split Rear Seat</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Split Third Row Seat</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Ventilated Seat Type</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Ventilated Seats</div>
            <div className='col-6'>Not Available</div>
          </div> */}

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header><b>Storage</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>Bottle Holder</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Bottle Holder Capacity (Front)</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Bottle Holder Capacity (Rear)</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].glove_box_cooling === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Cooled Glove Box </div>
              <div className='col-6'>{cardetails[0].glove_box_cooling === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].glove_box_cooling}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Cup Holders Front</div>
            <div className='col-6'>{cardetails[0].cup_holders-front==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].cup_holders-front}</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Cup Holders Rear</div>
            <div className='col-6'>{cardetails[0].cup_holders-rear==="NULL"?<p className='m-0'>Not Available</p>:cardetails[0].cup_holders-rear}</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Driver Armrest Storage</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Sunglass Holder</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Third Row Cup Holders</div>
            <div className='col-6'>Not Available</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header><b>Doors, Windows, Mirrors & Wipers</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>Adjustable ORVM</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Body-Coloured ORVMs</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Boot-lid Opener</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Door Pockets</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Exterior Door Handles</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].tinted_glass === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Factory Tinted Glasses</div>
              <div className='col-6'>{cardetails[0].tinted_glass === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tinted_glass}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].headlamp_washers === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Headlight Washers</div>
              <div className='col-6'>{cardetails[0].headlamp_washers === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].headlamp_washers}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].anti_pinch_power_windows === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Anti-Pinch Power Windows</div>
              <div className='col-6'>{cardetails[0].anti_pinch_power_windows === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].anti_pinch_power_windows}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].day_night_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Day Night Rear View Mirror</div>
              <div className='col-6'>{cardetails[0].day_night_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].day_night_rear_view_mirror}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].no_of_doors === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>No of Doors</div>
              <div className='col-6'>{cardetails[0].no_of_doors === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].no_of_doors}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].outside_rear_view_mirror_turn_indicators === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Outside Rear View Mirror Turn Indicators</div>
              <div className='col-6'>{cardetails[0].outside_rear_view_mirror_turn_indicators === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].outside_rear_view_mirror_turn_indicators}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].passenger_side_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Passenger Side Rear View Mirror</div>
              <div className='col-6'>{cardetails[0].passenger_side_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].passenger_side_rear_view_mirror}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_adjustable_exterior_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Adjustable Exterior Rear View Mirror</div>
              <div className='col-6'>{cardetails[0].power_adjustable_exterior_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_adjustable_exterior_rear_view_mirror}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_windows_front === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Windows Front</div>
              <div className='col-6'>{cardetails[0].power_windows_front === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_windows_front}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_windows_rear === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Windows Rear</div>
              <div className='col-6'>{cardetails[0].power_windows_rear === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_windows_rear}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_window_washer === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Window Washer</div>
              <div className='col-6'>{cardetails[0].rear_window_washer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_window_washer}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_window_wiper === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Window Wiper</div>
              <div className='col-6'>{cardetails[0].rear_window_wiper === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_window_wiper}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Interior Door Handles</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>One Touch -Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Outside Rear View Mirrors</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Outside Rear View Mirrors (ORVMs)</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Power Windows</div>
            <div className='col-6'>{cardetails[0].power_windows}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rain-sensing Wipers</div>
            <div className='col-6'>{cardetails[0].rain_sensing_wipers}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Defogger</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Windshield Blind</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Wiper</div>
            <div className='col-6'>{cardetails[0].rear_wiper}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Scuff Plates</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Side Window Blinds</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Turn Indicators on ORVM</div>
            <div className='col-6'>Not Available</div>
          </div> */}

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header><b>Interior</b></Accordion.Header>
          <Accordion.Body>
            <div className={`row spec-data ${cardetails[0].digital_clock === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Digital Clock</div>
              <div className='col-6'>{cardetails[0].digital_clock === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].digital_clock}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].digital_odometer === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Digital Odometer</div>
              <div className='col-6'>{cardetails[0].digital_odometer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].digital_odometer}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].driving_experience_control_eco === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Driving Experience Control_eco</div>
              <div className='col-6'>{cardetails[0].driving_experience_control_eco === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].driving_experience_control_eco}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].dual_tone_dashboard === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Dual Tone Dashboard</div>
              <div className='col-6'>{cardetails[0].dual_tone_dashboard === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].dual_tone_dashboard}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].electric_folding_rear_view_mirror === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Electric Folding Rear View Mirror</div>
              <div className='col-6'>{cardetails[0].electric_folding_rear_view_mirror === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].electric_folding_rear_view_mirror}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].outside_temperature_display === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Outside Temperature Display</div>
              <div className='col-6'>{cardetails[0].outside_temperature_display === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].outside_temperature_display}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_shoulder_room === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Shoulder Room</div>
              <div className='col-6'>{cardetails[0].rear_shoulder_room === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_shoulder_room}</div>
            </div>
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header><b>Exterior</b></Accordion.Header>
          <Accordion.Body>
            <div className={`row spec-data ${cardetails[0].chrome_garnish === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Chrome Garnish</div>
              <div className='col-6'>{cardetails[0].chrome_garnish === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].chrome_garnish}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].chrome_grille === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Chrome Grille</div>
              <div className='col-6'>{cardetails[0].chrome_grille === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].chrome_grille}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].dual_tone_body_colour === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Dual Tone Body Colour</div>
              <div className='col-6'>{cardetails[0].dual_tone_body_colour === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].dual_tone_body_colour}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].roof_carrier === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Roof Carrier</div>
              <div className='col-6'>{cardetails[0].roof_carrier === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].roof_carrier}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].side_stepper === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Side Stepper</div>
              <div className='col-6'>{cardetails[0].side_stepper === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].side_stepper}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].smoke_headlamps === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Smoke Headlamps</div>
              <div className='col-6'>{cardetails[0].smoke_headlamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].smoke_headlamps}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].tinted_glass === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Tinted Glass</div>
              <div className='col-6'>{cardetails[0].tinted_glass === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tinted_glass}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].trunk_opener === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Trunk Opener</div>
              <div className='col-6'>{cardetails[0].trunk_opener === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].trunk_opener}</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header><b>Entertainment, Information & Communication</b></Accordion.Header>
          <Accordion.Body>
            <div className={`row spec-data ${cardetails[0].radio === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>AM/FM Radio</div>
              <div className='col-6'>{cardetails[0].radio === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].radio}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].apple_car_play === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Apple Car Play</div>
              <div className='col-6'>{cardetails[0].apple_car_play === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].apple_car_play}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].active_noise_cancellation === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Active Noise Cancellation</div>
              <div className='col-6'>{cardetails[0].active_noise_cancellation === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].active_noise_cancellation}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].android_auto === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Android Auto</div>
              <div className='col-6'>{cardetails[0].android_auto === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].android_auto}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].audio_system_remote_control === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Audio System Remote Control</div>
              <div className='col-6'>{cardetails[0].audio_system_remote_control === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].audio_system_remote_control}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cd_changer === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>CD Changer</div>
              <div className='col-6'>{cardetails[0].cd_changer === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cd_changer}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cd_player === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>CD Player</div>
              <div className='col-6'>{cardetails[0].cd_player === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cd_player}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].compass === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Compass</div>
              <div className='col-6'>{cardetails[0].compass === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].compass}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].mirror_link === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Mirror Link</div>
              <div className='col-6'>{cardetails[0].mirror_link === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].mirror_link}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].connectivity === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Connectivity</div>
              <div className='col-6'>{cardetails[0].connectivity === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].connectivity}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].no_of_speakers === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>No of Speakers</div>
              <div className='col-6'>{cardetails[0].no_of_speakers === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].no_of_speakers}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].power_antenna === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Power Antenna</div>
              <div className='col-6'>{cardetails[0].power_antenna === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].power_antenna}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].radio === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Radio</div>
              <div className='col-6'>{cardetails[0].radio === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].radio}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].rear_entertainment_system === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rear Entertainment System</div>
              <div className='col-6'>{cardetails[0].rear_entertainment_system === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_entertainment_system}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].speakers_front === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Speakers Front</div>
              <div className='col-6'>{cardetails[0].speakers_front === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].speakers_front}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].speakers_rear === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Speakers Rear</div>
              <div className='col-6'>{cardetails[0].speakers_rear === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].speakers_rear}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].touch_screen === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Touch Screen</div>
              <div className='col-6'>{cardetails[0].touch_screen === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].touch_screen}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Aux Compatibility</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].bluetooth_compatibility === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Bluetooth Compatibility</div>
              <div className='col-6'>{cardetails[0].bluetooth_compatibility === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].bluetooth_compatibility}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cd_player === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>CD Player</div>
              <div className='col-6'>{cardetails[0].cd_player === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cd_player}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Display</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Display Screen for Rear Passengers</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].dvd_playback === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>DVD Playback</div>
              <div className='col-6'>{cardetails[0].dvd_playback === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].dvd_playback}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Gesture Control</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>GPS Navigation System</div>
            <div className='col-6'>{cardetails[0].gps_navigation_system}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Head Unit Size</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Integrated (in-dash) Music System</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Internal Hard-drive</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>iPod Compatibility</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>MP3 Playback</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Phone Mirroring</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>SD Card Compatibility</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Speakers</div>
            <div className='col-6'>{cardetails[0].speakers}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Steering mounted controls</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Touch-screen Display</div>
            <div className='col-6'>{cardetails[0].touch_screen_display}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>USB Compatibility</div>
            <div className='col-6'>{cardetails[0].usb_compatibility}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Voice Command</div>
            <div className='col-6'>{cardetails[0].voice_command}</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Wi-Fi Hotspot</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Wireless Charger</div>
            <div className='col-6'>Not Available</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="12">
        <Accordion.Header><b>Manufacturer Warranty</b></Accordion.Header>
        <Accordion.Body>
        <div className='row spec-data'>
            <div className='col-6'>Battery Warranty (Kilometres)</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Battery Warranty (Years)</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Warranty (Kilometres)</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Warranty (Years)</div>
            <div className='col-6'>Not Available</div>
          </div>
        </Accordion.Body>
      </Accordion.Item> */}
        {/* <Accordion.Item eventKey="13">
        <Accordion.Header><b>Rear row</b></Accordion.Header>
        <Accordion.Body>
        <div className='row spec-data'>
            <div className='col-6'>Backrest Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Backrest Tilt Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Extended Thigh Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Footrest</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Memory Presets</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Angle Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Sliding</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Height Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
        </Accordion.Body>
      </Accordion.Item> */}
        {/* <Accordion.Item eventKey="14">
        <Accordion.Header><b>Airbags</b></Accordion.Header>
        <Accordion.Body>
        <div className='row spec-data'>
            <div className='col-6'>Airbags</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Curtain</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Driver</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Driver Head Side</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Driver Knee</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Driver Seatbelt</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Driver Side</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Center</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Footrest</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Middle</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Passenger</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Passenger Head Side</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Passenger Knee</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Passenger Seatbelt</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Passenger Side</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Front Windscreen Curtain</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Pedestrian</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Curtain</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Frontal</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Passenger Seatbelt</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Passenger Side</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Rear Seat Center</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Third Row Passenger Seatbelt</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Third Row Passenger Side</div>
            <div className='col-6'>Not Available</div>
          </div>
          
        </Accordion.Body>
      </Accordion.Item> */}
        {/* <Accordion.Item eventKey="15">
        <Accordion.Header><b>Driver</b></Accordion.Header>
        <Accordion.Body>
        <div className='row spec-data'>
            <div className='col-6'>Backrest Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Backrest Tilt Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Extended Thigh Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Memory Presets</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Angle Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Sliding</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Height Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          
        </Accordion.Body>
      </Accordion.Item> */}
        {/* <Accordion.Item eventKey="16">
        <Accordion.Header><b>Fourth Row</b></Accordion.Header>
        <Accordion.Body>
          <div className='row spec-data'>
            <div className='col-6'> Backrest Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Backrest Tilt Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Extended Thigh Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Memory Presets</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Angle Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Height Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          
        </Accordion.Body>
      </Accordion.Item> */}
        {/* <Accordion.Item eventKey="17">
        <Accordion.Header><b>Front Passenger</b></Accordion.Header>
        <Accordion.Body>        
          <div className='row spec-data'>
            <div className='col-6'> Seat Adjustment</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Backrest Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Backrest Tilt Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Extended Thigh Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headrest Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>          
          <div className='row spec-data'>
            <div className='col-6'>Headrest Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Lumbar Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Memory Presets</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Angle Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Sliding</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Height Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
        </Accordion.Body>
      </Accordion.Item> */}
        <Accordion.Item eventKey="18">
          <Accordion.Header><b>Instrumentation</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>Adjustable Cluster Brightness</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Average Fuel Consumption</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Average Speed</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Clock</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Distance to Empty</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].door_ajar_warning === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Door Ajar Warning</div>
              <div className='col-6'>{cardetails[0].door_ajar_warning === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].door_ajar_warning}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Gear Indicator</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Heads Up Display (HUD)</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Instantaneous Consumption</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Instrument Cluster</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].low_fuel_warning_light === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Low Fuel Level Warning</div>
              <div className='col-6'>{cardetails[0].low_fuel_warning_light === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].low_fuel_warning_light}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Service Light</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].gear_shift_indicator === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Shift Indicator</div>
              <div className='col-6'>{cardetails[0].gear_shift_indicator === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].gear_shift_indicator}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Tachometer</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Trip Meter</div>
            <div className='col-6'>Not Available</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="19">
          <Accordion.Header><b>Lighting</b></Accordion.Header>
          <Accordion.Body>
            {/* <div className='row spec-data'>
            <div className='col-6'>Ambient Interior Lighting</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].automatic_head_lamps === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Automatic Head Lamps</div>
              <div className='col-6'>{cardetails[0].automatic_head_lamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].automatic_head_lamps}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].adjustable_headlights === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Adjustable Headlights</div>
              <div className='col-6'>{cardetails[0].adjustable_headlights === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_headlights}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].cornering_foglamps === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Cornering Foglamps</div>
              <div className='col-6'>{cardetails[0].cornering_foglamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cornering_foglamps}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].trunk_light === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Trunk Light</div>
              <div className='col-6'>{cardetails[0].trunk_light === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].trunk_light}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Boot Light</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Cabin Lamps</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Clear lens Head Lamp</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Clear lens Tail Lamp</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].cornering_headlights === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Cornering Headlights</div>
              <div className='col-6'>{cardetails[0].cornering_headlights === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].cornering_headlights}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Daytime Running Lights</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].follow_me_home_headlamps === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Follow me home headlamps</div>
              <div className='col-6'>{cardetails[0].follow_me_home_headlamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].follow_me_home_headlamps}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].front_fog_lights === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Front Fog Lights</div>
              <div className='col-6'>{cardetails[0].front_fog_lights === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].front_fog_lights}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Glove Box Lamp</div>
            <div className='col-6'>{cardetails[0].glove_box_lamp}</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Headlight Height Adjuster</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Headlights</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].led_tail_lamps === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>LED tail lamps</div>
              <div className='col-6'>{cardetails[0].led_tail_lamps === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].led_tail_lamps}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Lights on Vanity Mirrors</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Projector Headlights</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Puddle Lamps</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Rear Fog Lights</div>
            <div className='col-6'>{cardetails[0].rear_fog_lights}</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Rear Reading Lamp</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Sweeping Turn Indicators</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Tail Lights</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].xenon_headlights === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Xenon Headlights</div>
              <div className='col-6'>{cardetails[0].xenon_headlights === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].xenon_headlights}</div>
            </div>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="20">
          <Accordion.Header><b>Third Row</b></Accordion.Header>
          <Accordion.Body>

            {/* <div className='row spec-data'>
            <div className='col-6'>Backrest Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Backrest Tilt Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Extended Thigh Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].rear_seat_headrest === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Rare Seat Headrest</div>
              <div className='col-6'>{cardetails[0].rear_seat_headrest === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].rear_seat_headrest}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Headrest Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            <div className={`row spec-data ${cardetails[0].seat_lumbar_support === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Lumbar Support</div>
              <div className='col-6'>{cardetails[0].seat_lumbar_support === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].seat_lumbar_support}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Lumbar Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div> 
          <div className='row spec-data'>
            <div className='col-6'>Memory Presets</div>
            <div className='col-6'>Not Available</div>
          </div>*/}
            <div className={`row spec-data ${cardetails[0].adjustable_seats === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Seat Adjustment</div>
              <div className='col-6'>{cardetails[0].adjustable_seats === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].adjustable_seats}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Seat Base Angle Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Base Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Seat Height Up / Down</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Bolsters In / Out</div>
            <div className='col-6'>Not Available</div>
          </div>
          <div className='row spec-data'>
            <div className='col-6'>Shoulder Support Forward / Back</div>
            <div className='col-6'>Not Available</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="21">
          <Accordion.Header><b>Wheels & Tyres</b></Accordion.Header>
          <Accordion.Body>

            <div className={`row spec-data ${cardetails[0].alloy_wheels === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Alloy Wheels</div>
              <div className='col-6'>{cardetails[0].alloy_wheels === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].alloy_wheels}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].alloy_wheel_size === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Alloy Wheel Size</div>
              <div className='col-6'>{cardetails[0].alloy_wheel_size === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].alloy_wheel_size}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].tyre_size === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Tyre Size</div>
              <div className='col-6'>{cardetails[0].tyre_size === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tyre_size}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].tyre_type === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Tyre Type</div>
              <div className='col-6'>{cardetails[0].tyre_type === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].tyre_type}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].wheel_covers === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Wheel Covers</div>
              <div className='col-6'>{cardetails[0].wheel_covers === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].wheel_covers}</div>
            </div>
            <div className={`row spec-data ${cardetails[0].wheel_size === "NULL" ? 'd-none' : 'd-flex'}`}>
              <div className='col-6'>Wheel Size</div>
              <div className='col-6'>{cardetails[0].wheel_size === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].wheel_size}</div>
            </div>
            {/* <div className='row spec-data'>
            <div className='col-6'>Runflat Tyres</div>
            <div className='col-6'>Not Available</div>
          </div> */}
            {/* <div className='row spec-data'>
            <div className='col-6'>Tubeless Tyres</div>
            <div className='col-6'>{cardetails[0].tubeless_tyres}</div>
          </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </> : null}

    </Accordion>
  )
}

export default Features
