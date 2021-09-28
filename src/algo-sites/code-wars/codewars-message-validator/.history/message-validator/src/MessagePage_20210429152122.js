import React, { useState } from 'react';
// import logo from './logo.svg';
import isAValidMessage from './isAValidMessage'
// import useState
import './App.css';

function MessagePage() {
// const [count, setCount] = useState(0);

// setCount(count + 1)

const valid = (e) => {
  e.preventDefault()
//   isAValidMessage('3hey5hi4home')
}

  return (
    <div className="App">
      <header className="App-header">
      
         {/* <form onSubmit={valid} id="valid">
            <label >message:</label>
            <input type="text"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
                <input id="sub-btn" className="submit" type="submit" value="submit message"></input>
          </form> */}

      </header>
          <button id="btn" onClick={valid}> message validator</button>
    </div>
  );
}

export default MessagePage;
