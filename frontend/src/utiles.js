export function carboneCalculation(carbonEmission, surface){
    return (Math.floor(parseInt(carbonEmission)/parseInt(surface)));
}

/*calculate carbone emission rounds down the result
 of the division to the nearest integer. And convert an potential
 string*/