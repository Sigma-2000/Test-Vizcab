import axios from 'axios';
import { useState, useEffect } from 'react';

// create a custom hook 
export default function useApiData() {
    const [responseData, setResponseData] = useState([]);

    //get the data from the Api
    const fetchData= ()=>{
        axios
            .get('http://localhost:3000/')
            .then((response) => {
                setResponseData(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            });      
    }; 
    
    useEffect(() => {
        fetchData();
    }, []); // Fetch data on initial render

    /*don't forget to return the data we need and the function we need 
    for home */
    return { responseData, fetchData };
}


