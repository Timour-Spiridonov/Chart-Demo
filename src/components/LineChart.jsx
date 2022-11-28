
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Airtable from "airtable";
import { yearsLabels, checkCount } from "./callBacks";


const LineChart = () => {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'key8EWwzhYpjeqb65'
    });
    const base = Airtable.base('appFLbxeG3moeyW7f');
    const table = base('Imported table');
    const array_fields= [];
    const field =['Department Name']
    const [dataUk, setDataUk]=useState({})
    const [dataUsa, setDataUsa]=useState({})
    const [dataEu, setDataEu]=useState({})
    const getRecords2 = async()=>{
                const objUk ={}
                const objUsa ={}
                const objEu ={}
                const countryData ={
                UK:{
                    years: [],
                },
                USA:{
                    years: [],
                    
                },
                EU:{
                    years: []
                
                }
                }
        const records = await table.select().eachPage(function page(records, fetchNextPage){
                         records.forEach((record)=>{
                          if(record.get('Uni Location')==='UK'){
                            countryData.UK.years.push(record.get('Year Founded'))
                          }else if(record.get('Uni Location')==='USA'){
                            countryData.USA.years.push(record.get('Year Founded'))
                          }else if(record.get('Uni Location')==='EU'){
                            countryData.EU.years.push(record.get('Year Founded'))
                         }else{
                          
                         }})
                        fetchNextPage()
            })
      
           for(let i=0; i<yearsLabels.length; i++){
             if(checkCount(yearsLabels[i],countryData.UK.years)>0){
               objUk[yearsLabels[i]]=checkCount(yearsLabels[i],countryData.UK.years)
             }else{
              objUk[yearsLabels[i]]= undefined
             }
           }
           for(let i=0; i<yearsLabels.length; i++){
            if(checkCount(yearsLabels[i],countryData.USA.years)>0){
              objUsa[yearsLabels[i]]=checkCount(yearsLabels[i],countryData.USA.years)
            }else{
             objUsa[yearsLabels[i]]= undefined
            }
          }
          for(let i=0; i<yearsLabels.length; i++){
            if(checkCount(yearsLabels[i],countryData.EU.years)>0){
              objEu[yearsLabels[i]]=checkCount(yearsLabels[i],countryData.EU.years)
            }else{
             objEu[yearsLabels[i]]= undefined
            }
          }
       
      
      setDataEu(objEu)
      setDataUk(objUk)
      setDataUsa(objUsa)
      
        }  
    
        const dataLine = {
            labels: yearsLabels,
            datasets: [
              {
                label: "UK",
                backgroundColor: "#00FF00",
                borderColor:"#00FF00",
                data: Object.values(dataUk),
                spanGaps: true
          
              },
              {
                  label: "US",
                  backgroundColor: "#EE1920",
                  borderColor: "#EE1920",
                  data: Object.values(dataUsa),
                  spanGaps: true
          
                },
                {
                  label: "EU",
                  backgroundColor: "#1944EE",
                  borderColor: "#1944EE",
                  data: Object.values(dataEu),
                  spanGaps: true
          
                }
            ],
          }; 
    
    useEffect(()=>{
        getRecords2()
    },[]
    )
  return (
    <div>
        <h2>Startups created since 1984 <br />
         per Uk, USA and EU</h2>
      <p>
        Graph from  <br />
        <a href=" https://www.spinout.fyi/data">Spinout Data</a>  
      </p>
      <Line data={dataLine} options={{responsive:false}}width={500} 
      height={400} />
    </div>
  );
};

export default LineChart;