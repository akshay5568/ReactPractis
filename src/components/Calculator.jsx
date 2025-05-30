import { useState } from 'react';
import '../Calc.css';

function Calculator (){


const [buttonData, setButtonData] = useState([]);
const [result, setResult] = useState(null);

const handleClear = () => {
    setButtonData("");
    setResult(null);
}

const handleClick = (value) => {
     setButtonData((buttonData) => buttonData + value);
}

const handleCalcu = () => {
    try {
            setResult(eval(buttonData));
    }catch (error) {
       setResult("Error in the expression");
    }    
}



    return (
        <div className="bg">
              <h1>Simple Calculator</h1>
              <input type="" value={buttonData} placeholder='Enter The Number'/><br />
              <button onClick={()=>handleClear()}>C</button>
              <button onClick={()=> handleClick(1)}>1</button>
              <button onClick={()=> handleClick(2)}>2</button>
              <button onClick={()=> handleClick(3)}>3</button>
              <button onClick={()=> handleClick(4)}>4</button>
              <button onClick={()=> handleClick(5)}>5</button>
              <button onClick={()=> handleClick(6)}>6</button>
              <button onClick={()=> handleClick(7)}>7</button>
              <button onClick={()=> handleClick(8)}>8</button>
              <button onClick={()=> handleClick(9)}>9</button>
              <button onClick={()=> handleClick(0)}>0</button>
              <button onClick={()=> handleClick("+")}>+</button>
              <button onClick={()=> handleClick("-")}>-</button>
              <button onClick={()=> handleClick("*")}>*</button>
              <button onClick={()=> handleClick("/")}>/</button>
              <button onClick={handleCalcu}>=</button>

              <hr /><br />
              <h1>{result}</h1>
        </div>
    )
}

export default Calculator;