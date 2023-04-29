import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function VenueVariants(props) {
  let {cars, id, model, details} = props

  return (
    <DropdownButton id="dropdown-basic-button" title={`${details[0].model_name} ${details[0].version_name}`}>
    {cars.map((element)=>{
      return element.model_name + " " + element.version_name !== details[0].model_name + " " + details[0].version_name ? <Dropdown.Item href={`/testnewcars/${element.version_name}/${id}/${model}`}>{element.model_name}&nbsp;{element.version_name}&nbsp;</Dropdown.Item> :null
    })}
    </DropdownButton>
  )
}

export default VenueVariants