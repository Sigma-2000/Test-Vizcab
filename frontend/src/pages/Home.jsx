import React, { useEffect, useState } from "react";
import "../index.css";


import Buildings from "../components/Buildings";
import Dropdown from "../components/Dropdown";
import  useApiData  from "../services/useApiData"; 
import { sortByCarbon, sortByCarbonMeter } from "../utiles";

export default function Home(){
    
    const [valueSelect, setValueSelect] = useState('1');
    const { responseData, fetchData } = useApiData();
    /*the function return an objet with 2 properties*/
    
    /*Fetch API data when fetchData function changes 
     (initial render in this case)*/
    useEffect(()=>{
        fetchData(); 
    },[fetchData]); //add fetchData on dependencies if fetch data change
   
    const dataArray =  responseData || []; /*Verification datas Api, if they 
    don't exist, render a empty array*/

    /*take the data to sort them per the smaller emission carbon*/
    const sortedByCarbon = sortByCarbon(dataArray);
    /*take the data to sort them per the smaller emission carbon/m2*/
    const sortedByCarbonMeter = sortByCarbonMeter(dataArray);

    function handleChange(e){
        setValueSelect(e.target.value); 
    }
    
    /*associate the value of options at the variables of sort,
    and pass it to a new props for sorting the buildings*/ 
    /* remplace by ternary !
    function findSortedBuildings(valueSelected) {
        if (valueSelected === '1'){
            return sortedByCarbonMeter;        
        }else if (valueSelected === '2'){
            return sortedByCarbon;
        }
    }*/
    
    return(
        <div className="presentation-pages">
            <Dropdown handleChange={handleChange} valueSelect={valueSelect} />
            <Buildings buildings=
                {valueSelect === '1' ? sortedByCarbonMeter : sortedByCarbon}
            />
        </div>
    );
}