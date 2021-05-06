import React, { useState } from 'react';
import PrimeCheckerArgs from './PrimeCheckerArgs'
// import './App.css';

function AlgoPage() {
const [num, setNum] = useState("");
const [array2, setArray2] = useState("");
const [response, setResponse] = useState("");

// setMessage(count + 1)

const handleSubmit = (e) => {
    e.preventDefault()
    // addArrays(message)
    // AddArrays('3hey5hi4home')
    // setResponse(addArrays(array1, array2))
    setResponse(PrimeCheckerArgs(num))
}

const handleChangeNum = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    setNum(e.target.value)
}
// const handleChangeArray2 = (e) => {
//     e.preventDefault()
//     // console.log(e.target.value);
//     setArray2(e.target.value)
// }

const handleClearNum = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
    // setArray1("")
    // setArray2("")
    setNum("")
}

const handleChangeTextArea = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
}

const handleClearTextArea = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
    setResponse("")
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Check if a number is Prime</h1>
      
         <form onSubmit={handleSubmit} id="valid">
            <label>number:</label>
            <input onChange={handleChangeNum} value={num} type="text" name="id"/>
            <br/>
            {/* <label>array2:</label>
            <input onChange={handleChangeArray2} value={array2} type="text" name="id"/>
            <br/> */}
            <label>number is prime:</label>
            <textarea onChange={handleChangeTextArea} value={response} name="" id="" cols="17" rows="1"></textarea>
            <br/>
                <input id="sub-btn" className="submit" type="submit" value="submit number"></input>
                <br/>
          <button id="btn-clear" onClick={handleClearNum}>clear number</button>
          <button id="btn-clear" onClick={handleClearTextArea}>clear response</button>
          {/* <button id="btn" onClick={handleSubmit}> message validator</button> */}
          </form>

      </header>
    </div>
  );
}

export default AlgoPage;
