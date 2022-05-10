import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// Global function from jest that insures there wont be any left over memory data
afterEach(cleanup);

describe('About componet', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        // "asFragment" function, will return a snapshot of the about componet.
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

