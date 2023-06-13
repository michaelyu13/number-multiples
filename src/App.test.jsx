import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    test('Shows H1 Heading', () => {
        render(<App />);

        const headingEl = screen.getByRole('heading', { level: 1 });

        expect(headingEl).toBeInTheDocument();
    });
});
