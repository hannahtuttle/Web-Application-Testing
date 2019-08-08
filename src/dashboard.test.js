import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from'./dashboard.js'


describe('dashboard.js', () => {
    it('returns an initil count of 0', () => {
       
            const strikes = jest.fn();
         
            // we pass the mock as a prop
            const { getByText } = render(<Dashboard strikes={strikes} />);
         
            // fire the event
            fireEvent.click(getByText(/strikes/i));
         
            // we can now assert that the function was called
            expect(strikes).toHaveBeenCalled();
         
    })
   
})