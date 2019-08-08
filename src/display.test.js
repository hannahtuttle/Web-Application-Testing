import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Display from'./dashboard.js'


describe('Display.js', () => {
    it('displays strikes', () => {
        const display = render(<Display/>)
        display.getAllByText(/strike/i)
    })
    it('displays balls', () => {
        const display =render(<Display/>)
        display.getAllByText(/balls/i)
    })
})