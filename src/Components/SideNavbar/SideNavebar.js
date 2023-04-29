import React from 'react';
import './SideNavebar.css';
import Accordion from 'react-bootstrap/Accordion';


function SideNavebar() {
  return (
    <Accordion className='acc-main pt-2'>
      <Accordion.Item className='accordion-common acc-one' eventKey="0">
        <Accordion.Header className='acc-one-head'><b>Popular Brands</b></Accordion.Header>
        <Accordion.Body className='px-0 py-1'>
          <ul className='list-unstyled p-0 m-0'>
            <li>Maruti</li>
            <li>Suzuki</li>
            <li>Hyundai</li>
            <li>Tata</li>
            <li>Toyota</li>
            <li>KIA</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='accordion-common acc-two' eventKey="1">
        <Accordion.Header><b>Car Type</b></Accordion.Header>
        <Accordion.Body className='px-0 py-1'>
          <ul className='list-unstyled p-0 m-0'>
            <li>Hatchback</li>
            <li>Sedan</li>
            <li>SUV</li>
            <li>MUV</li>
            <li>Electric</li>
            <li>Luxury</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      {/* <Accordion.Item eventKey="2">
        <Accordion.Header><b>Capacity</b></Accordion.Header>
        <Accordion.Body>
          <ul>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Suspensions, Breakes, Steering & Tyres</b></Accordion.Header>
        <Accordion.Body>
          <ul>

          </ul>
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  )
}

export default SideNavebar
