import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, test, expect } from 'vitest';



import Buildings from './Buildings';

describe('App render tests', () => {
    test('Should render the app', () => {
        render(<Buildings />);
        const linkElement = screen.getByText(
            //i,
        );
        expect(linkElement).toBeDefined();
    });
});