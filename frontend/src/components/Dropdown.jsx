import React from "react";

import "./Dropdown.css";
//le css pour label ne marche pas .. alors qu'ici il fonctionne...

export default function Dropdown(){
    const prefix = "Dropdown-vue";
 

    return(
        <div className={`${prefix}-sort-by`} >
            <label htmlFor="sortBy"className={`${prefix}-label`}>
                Sort By
            </label>
            <select className={`${prefix}-select`}>
                <option value="option1">
                    kg eq. CO2/m2</option>
                <option value="option2">kg eq. CO2</option>
            </select>
            
        </div>
    );
}