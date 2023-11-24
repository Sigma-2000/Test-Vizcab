import axios from 'axios';
import React, { useEffect, useState } from "react";
import "../index.css";


import Buildings from "../components/Buildings";
import Dropdown from "../components/Dropdown";
import { sortByCarbon, sortByCarbonMeter } from "../utiles";

export default function Home(){

    
    const [responseData, setResponseData] = useState([]);

    const fetchData= ()=>{
        axios
            .get('http://localhost:3000/')
            .then((response) => {
                console.log(response.data.data);
                setResponseData(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            });      
    }; 
    useEffect(()=>{
        fetchData();
    },[]);
   
    //import the data array set with useState 
    const dataArray = responseData;
    /*take the data to sort them per the smaller emission carbon*/
    const sortedByCarbon = sortByCarbon(dataArray);
    
    /*take the data to sort them per the smaller emission carbon/m2*/
    const sortedByCarbonMeter = sortByCarbonMeter(dataArray);
    
    /*settings addEventListener and useState 
    for listening and change the option */ 
    const [valueSelect, setValueSelect] = useState('1');

    function handleChange(e){
        setValueSelect(e.target.value); 
    }
    
    /*associate the value of options at the variables of sort,
    and pass it to a new props for sorting the buildings*/ 
    
    function findSortedBuildings(valueSelected) {
        if (valueSelected === '1'){
            return sortedByCarbonMeter;        
        }else if (valueSelected === '2'){
            return sortedByCarbon;
        }
    }
    
    return(
        <div className="presentation-pages">
            <Dropdown handleChange={handleChange} valueSelect={valueSelect} />
            <Buildings
                buildings={findSortedBuildings(valueSelect)}
            />
        </div>
    );
}