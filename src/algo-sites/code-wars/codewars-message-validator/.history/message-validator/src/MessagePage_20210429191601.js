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

const handleChange = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    setMessage(e.target.value)
    
}

  return (
    <div className="App">
      <header className="App-header">
      
         <form onSubmit={handleSubmit} id="valid">
            <label>enter message:</label>
            <input type="text" value={message} name="id" onChange={handleChange}/>
            <br/>
            <textbox value={response} name="" id="" cols="20" rows="2"></textbox>
            <br/>
                <input id="sub-btn" className="submit" type="submit" value="submit message"></input>
          {/* <button id="btn" onClick={handleSubmit}> message validator</button> */}
          </form>

      </header>
    </div>
  );
}

export default MessagePage;