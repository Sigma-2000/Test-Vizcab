import React from "react";
export default function Input(){
    const styles = {
        backgroundColor: '#f6f6f6',
        width: 'fit-content',
        padding: '10px',

        
    };
    return(
        <div style={styles}>
            <input
                type="text"
                placeholder="kg eq. CO2/m2"
            />
            <select>
                <option value="">Sort By</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                {/* Ajoutez des options si besoin ??*/}
            </select>
        
        </div>
    );
}