import React, { useState } from "react";
import "../index.css";

import Buildings from "../components/Buildings";
import Dropdown from "../components/Dropdown";
import datas from "../datas.json";
import { carboneCalculation } from "../utiles";

export default function Home(){
    //import the data array in the object datas
    const dataArray = datas.data;
    
    /*take the data to sort them per the smaller emission carbon*/
    function sortByCarbon(items) {   
        const sortedItems = [...items]; 
        return sortedItems.sort((a, b) =>{
            if ( a.carbon_emission < b.carbon_emission) return -1;
            if (a.carbon_emission > b.carbon_emission) return 1;
            return 0;  
        });  
    }
    const sortedByCarbon = sortByCarbon(dataArray);
    
    /*take the data to sort them per the smaller emission carbon/m2*/
    function sortByCarbonMeter(items) {
        const sortedItems = [...items];
        return sortedItems.sort((a, b) => {
            const carboneCalculationA = carboneCalculation(
                a.carbon_emission, a.surface,
            );
            const carboneCalculationB = carboneCalculation(
                b.carbon_emission, b.surface,
            );
              
            if (carboneCalculationA < carboneCalculationB) return -1;
            if (carboneCalculationA > carboneCalculationB) return 1;
            return 0;   
        });          
    }
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