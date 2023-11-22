import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'; 
import { test, expect } from 'vitest';

import Buildings from './Buildings';

test('renders the Buildings component with data', () => {  

    //mock data before work with the API
    const buildingsData = [
        {
            id: 1,
            name: 'Nicolas-Lebsack',
            address: '08 Vera Pass',
            postcode: '15489',
            city: 'Saint John’s',
        },  
    ];
    //wrapp the component with memory router for simulate the router
    const {
        getByText, getByTestId,
    } = render(<MemoryRouter>
        <Buildings buildings={buildingsData} />
    </MemoryRouter>);

    // Check if one building renders correctly
    // check up with data-testid
    expect(getByTestId('buildings')).toBeDefined();
    expect(getByText('Nicolas-Lebsack')).toBeDefined();
    expect(getByText('08 Vera Pass')).toBeDefined();
    expect(getByText('15489 Saint John’s')).toBeDefined();
    
});

