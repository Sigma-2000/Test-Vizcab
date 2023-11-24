/*calculate carbone emission rounds down the result
 of the division to the nearest integer. And convert an potential
 string*/
export function carboneCalculation(carbonEmission, surface){
    return (Math.floor(parseInt(carbonEmission)/parseInt(surface)));
}

export function sortByCarbon(items) {   
    const sortedItems = [...items]; 
    return sortedItems.sort((a, b) =>{
        if ( a.carbon_emission < b.carbon_emission) return -1;
        if (a.carbon_emission > b.carbon_emission) return 1;
        return 0;  
    });  
}

export function sortByCarbonMeter(items) {
    const sortedItems = [...items];
    return sortedItems.sort((a, b) => {
        const carboneCalculationA = carboneCalculation(
            a.carbon_emission, a.surface,
        );
        const carboneCalculationB = carboneCalculation(
            b.carbon_emission, b.surface,
        );
          
        if (carboneCalculationA < carboneCalculationB) return -1;
        if (carboneCalculationA > carboneCalculationB) return 1;
        return 0;   
    });          
}