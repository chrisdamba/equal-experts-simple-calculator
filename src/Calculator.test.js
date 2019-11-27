import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Calculator from './Caluclator'


describe('Calculator', () => {
    test('render correctly', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('simple-calculator')).toBeTruthy()
    })
})