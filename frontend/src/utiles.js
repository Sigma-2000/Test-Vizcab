/*calculate carbone emission rounds down the result
 of the division to the nearest integer. And convert an potential
 string*/
export function carboneCalculation(carbonEmission, surface){
    return (Math.floor(parseInt(carbonEmission)/parseInt(surface)));
}

