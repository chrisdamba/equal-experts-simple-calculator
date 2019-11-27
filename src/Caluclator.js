import React from 'react'
import './assets/calculator.css'

const Calculator = () => {
    return (
        <div data-testid="simple-calculator" className="ee-calculator">
            <div data-testid="entry" className="ee-calculator-entry">0</div>
            <div className="ee-flex-container">
                <div className="ee-button">clear</div>
                <div className="ee-button operator">x</div>
                <div className="ee-button operator">÷</div>
            </div>
            <div className="ee-flex-container">
                <div className="ee-button" style={{ width: "25%" }}>7</div>
                <div className="ee-button" style={{ width: "25%" }}>8</div>
                <div className="ee-button" style={{ width: "25%" }}>9</div>
                <div className="ee-button operator" style={{ width: "25%" }}>-</div>
            </div>
            <div className="ee-flex-container">
            <div className="ee-button" style={{ width: "25%" }}>4</div>
                <div className="ee-button" style={{ width: "25%" }}>5</div>
                <div className="ee-button" style={{ width: "25%" }}>6</div>
                <div className="ee-button operator" style={{ width: "25%" }}>+</div>
            </div>
            <div className="ee-flex-container">
                <div className="ee-button" style={{ width: "25%" }}>1</div>
                <div className="ee-button" style={{ width: "25%" }}>2</div>
                <div className="ee-button" style={{ width: "25%" }}>3</div>
                <div className="ee-button operator" style={{ width: "25%" }}>=</div>
            </div>
        </div>
    )
}

export default Calculator
