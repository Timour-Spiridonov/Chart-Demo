import React,{useEffect, useState} from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {checkCount, colorArray,getRandomColor} from './callBacks'
import Airtable from "airtable";



const PieChart = () => {
     

const objTest= {};
const [data, setData]=useState({})


Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'key8EWwzhYpjeqb65'
});
const base = Airtable.base('appFLbxeG3moeyW7f');
const table = base('Imported table');
const array_fields= [];
const field =['Department Name']
const getRecords = async()=>{
    const arraSecond =[];
    const array =[];
    const records = await table.select().eachPage(function page(record, fetchNextPage){
                   record.forEach((elem)=>arraSecond.push(elem.get(field[0])))
                    fetchNextPage()
        })
    for( let i =0; i<arraSecond.length; i++){ 
        if(!array.includes(arraSecond[i])){
            array.push(arraSecond[i])
        }   
    }
   for(let i =0; i<array.length; i++){
     objTest[array[i]]= checkCount(array[i],arraSecond)
   }

   //console.log(array, objTest, arraSecond)
   
   setData(objTest)
};
   
const dataTest = {
  labels: Object.keys(data),
  datasets: [
  {
  label: "per department",
  backgroundColor: colorArray(data),
  borderColor: "rgb(255,255,255)",
  data: Object.values(data),
  },
  ],
  };  
  useEffect(()=>{getRecords()}, [])
  return (
    <div>
      <h2>Startups created by Departement</h2>
      <p>
        Pie chart from  <br />
        <a href=" https://www.spinout.fyi/data">Spinout Data</a>  
      </p>
      <Pie 
      data={dataTest}  
      width={400} 
      height={600} 
      options={{
        responsive:false,
        plugins: {
          legend:{
            position: 'left'
          }
        }
        }}/>
    </div>
  );
};
export default PieChart;