// Buildings.test.js
import React from 'react';
import { render } from 'react-testing-library';

import Buildings from './Buildings';

test('renders the Buildings component with data', () => {  

    // Render the component with mock data
    const { getByText, getByAltText, getByTestId } = render(<Buildings />);

    // Check that the correct number of buildings renders.
    expect(getByTestId('buildings')).toHaveLength(7);

    // Check if one building renders correctly
    expect(getByText('Nicolas-Lebsack')).toBeInTheDocument();
    expect(getByText('08 Vera Pass')).toBeInTheDocument();
    expect(getByText('15489 Saint John’s')).toBeInTheDocument();
    expect(getByAltText('eye')).toBeInTheDocument();
    expect(getByText('Details')).toBeInTheDocument(); 
});

/* test('renders a message for invalid data', () => {
    // Render the component with invalid data (not an array)
    const { getByText } = render(<Buildings />);

    // Check if the component renders a message for invalid data
    expect(getByText('Les données ne sont pas valides.')).toBeInTheDocument();
}); */