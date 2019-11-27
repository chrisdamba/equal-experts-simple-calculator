import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Calculator from './Caluclator'


describe('Calculator', () => {
    test('render correctly', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('simple-calculator')).toBeTruthy()
    })

    test('has initial entry of --- displayed', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('entry')).toHaveTextContent('---')
    })

    test('adds two numbers and displays correct sum', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('9'))
        fireEvent.click(getByText('='))
        expect(getByTestId('entry')).toHaveTextContent('11')
    })

    test('multiplies two numbers and displays correct product', () => {
        const { getByTestId, getByText } = render(<Calculator />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('x'))
        fireEvent.click(getByText('9'))
        fireEvent.click(getByText('='))
        expect(getByTestId('entry')).toHaveTextContent('18')
    })
})