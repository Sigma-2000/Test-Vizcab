import React from "react";

import "./Input.css";

export default function Input(){
    const prefix = "Input-vue";
    return(
        <div className={`${prefix}-sort-by`}>
            <label className={`${prefix}-label`} htmlFor="sortBy" >
                Sort By
            </label>
            <select >
                <option value="option1">kg eq. CO2/m2</option>
                <option value="option2">kg eq. CO2</option>
            </select>
        
        </div>
    );
}