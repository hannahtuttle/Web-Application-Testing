import React from 'react';
import {render, fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
// import "jest-dom/extend-expect";
import '@testing-library/react/cleanup-after-each'
import Dashboard from'./dashboard.js'
import { italic } from 'ansi-colors';


describe('dashboard.js', () => {
    // it('returns an initil count of 0', () => {
       
    //         // const strikes = jest.fn();
         
    //         // // we pass the mock as a prop
    //         // const { getByText } = render(<Dashboard strikes={strikes} />);
         
    //         // // fire the event
    //         // fireEvent.click(getByText(/strikes/i));
         
    //         // // we can now assert that the function was called
    //         // expect(strikes).toHaveBeenCalled();
         
    // })

    // it("displays the strikes", () => {
    //     const { getByTestId } = render(<Dashboard />);
    //     expect(getByTestId("strike")).toBe(/Strikes: 0/i);
    //   });
   
    it('return runs', () => {
        const runs = render(<Dashboard/>)
        runs.getAllByText(/runs/i)
    })
    it('returns innings', () => {
        const innings = render(<Dashboard/>)
        innings.getAllByText(/inning/i)
    })
})