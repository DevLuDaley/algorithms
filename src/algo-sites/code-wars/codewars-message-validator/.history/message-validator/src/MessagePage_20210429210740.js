import React, { useState } from 'react';
import isAValidMessage from './isAValidMessage'
import './App.css';

function MessagePage() {
const [message, setMessage] = useState("");
const [response, setResponse] = useState("");

// setMessage(count + 1)

const handleSubmit = (e) => {
    e.preventDefault()
    // isAValidMessage(message)
    // isAValidMessage('3hey5hi4home')
    setResponse(isAValidMessage(message))
}

const handleChangeMessage = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    setMessage(e.target.value)
}

const handleClearMessage = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    // setMessage(e.target.value)
    setMessage("")
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
      
         <form onSubmit={handleSubmit} id="valid">
            <label>enter message:</label>
            <input onChange={handleChangeMessage} value={message} type="text" name="id"/>
          <button id="btn-clear" onClick={handleClearMessage}>clear message</button>
            <label>Message valid:</label>
            <textarea onChange={handleChangeTextArea} value={response} name="" id="" cols="20" rows="2"></textarea>
                <input id="sub-btn" className="submit" type="submit" value="submit message"></input>
          <button id="btn-clear" onClick={handleClearTextArea}>clear response</button>
          {/* <button id="btn" onClick={handleSubmit}> message validator</button> */}
          </form>

      </header>
    </div>
  );
}

export default MessagePage;
