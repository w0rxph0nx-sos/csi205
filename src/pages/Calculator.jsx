import React, { useState, useEffect, useCallback } from 'react';
import './Calculator.css'; 

const Calculator = () => {
   
    const [screen, setScreen] = useState('0');
    const [firstOperand, setFirstOperand] = useState(0);
    const [state, setState] = useState('S0');
    const [_operator, setOperator] = useState('?');

    const [lastOperand, setLastOperand] = useState(null); 

    
    const formatScreenValue = (value) => {
        
        let formatted = value.toString();
        if (formatted.length > 9) {
            formatted = parseFloat(formatted).toPrecision(9);
            if (formatted.includes('e')) { 
                return formatted;
            }
            formatted = parseFloat(formatted).toFixed(8); 
        }
        return formatted;
    }

    
    const equalClicked = useCallback(() => {
        if (_operator === '?') return; 

        let secondOperandVal = 0;
        let currentLastOperand = lastOperand;

        if (state === 'S2') {
            secondOperandVal = firstOperand;
            currentLastOperand = secondOperandVal;
        } else if (state === 'S3') {
            secondOperandVal = parseFloat(screen);
            currentLastOperand = secondOperandVal;
        } else if (state === 'S1' && lastOperand !== null) {
            secondOperandVal = lastOperand;
        } else {
            return;
        }
        
        let result = 0;

        if (_operator === '+') {
            result = firstOperand + secondOperandVal;
        } else if (_operator === '-') {
            result = firstOperand - secondOperandVal;
        }

        const newScreen = formatScreenValue(result);
        
        setScreen(newScreen);
        setFirstOperand(result); 
        setState('S1'); 
        setLastOperand(currentLastOperand); 
    }, [screen, firstOperand, state, _operator, lastOperand]);

    
    const operatorClicked = (operator) => {
        if (state === 'S1' || state === 'S0') {
            setFirstOperand(parseFloat(screen));
            setOperator(operator);
            setState('S2');
        } else if (state === 'S2') {
            setOperator(operator); 
        } else if (state === 'S3') {
            equalClicked(); 
            
            setOperator(operator);
            
            setState('S2'); 
        }
    }

   
    const numberClicked = (number) => {
        const numberString = number.toString();
        let newScreen = screen;
        let newState = state;
        
        if (state === 'S0') {
            newScreen = numberString;
            newState = 'S1';
        }
        else if (state === 'S1') {
            if (screen.length < 9) {
                newScreen = screen + numberString;
            }
        } else if (state === 'S2') {
            newScreen = numberString;
            newState = 'S3';
        } else if (state === 'S3') {
            if (screen.length < 9) {
                newScreen += numberString;
            }
        }
        
        setScreen(newScreen);
        setState(newState);
    }

    
    const ceClicked = () => {
       
        setScreen('0');
        setFirstOperand(0);
        setState('S0');
        setOperator('?');
        setLastOperand(null); 
    }

    
    const checkKeyBoard = useCallback((event) => {
        const key = event.key;
        if (key >= '0' && key <= '9') {
            numberClicked(Number(key));
        } else if (key === '+') {
            operatorClicked('+');
        } else if (key === '-') {
            operatorClicked('-'); 
        } else if (key === 'Enter' || key === '=') {
            event.preventDefault(); 
            equalClicked();
        } else if (key === 'Escape') {
            ceClicked();
        }
    }, [equalClicked]); 

    
    useEffect(() => {
        document.addEventListener('keydown', checkKeyBoard);
        return () => {
            document.removeEventListener('keydown', checkKeyBoard);
        };
    }, [checkKeyBoard]);


   
    const plusClass = _operator === '+' ? 'cal-btn-orange' : 'cal-btn-green';
    const minusClass = _operator === '-' ? 'cal-btn-orange' : 'cal-btn-green';


    
    return (
        <div className="cal-container">
            <h2> CALCULATOR </h2>
            
            <div id='screen' className="cal-screen">{screen}</div> 
            <div>
              
                <button className="cal-btn cal-btn-green" disabled>MC</button>
                <button className="cal-btn cal-btn-green" disabled>MR</button>
                <button className="cal-btn cal-btn-green" disabled>M+</button>
                <button className="cal-btn cal-btn-green" disabled>M-</button>
                <button className="cal-btn cal-btn-red" onClick={ceClicked}>CE</button>
            </div>
            <div>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(7)}>7</button>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(8)}>8</button>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(9)}>9</button>
                
                <button id='minus' className={`cal-btn ${minusClass}`} onClick={() => operatorClicked('-')}>-</button>
                <button className="cal-btn cal-btn-green" disabled>/</button>
            </div>
            <div>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(4)}>4</button>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(5)}>5</button>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(6)}>6</button>
              
                <button id='plus' className={`cal-btn ${plusClass}`} onClick={() => operatorClicked('+')}>+</button>
                <button className="cal-btn cal-btn-green" disabled>%</button>
            </div>
            <div>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(1)}>1</button>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(2)}>2</button>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(3)}>3</button>
                <button className="cal-btn cal-btn-green" disabled>x</button>
                <button className="cal-btn cal-btn-green" disabled>1/x</button>
            </div>
            <div>
                <button className="cal-btn cal-btn-blue cal-btn-hover" onClick={() => numberClicked(0)}>0</button>
                <button className="cal-btn cal-btn-green" disabled>.</button>
                <button className="cal-btn cal-btn-green" disabled>+/-</button>
                <button className="cal-btn cal-btn-green" disabled>÷</button>
                <button className="cal-btn cal-btn-green" onClick={equalClicked}>=</button>
            </div>
            <br />
            {/* name */}
            <div>67124614 นาย วรพล แสงพานิช</div>
          
        </div>
    );
}

export default Calculator;