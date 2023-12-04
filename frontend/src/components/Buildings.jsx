import PropTypes from 'prop-types';
import React from "react";
import { useNavigate } from 'react-router-dom';

import "../index.css";
import "./Buildings.css";


export default function Buildings(props){
    //prefix for the css
    const prefix = "buildings-vue";
    //props
    const { buildings } = props;
    //new useHistory
    let navigate = useNavigate();

    // In case where datas is not an array.
    if (!Array.isArray(buildings)) {
        return <div>Les données ne sont pas valides.</div>;
    }
     
    // Navigate on Details with ID of the buildings
    function handleBuildingClick(buildingId) {
        navigate(`/details/${buildingId}`);
    }
    
    return (
        <div className={`${prefix}-container`} > 
            {
                /*mapping through all the objects in the array based 
                    on their 'id' property to display them.*/
                buildings.map((item)  =>(
                    <div
                        //key for React 
                        key={item.id}
                        className={`${prefix}-card`}
                        //for testing the number of buildings
                        data-testid="buildings"
                    >
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                        <p>{item.postcode} {item.city}</p>
                        <button onClick={() => handleBuildingClick(item.id)}>
                            <img
                                src="/eye.png"
                                className={`${prefix}-logo`}
                                alt="eye"
                            />
                            Details
                        </button>
                    </div>
                )) 
            }
        </div>
    );
}

Buildings.propTypes = {
    buildings: PropTypes.array,
};