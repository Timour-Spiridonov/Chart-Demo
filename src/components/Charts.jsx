import React, {useState, useEffect}from 'react'
import Airtable from 'airtable'
import PieChart from './PieChart';
import LineChart from './LineChart'
//import specific methods/classes


export default function Charts() {
 
   
  return (
    <div>
        <h1>Visualisation of Spinouts </h1>    
        <PieChart/>
        <LineChart/>
     </div>
  )
}
