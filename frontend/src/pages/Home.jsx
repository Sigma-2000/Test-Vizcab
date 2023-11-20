
import React from "react";
import "../index.css";

import Buildings from "../components/Buildings";
import Dropdown from "../components/Dropdown";

export default function Home(){
   
    return(
        <div className="presentation-pages">
            <Dropdown />
            <Buildings />
        </div>
    );
}