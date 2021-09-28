import React, { useState } from 'react';
import isAValidMessage from './isAValidMessage'
import './App.css';

function MessagePage() {
const [message, setMessage] = useState("");

// setMessage(count + 1)

const valid = (e) => {
    e.preventDefault()
    isAValidMessage('3hey5hi4home')
}

const handleChange = (e) => {
    e.preventDefault()
    // setMessage(count + 1)
    
}

  return (
    <div className="App">
      <header className="App-header">
      
         <form onSubmit={valid} id="valid">
            <label >message:</label>
            <input type="text" value={message}/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
                <input id="sub-btn" className="submit" type="submit" value="submit message"></input>
          <button id="btn" onClick={valid}> message validator</button>
          </form>

      </header>
    </div>
  );
}

export default MessagePage;
