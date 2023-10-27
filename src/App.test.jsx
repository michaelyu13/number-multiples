import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('Shows H1 Heading', () => {
        const title = 'Number Multiples';
        const headingEl = screen.getByRole('heading', { level: 1 });
        expect(headingEl).toBeInTheDocument();
        expect(headingEl).toHaveTextContent(title);
    });

    test('150 button numbers are shown', () => {
        const allButtons = screen.getAllByRole('button');
        expect(allButtons.length).toBe(150);
    });

    test('Shows button number 1', () => {
        const buttonEl = screen.getByRole('button', { name: 1 });
        expect(buttonEl).toBeInTheDocument();
    });

    test('Shows button number 150', () => {
        const buttonEl = screen.getByRole('button', { name: 150 });
        expect(buttonEl).toBeInTheDocument();
    });

    test('Does not show button number 0', () => {
        const buttonEl = screen.queryByRole('button', { name: 0 });
        expect(buttonEl).not.toBeInTheDocument();
    });

    test('Does not show button number 151', () => {
        const buttonEl = screen.queryByRole('button', { name: 151 });
        expect(buttonEl).not.toBeInTheDocument();
    });

    test('Initially no button numbers are selected', () => {
        const allButtons = screen.getAllByRole('button');

        allButtons.forEach((button) => {
            expect(button).not.toHaveClass('selected');
        });
    });

    test('Initially no button numbers are highlighted', () => {
        const allButtons = screen.getAllByRole('button');

        allButtons.forEach((button) => {
            expect(button).not.toHaveClass('highlighted');
        });
    });

    test('Select button number 30 and ensure its first 4 multiples get highlighted', () => {
        const classNameBtnHighlighted = 'highlighted';

        const button30El = screen.queryByRole('button', { name: 30 });
        const button60El = screen.queryByRole('button', { name: 60 });
        const button90El = screen.queryByRole('button', { name: 90 });
        const button120El = screen.queryByRole('button', { name: 120 });

        fireEvent.click(button30El);

        expect(button30El).toHaveClass(classNameBtnHighlighted);
        expect(button60El).toHaveClass(classNameBtnHighlighted);
        expect(button90El).toHaveClass(classNameBtnHighlighted);
        expect(button120El).toHaveClass(classNameBtnHighlighted);
    });

    test('Select the same button number a second time removes highlighting from all buttons', () => {
        const classNameBtnHighlighted = 'highlighted';

        const allButtons = screen.getAllByRole('button');
        const button10El = screen.queryByRole('button', { name: 10 });
        const button20El = screen.queryByRole('button', { name: 20 });

        fireEvent.click(button10El);

        expect(button10El).toHaveClass(classNameBtnHighlighted);
        expect(button20El).toHaveClass(classNameBtnHighlighted);

        fireEvent.click(button10El);

        allButtons.forEach((button) => {
            expect(button).not.toHaveClass(classNameBtnHighlighted);
        });
    });

    test('Select a button number and then select a different number that is a multiple removes highlighting from all buttons', () => {
        const classNameBtnHighlighted = 'highlighted';

        const allButtons = screen.getAllByRole('button');
        const button10El = screen.queryByRole('button', { name: 10 });
        const button20El = screen.queryByRole('button', { name: 20 });

        fireEvent.click(button10El);

        expect(button10El).toHaveClass(classNameBtnHighlighted);
        expect(button20El).toHaveClass(classNameBtnHighlighted);

        fireEvent.click(button20El);

        allButtons.forEach((button) => {
            expect(button).not.toHaveClass(classNameBtnHighlighted);
        });
    });

    test('Select a button number and then select a different button number that is not a multiple will not remove highlighting from all buttons', () => {
        const classNameBtnHighlighted = 'highlighted';

        const button10El = screen.queryByRole('button', { name: 10 });
        const button12El = screen.queryByRole('button', { name: 12 });

        fireEvent.click(button10El);

        expect(button10El).toHaveClass(classNameBtnHighlighted);
        expect(button12El).not.toHaveClass(classNameBtnHighlighted);

        fireEvent.click(button12El);

        expect(button10El).not.toHaveClass(classNameBtnHighlighted);
        expect(button12El).toHaveClass(classNameBtnHighlighted);
    });
});
