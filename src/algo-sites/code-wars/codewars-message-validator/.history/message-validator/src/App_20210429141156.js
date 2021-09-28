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
        <form>
          <label >message</label>
          <input type="text"/>
        </form>
          <button id="btn" onClick={valid}> message validator</button>
          <textbox name="" id="" cols="30" rows="10"></textbox>
      </header>
    </div>
  );
}

export default App;
