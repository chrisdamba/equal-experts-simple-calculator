import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Calculator from './Caluclator'


describe('Calculator', () => {
    test('render correctly', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('simple-calculator')).toBeTruthy()
    })

    test('has initial entry of 0 displayed', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('entry')).toHaveTextContent('0')
    })
})