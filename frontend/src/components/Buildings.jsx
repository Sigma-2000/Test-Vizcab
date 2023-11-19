import React from "react";

import datas from "../datas.json";
import "../index.css";
import "./Buildings.css";



export default function Buildings(){
    
    const prefix = "buildings-vue";
    const dataArray = datas.data;

    /*Accédez à la liste d'objets à partir du fichier JSON on indique 
    que dataArray correspond à sa propriété data et donc au tableau d'objets*/
    if (!Array.isArray(dataArray)) {
        // Gestion de cas où datas n'est pas un tableau
        return <div>Les données ne sont pas valides.</div>;
    }

    return (
        <div className={`${prefix}-container`} > 
            {
                dataArray.map((item)  =>(
                    /*on va mapper sur tout les objets du tableau grace à leur 
                    propriété id pour las afficher*/
                    <div key={item.id} className={`${prefix}-card`}>
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                        <p>{item.postcode}{item.city}</p>
                        <button>
                            <img src="/eye.png" className={`${prefix}-logo`} 
                                alt="eye"/>
                            Details</button>
                    </div>
                )) 
            }
        </div>
    );
}