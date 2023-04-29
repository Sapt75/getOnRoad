import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function VariantsTab(props) {
  return (
    <Tabs>
    <TabList>
      <Tab onClick={()=>{
        props.finalversion(props.version)
      }}>View All</Tab>
      <Tab onClick={()=>{
        props.finalversion(props.version.filter((item)=>{
          if(item.transmission_type == "Manual"){
            return item
          }
        }))
      }}>Manual</Tab>
      <Tab onClick={()=>{
        props.finalversion(props.version.filter((item)=>{
          if(item.transmission_type == "Automatic"){
            return item
          }
        }))
      }}>Automatic</Tab>
    </TabList>

    <TabPanel>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque omnis corporis quasi, deserunt quam sapiente hic velit, repudiandae reprehenderit unde placeat aspernatur eligendi! Eveniet eaque rerum sit deserunt adipisci.</p>
    </TabPanel>
    <TabPanel>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus exercitationem quae consectetur nam! Ipsum facilis beatae asperiores commodi velit aperiam hic? Enim odit ullam exercitationem numquam voluptas iste quos accusamus.</p>
    </TabPanel>
    <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat incidunt corrupti sunt amet vero! Asperiores libero non nulla ipsum ratione, reprehenderit dolorem, magni adipisci nesciunt blanditiis nemo, laboriosam sequi?</p>
    </TabPanel>
  </Tabs>
  )
}

export default VariantsTab