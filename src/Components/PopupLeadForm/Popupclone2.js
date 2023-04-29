import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LeadGenerationForm from '../LeadGenerationForm/LeadGenerationForm';
import './PouupLeadForm.css';
import Pricetag from "../images/icons/tag.png"


function PopupClone2(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button onClick={handleShow} className='g-link-button g-underline text-start'>Get OnRoad Price</button>


      <Modal className='lead-form-popup' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="form-logo"><h3 className=" m-2">Get<span className="normal-text">Onroad</span>Price</h3></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='lead-form-full'>
          <LeadGenerationForm brand={props.brand} model={props.model} version={props.version} fuel={props.fuel} transmission={props.transmission} /></Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default PopupClone2
