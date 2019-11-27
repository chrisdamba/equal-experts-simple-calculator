import React, { useReducer } from 'react'
import './assets/calculator.css'

const reducer = (currentState, newState) => ({ ...currentState, ...newState })

const Calculator = () => {
    const [{ currentEntry, previousEntry, currentOperator }, setState] = useReducer(reducer, {
        currentEntry: '---',
        previousEntry: 0,
        result: 0,
        currentOperator: '',
    })

    const handleClearClick = e => {
        e.preventDefault()
        setState({ currentEntry: '---' })
    }

    const handleOperatorClick = e => {
        currentOperator ? 
            doOperation(currentOperator) :
            setState({ previousEntry: parseInt(currentEntry), currentEntry: '---' })
    
        const operator = e.target.textContent
        setState({ currentOperator: operator })
    }

    const handleNumberClick = e => {
        e.preventDefault()
        const numberToAppendFrom = isNaN(currentEntry) ? '' : currentEntry
        setState({ currentEntry: numberToAppendFrom + e.target.textContent })
    }

    const doOperation = operator => {
        if (operator === '+') {
            setState({
                previousEntry: previousEntry + parseInt(currentEntry),
                currentEntry: '---'
            })
        }
    }

    const getResult = () => {
        if (currentOperator === '+') {
            setState({
                previousEntry: previousEntry + parseInt(currentEntry),
                currentEntry: previousEntry + parseInt(currentEntry),
            })
        } else if (currentOperator === 'x') {
            setState({
                previousEntry: previousEntry * parseInt(currentEntry),
                currentEntry: previousEntry * parseInt(currentEntry),
            })
        }
    }

    return (
        <div data-testid="simple-calculator" className="ee-calculator">
            <div data-testid="entry" className="ee-calculator-entry">{currentEntry}</div>
            <div className="ee-flex-container">
                <div className="ee-button" onClick={handleClearClick}>clear</div>
                <div className="ee-button operator" onClick={handleOperatorClick}>x</div>
                <div className="ee-button operator" onClick={handleOperatorClick}>÷</div>
            </div>
            <div className="ee-flex-container">
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>7</div>
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>8</div>
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>9</div>
                <div className="ee-button operator" style={{ width: "25%" }} onClick={handleOperatorClick}>-</div>
            </div>
            <div className="ee-flex-container">
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>4</div>
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>5</div>
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>6</div>
                <div className="ee-button operator" style={{ width: "25%" }} onClick={handleOperatorClick}>+</div>
            </div>
            <div className="ee-flex-container">
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>1</div>
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>2</div>
                <div className="ee-button" style={{ width: "25%" }} onClick={handleNumberClick}>3</div>
                <div className="ee-button operator" style={{ width: "25%" }} onClick={getResult}>=</div>
            </div>
        </div>
    )
}

export default Calculator
