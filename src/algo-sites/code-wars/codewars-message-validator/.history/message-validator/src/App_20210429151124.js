// import logo from './logo.svg';
import isAValidMessage from './isAValidMessage'
import './App.css';

function App() {

const valid = () => {
  isAValidMessage('3hey5hi4home')
}

  return (
    <div className="App">
      <header className="App-header">
         <form onSubmit={valid} id="valid">
          <label >message:</label>
          <input type="text"/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
            {/* <input type="submit" value="Submit"></input> */}
             <input id="sub-btn" className="submit" type="submit" value="submit message"></input>
        </form>
          <button id="btn" onClick={valid}> message validator</button>
      </header>
    </div>
  );
}

export default App;
