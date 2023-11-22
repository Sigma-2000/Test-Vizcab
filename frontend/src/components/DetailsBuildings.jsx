import React from "react";

//import datas from "../datas.json";
import "../index.css";
import { useNavigate } from 'react-router-dom';


export default function DetailsBuildings(){
    
    let navigate = useNavigate();
    /*const dataArray = datas.data;
    
  
    if (!Array.isArray(dataArray)) {
        // Gestion de cas où datas n'est pas un tableau
        return <div>Les données ne sont pas valides.</div>;
    }*/
    function handleHomeClick() {
        // Naviguer vers la page de détails en utilisant l'ID du bâtiment
        navigate(`/`);
    }
    return (
       
        

        <button onClick={() => handleHomeClick()}>&#129044; back</button>
       
    );
}