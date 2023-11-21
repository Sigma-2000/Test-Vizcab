import React from "react";

import datas from "../datas.json";
import "../index.css";


export default function DetailsBuildings(){
    
    const dataArray = datas.data;
    
  
    if (!Array.isArray(dataArray)) {
        // Gestion de cas où datas n'est pas un tableau
        return <div>Les données ne sont pas valides.</div>;
    }

    return (
        <p>test</p>
        /*
        <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>Adress</h3>
            <p>{item.address}</p>
            <p>{item.postcode}{item.city}</p>
            <h3>Surface (m2)</h3>
            <p>{item.surface}</p>
            <h3>Carbon emission (kg eq. CO2)</h3>
            <p>{item.carbon_emission}</p>
            <h3>Carbon emission per square meter(kg eq. CO2/m2)</h3>
            <p>{carboneCalculation}</p>
            //créer un fichier externe js avec opération?
            <p>-back</p>
        </div>*/
    );
}