import PropTypes from 'prop-types';
import React from "react";

import "./Dropdown.css";

export default function Dropdown(props){
    //css
    const prefix = "Dropdown-vue";
    //props
    const { handleChange, valueSelect } = props;

    return(  
        <div className={`${prefix}-sort-by`} >
            <label htmlFor="sortBy"className={`${prefix}-label`}>
                Sort By
            </label>
            <select 
                value={valueSelect}
                className={`${prefix}-select`} 
                onChange={handleChange}
            >
                <option 
                    value="1"
                    className={`${prefix}-select-options`} 
                >
                    kg eq. CO2/m2
                </option>
                <option 
                    value="2"
                    className={`${prefix}-select-options`} 
                >
                    kg eq. CO2
                </option>
            </select>  
        </div> 
    );
}
//verify the types of props
Dropdown.propTypes = {
    handleChange: PropTypes.func,
    valueSelect: PropTypes.string,
};
