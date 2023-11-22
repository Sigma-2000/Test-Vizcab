import React from "react";
import { 
    useNavigate,
    useParams, 
} 
    from 'react-router-dom';
    
import datas from "../datas.json";
import { carboneCalculation } from "../utiles";

import "../index.css";
import "./DetailsBuildings.css";


export default function DetailsBuildings(){

    const prefix = "building-details";
    let navigate = useNavigate();
    /*get the buildingID from route/url is equal at item.id 
    from buildings(result= string)*/
    const { buildingId } = useParams();

    /*get the data from JSON file but when we use the API, it will be 
    not performing, so use redux or useContext will be more adpated.
    Otherwise, we search in data a match between data.id in datas.json and the
    url buildingId. */
    const building = datas.data.find(item => item.id === parseInt(buildingId));

    //handle errors
    if (!building) {
        return <div>Bâtiment non trouvé.</div>;
    }

    const carbonEmissionPerSquareMeter = carboneCalculation(
        building.carbon_emission, building.surface,
    );
    
    // return to homepage
    function handleHomeClick() {
        navigate(`/`);
    }

    return (
        <div key={building.id} className={`${prefix}-presentation`}>
            <h2>{building.name}</h2>
            <h3>Address</h3>
            <p>{building.address}</p>
            <p>{building.postcode}{building.city}</p>
            <h3>Surface(m2)</h3>
            <p>{building.surface}</p>
            <h3>Carbon emission(kg eq. CO2)</h3>
            <p>{building.carbon_emission}</p>
            <h3>Carbon emission per square meter(kg eq. CO2/m2)</h3>
            <p>{carbonEmissionPerSquareMeter}</p>
            <button 
                onClick={() => handleHomeClick()}
                className={`${prefix}-button`}
            >
                &#129044; back
            </button>
        </div>
    );
}