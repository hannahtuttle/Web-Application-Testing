import React from 'react';
import {render, fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/react/cleanup-after-each'
import Dashboard from'./dashboard.js'
import { italic } from 'ansi-colors';


describe('dashboard.js', () => {
    // it('returns an initil count of 0', () => {
       
    //         const strikes = jest.fn();
         
    //         // we pass the mock as a prop
    //         const { getByTestId } = render(<Dashboard strikes={strikes} />);
         
    //         // fire the event
    //         const button = getByTestId(/strikeBtn/i);
    //         fireEvent.click(button);
         
    //         // we can now assert that the function was called
    //         button.simulate('click');
    //         expect(strikes).toHaveBeenCalled();  
         
    // })
    it('update strikes when button is clicked', () => {
        const { getByTestId, queryByText } = render(<Dashboard />);
    
        // the text is not there
        expect(queryByText(/1/i)).toBeFalsy();
    
        const button = getByTestId(/strikeBtn/i);
        fireEvent.click(button);
    
        // after clicking the button, the text is there
        expect(queryByText(/1/i)).toBeTruthy();
      });
      it('update strikes when button is clicked', () => {
        const { getByTestId, queryByText } = render(<Dashboard />);
    
        // the text is not there
        expect(queryByText(/1/i)).toBeFalsy();
    
        const button = getByTestId(/ballBtn/i);
        fireEvent.click(button);
    
        // after clicking the button, the text is there
        expect(queryByText(/1/i)).toBeTruthy();
      });

    it('return runs', () => {
        const runs = render(<Dashboard/>)
        runs.getAllByText(/runs/i)
    })
    it('returns innings', () => {
        const innings = render(<Dashboard/>)
        innings.getAllByText(/inning/i)
    })
})