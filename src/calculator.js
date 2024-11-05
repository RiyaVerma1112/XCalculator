import { useState } from "react";

function Calculator() {

    const [exp , setExp] = useState('') ;
    const [val , setVal] = useState('') ;

    const handleEqualClick = (event) => {
        // if(exp === '') setVal("Error") ;
        // event.preventDefault() ;
        // const result = eval(exp); // result will be 14
        // // if(result == undefined) setVal("Error") ;
        // setVal(result) ;

        event.preventDefault();
        if (exp === '') {
            setVal("Error");
            return;
        }
        try {
            const result = eval(exp);
            if (isNaN(result)) {
                setVal("NaN"); 
            } else {
                setVal(result);
            }
        } catch {
            setVal("Error"); 
        }
    }

    const handleOnClick = (char) => {
        setExp(exp+char) ;
    }

    const handleClear = () => {
        setExp('') ;
        setVal('') ;
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>React Calculator</h1>
            <input type="text" value={exp} style={{display:"block" , marginBottom: "50px" , marginTop: "20px" , margin: "0 auto"}}></input>
            { val && <div style={{textAlign: "center" , marginTop: "10px"}}>{val}</div> }
            <div style={{display: "flex" , justifyContent: "center" , gap: "10px" , marginTop: "20px" , height: "50px"}}>
            {/* onClick={() => handleOnClick('7')} doesn't call handleOnClick immediately.  */}
            {/* Instead, it defines a function that calls handleOnClick('7') only when the button is clicked. */}
                <button onClick={() => handleOnClick('7')} style={{width: "50px" , borderRadius: "10px"}}>7</button>
                <button onClick={() => handleOnClick('8')} style={{width: "50px" , borderRadius: "10px"}}>8</button>
                <button onClick={() => handleOnClick('9')} style={{width: "50px" , borderRadius: "10px"}}>9</button>
                <button onClick={() => handleOnClick('+')} style={{width: "50px" , borderRadius: "10px"}}>+</button>
            </div>
            <div style={{display: "flex" , justifyContent: "center" , gap: "10px", marginTop: "10px" , height: "50px"}}>
                <button onClick={() => handleOnClick('4')} style={{display:"block" , width: "50px" , justifyContent: "center" , borderRadius: "10px"}}>4</button>
                <button onClick={() => handleOnClick('5')} style={{width: "50px" , borderRadius: "10px"}}>5</button>
                <button onClick={() => handleOnClick('6')} style={{width: "50px" , borderRadius: "10px"}}>6</button>
                <button onClick={() => handleOnClick('-')} style={{width: "50px" , borderRadius: "10px"}}>-</button>
            </div>
            <div style={{display: "flex" , justifyContent: "center" , gap: "10px" , marginTop: "10px" , height: "50px"}}>
                <button onClick={() => handleOnClick('1')} style={{display:"block" , width: "50px" , justifyContent: "center" , borderRadius: "10px"}}>1</button>
                <button onClick={() => handleOnClick('2')} style={{width: "50px" , borderRadius: "10px"}}>2</button>
                <button onClick={() => handleOnClick('3')} style={{width: "50px" , borderRadius: "10px"}}>3</button>
                <button onClick={() => handleOnClick('*')} style={{width: "50px" , borderRadius: "10px"}}>*</button>
            </div>
            <div style={{display: "flex" , justifyContent: "center" , gap: "10px" , marginTop: "10px" , height: "50px"}}>
                <button onClick={handleClear} style={{display:"block" , width: "50px" , justifyContent: "center" , borderRadius: "10px"}}>C</button>
                <button onClick={() => handleOnClick('0')} style={{width: "50px" , borderRadius: "10px"}}>0</button>
                <button onClick={handleEqualClick} style={{width: "50px" , borderRadius: "10px"}}>=</button>
                <button onClick={() => handleOnClick('/')} style={{width: "50px" , borderRadius: "10px"}}>/</button>
            </div>
        </div>
    ) ;
}

export default Calculator ;
