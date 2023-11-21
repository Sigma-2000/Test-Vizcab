import PropTypes from 'prop-types';
import React from "react";

import "../index.css";
import "./Buildings.css";

export default function Buildings(props){
    const { buildings } = props;
    const prefix = "buildings-vue";
    //prefix for the css

    if (!Array.isArray(buildings)) {
        // In case where 'datas' is not an array.
        return <div>Les données ne sont pas valides.</div>;
    }

    return (
        <div className={`${prefix}-container`} > 
            {
                buildings.map((item)  =>(
                    /*mapping through all the objects in the array based 
                    on their 'id' property to display them.*/
                    <div
                        key={item.id}
                        //key for React 
                        className={`${prefix}-card`}
                        data-testid="buildings"
                        //for testing the number of buildings
                    >
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                        <p>{item.postcode} {item.city}</p>
                        <button>
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