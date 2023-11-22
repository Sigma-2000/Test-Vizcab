// Buildings.test.js
import { render } from '@testing-library/react';
import React from 'react';
import { test, expect } from 'vitest';

import Buildings from './Buildings';

test('renders the Buildings component with data', () => {  

    const {
        getByText, queryAllByText, queryAllByTestId,
    } = render(<Buildings />);

    // Check that the correct number of buildings renders.
    expect(queryAllByTestId('buildings')).toHaveLength(8);

    // Check if one building renders correctly
    expect(getByText('Nicolas-Lebsack')).toBeDefined();
    expect(getByText('08 Vera Pass')).toBeDefined();
    expect(getByText('15489 Saint John’s')).toBeDefined();
    expect(queryAllByText('Details')).toHaveLength(8); 
});

