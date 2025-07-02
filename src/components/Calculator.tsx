
import React, { useState } from 'react';
import Display from './Display';
import CalculatorButton from './CalculatorButton';
import { calculate, formatDisplay } from '../utils/calculatorUtils';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(formatDisplay(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const executeOperation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(formatDisplay(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const percentage = () => {
    const value = parseFloat(display) / 100;
    setDisplay(formatDisplay(value));
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-xl w-80">
      <Display value={display} />
      
      <div className="grid grid-cols-4 gap-2 mt-4">
        {/* Row 1 */}
        <CalculatorButton 
          onClick={clear} 
          className="bg-gray-400 hover:bg-gray-300 text-black"
          wide
        >
          CE
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => {/* Back functionality can be added */}} 
          className="bg-gray-400 hover:bg-gray-300 text-black"
        >
          ←
        </CalculatorButton>
        <CalculatorButton 
          onClick={percentage} 
          className="bg-gray-400 hover:bg-gray-300 text-black"
        >
          %
        </CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('÷')} 
          className="bg-orange-500 hover:bg-orange-400 text-white"
        >
          ÷
        </CalculatorButton>

        {/* Row 2 */}
        <CalculatorButton onClick={() => inputNumber('7')}>7</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber('8')}>8</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber('9')}>9</CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('×')} 
          className="bg-orange-500 hover:bg-orange-400 text-white"
        >
          ×
        </CalculatorButton>

        {/* Row 3 */}
        <CalculatorButton onClick={() => inputNumber('4')}>4</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber('5')}>5</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber('6')}>6</CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('-')} 
          className="bg-orange-500 hover:bg-orange-400 text-white"
        >
          −
        </CalculatorButton>

        {/* Row 4 */}
        <CalculatorButton onClick={() => inputNumber('1')}>1</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber('2')}>2</CalculatorButton>
        <CalculatorButton onClick={() => inputNumber('3')}>3</CalculatorButton>
        <CalculatorButton 
          onClick={() => performOperation('+')} 
          className="bg-orange-500 hover:bg-orange-400 text-white"
        >
          +
        </CalculatorButton>

        {/* Row 5 */}
        <CalculatorButton 
          onClick={() => inputNumber('0')} 
          className="col-span-2"
          wide
        >
          0
        </CalculatorButton>
        <CalculatorButton onClick={inputDecimal}>.</CalculatorButton>
        <CalculatorButton 
          onClick={executeOperation} 
          className="bg-orange-500 hover:bg-orange-400 text-white"
        >
          =
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;
