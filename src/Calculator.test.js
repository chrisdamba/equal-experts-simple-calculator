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

    describe('x operations', () => {
        test('multiplies two numbers and displays correct product', () => {
            const { getByTestId, getByText } = render(<Calculator />)
            fireEvent.click(getByText('2'))
            fireEvent.click(getByText('x'))
            fireEvent.click(getByText('9'))
            fireEvent.click(getByText('='))
            expect(getByTestId('entry')).toHaveTextContent('18')
        })
    })

    describe('÷ operations', () => {
        test('divides two numbers and displays correct result', () => {
            const { getByTestId, getByText } = render(<Calculator />)
            fireEvent.click(getByText('8'))
            fireEvent.click(getByText('÷'))
            fireEvent.click(getByText('4'))
            fireEvent.click(getByText('='))
            expect(getByTestId('entry')).toHaveTextContent('2')
        })

        it('handles division by 0 with displaying Infinity', () => {
            const { getByTestId, getByText } = render(<Calculator />)
            fireEvent.click(getByText('8'))
            fireEvent.click(getByText('÷'))
            fireEvent.click(getByText('0'))
            fireEvent.click(getByText('='))
            expect(getByTestId('entry')).toHaveTextContent('Infinity')
         });
    })

    describe('- operations', () => {
        test('subtracts two numbers and displays correct result', () => {
            const { getByTestId, getByText } = render(<Calculator />)
            fireEvent.click(getByText('8'))
            fireEvent.click(getByText('7'))
            fireEvent.click(getByText('-'))
            fireEvent.click(getByText('4'))
            fireEvent.click(getByText('5'))
            fireEvent.click(getByText('='))
            expect(getByTestId('entry')).toHaveTextContent('2')
        })

        it('handles division by 0 with displaying Infinity', () => {
            const { getByTestId, getByText } = render(<Calculator />)
            fireEvent.click(getByText('8'))
            fireEvent.click(getByText('÷'))
            fireEvent.click(getByText('0'))
            fireEvent.click(getByText('='))
            expect(getByTestId('entry')).toHaveTextContent('Infinity')
         });
    })
})